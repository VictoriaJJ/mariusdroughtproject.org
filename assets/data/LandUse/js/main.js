//global variables

// percentage change of mortality relative to baseline at 50 percentiles
// V1:  beech in the 2030s.
// V2:  oak in the 2030s.
// V3: beech in the 2080s.
// V4: oak in the 2080s

// var keyArray = ["V1","V2","V3","V4"];
// var keyArray2 = [
// 	"Beech in the 2030s",
// 	"Oak in the 2030s",
// 	"Beech in the 2080s",
// 	"Oak in the 2080s"];
var keyArray3 = [
	{"id": "t0_p0_majority", "label": "UK_T0_P0 = baseline"},
	{"id": "t0_pm10_majority", "label": "Temperature: +0°C, Precipitation: -10%"},
	{"id": "t0_pm20_majority", "label": "Temperature: +0°C, Precipitation: -20%"},
	{"id": "t2_p0_majority", "label": "Temperature: +2°C, Precipitation: -0%"},
	{"id": "t2_pm10_majority", "label": "Temperature: +2°C, Precipitation: -10%"},
	{"id": "t2_pm20_majority", "label": "Temperature: +2°C, Precipitation: -20%"},
	{"id": "t4_p0_majority", "label": "Temperature: +4°C, Precipitation: -0%"},
	{"id": "t4_pm10_majority", "label": "Temperature: +4°C, Precipitation: -10%"}, 
	{"id": "t4_pm20_majority", "label": "Temperature: +4°C, Precipitation: -20%"}];

var expressed = keyArray3[0].id;

window.onload = initialize(); //start script once HTML is loaded

function initialize(){ //the first function called once the html is loaded
	setMap();
};

function setMap(){ //set choropleth map parameters	
	//map frame dimensions
	var width = 500;
	var height = 800;
	
	//optional--create a title for the page
	// var title = d3.select("body")
	// 	.append("h1")
	// 	.text("France Regions Choropleth");
	
	//create a new svg element with the above dimensions
	var map = d3.select("body")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "map");
	
	//create Europe albers equal area conic projection, centered on France
	var projection = d3.geo.albers()
		.center([-3.4, 55.2])
		.rotate([0, 0])
		// .parallels([50, 52])
		.scale(4250)
		.translate([width / 2, height / 2]);
	
	//create svg path generator using the projection
	var path = d3.geo.path()
		.projection(projection);

	// var graticule = d3.geo.graticule()
	// 	.step([10, 10]); //place graticule lines every 10 degrees of longitude and latitude
	
	//create graticule background
	// var gratBackground = map.append("path")
	// 	.datum(graticule.outline) //bind graticule background
	// 	.attr("class", "gratBackground") //assign class for styling
	// 	.attr("d", path) //project graticule
	
	//create graticule lines	
	// var gratLines = map.selectAll(".gratLines") //select graticule elements that will be created
	// 	.data(graticule.lines) //bind graticule lines to each element to be created
	//   	.enter() //create an element for each datum
	// 	.append("path") //append each element to the svg as a path element
	// 	.attr("class", "gratLines") //assign class for styling
	// 	.attr("d", path); //project graticule lines

	queue() //use queue.js to parallelize asynchronous data loading for cpu efficiency
		.defer(d3.csv, "data/UK_Grid_Model_Outputs.csv") //load attributes data from csv
		.defer(d3.json, "data/UK_Grid.topojson") //load geometry from countries topojson
		// .defer(d3.json, "data/FranceRegions.topojson") //load geometry from regions topojson
		.await(callback);

	// function callback(error, csvData, europeData, landuseData){
	function callback(error, csvData, landuseData){
		var recolorMap = colorScale(csvData); //retrieve color scale generator

		//variables for csv to json data transfer
		var jsonAreas = landuseData.objects.UK_Grid_eqsg4326.geometries;
			
		//loop through csv data to assign each csv region's values to json region properties
		for (var i=0; i<csvData.length; i++) {		
			var csvIdField = csvData[i]; //the current region's attributes
			// var csvAdm1 = csvIdField.adm1_code; //adm1 code
			var areaIdField = csvIdField.cell_id; //id code
			
			//loop through json areas to assign csv data to the right area
			for (var a=0; a<jsonAreas.length; a++){
				
				//where id fields match, attach csv data to json object
				if (jsonAreas[a].properties.cell_id == areaIdField){
					
					//one more for loop to assign all key/value pairs to json object
					for (var key in keyArray3){
						var attr = keyArray3[key].id;
						var val = parseFloat(csvIdField[attr]);
						jsonAreas[a].properties[attr] = val;
					};
					
					jsonAreas[a].properties.name = csvIdField.name; //set prop
					break; //stop looking through the json regions
				};
			};
		};

		// //add Europe countries geometry to map			
		// var countries = map.append("path") //create SVG path element
		// 	.datum(topojson.feature(europeData, europeData.objects.EuropeCountries)) //bind countries data to path element
		// 	.attr("class", "countries") //assign class for styling countries
		// 	.attr("d", path); //project data as geometry in svg

		//add regions to map as enumeration units colored by data
		var areas = map.selectAll(".areas")
			.data(topojson.feature(landuseData, landuseData.objects.UK_Grid_eqsg4326).features) //bind regions data to path element
			.enter() //create elements
			.append("path") //append elements to svg
			.attr("class", "areas") //assign class for additional styling
			.attr("id", function(d) { return d.properties.cell_id })
			.attr("d", path) //project data as geometry in svg
			.style("fill", function(d) { //color enumeration units
				return choropleth(d, recolorMap);
			})
			// .on("mouseover", highlight)
			// .on("mouseout", dehighlight)
			// .on("mousemove", moveLabel)
			.append("desc") //append the current color
				.text(function(d) {
					return choropleth(d, recolorMap);
				});

		createDropdown(csvData); //create the dropdown menu

	};
};

function createDropdown(csvData){
	//add a select element for the dropdown menu
	var dropdown = d3.select("body")
		.append("div")
		.attr("class","dropdown") //for positioning menu with css
		// .html("Select a model output:<br>")
		.append("select")
		.on("change", function(){ changeAttribute(this.value, csvData) }); //changes expressed attribute

	//create each option element within the dropdown
	dropdown.selectAll("options")
		.data(keyArray3)
		.enter()
		.append("option")
		.attr("value", function(d, i){ 
			return d.id
		})
		.text(function(d, i) { 
			return d.label }
		);
};

function colorScale(csvData){
	// // 1 = Arable: #f40904
	// // 2 = Grassland: #9bdb0f
	// // 3 = Very extensive grassland: #8c9f2d
	// // 4 = Forest: #795b1c
	// // 5 = Urban: #696969
	// // 6 = Unmanaged: #2e2d2a
	var color = d3.scale.ordinal()
		.domain([1, 2, 3, 4, 5])
		.range(["#f40904", "#9bdb0f", "#8c9f2d", "#795b1c", "#696969", "#2e2d2a"]);
	
	//build array of all currently expressed values for input domain
	var domainArray = [];
	for (var i in csvData){
		domainArray.push(Number(csvData[i][expressed]));
	};

	//for quantile scale, pass array of expressed values as domain
	color.domain(domainArray);
	
	return color; //return the color scale generator
};

function choropleth(d, recolorMap){
	//get data value
	var value = d.properties[expressed];
	//if value exists, assign it a color; otherwise assign gray
	if (value) {
		return recolorMap(value); //recolorMap holds the colorScale generator
	} else {
		return "#ccc";
	};
};

function changeAttribute(attribute, csvData){
	//change the expressed attribute
	expressed = attribute;
	
	//recolor the map
	d3.selectAll(".areas") //select every region
		.style("fill", function(d) { //color enumeration units
			return choropleth(d, colorScale(csvData)); //->
		})
		.select("desc") //replace the color text in each region's desc element
			.text(function(d) {
				return choropleth(d, colorScale(csvData)); //->
			});
};

// function format(value){
// 	//format the value's display according to the attribute
// 	if (expressed != "Population"){
// 		value = "$"+roundRight(value);
// 	} else {
// 		value = roundRight(value);
// 	};
	
// 	return value;
// };

// function roundRight(number){
// 	return number.toPrecision(4);
// 	// if (number>=100){
// 	// 	var num = Math.round(number);
// 	// 	return num.toLocaleString();
// 	// } else if (number<100 && number>=10){
// 	// 	return number.toPrecision(4);
// 	// } else if (number<10 && number>=1){
// 	// 	return number.toPrecision(3);
// 	// } else if (number<1){
// 	// 	return number.toPrecision(2);
// 	// };
// };

// function highlight(data){
// 	var props = data.properties; //json properties

// 	console.log(data.properties);

// 	d3.select("#"+props.cell_id) //select the current region in the DOM
// 		.style("fill", "#000"); //set the enumeration unit fill to black

	// // var labelAttribute = "<h1>"+props[expressed].toPrecision(3)+"</h1>"+
	// // 	"<br>"+expressed+""; //label content
	// var labelAttribute = "<h1>"+props[expressed].toPrecision(3)+"%</h1><br>";
	// // var labelName = props.name //html string for name to go in child div
	// var labelName = props.cell_id.toString() //html string for name to go in child div
	
	// //create info label div
	// var infolabel = d3.select("body")
	// 	.append("div") //create the label div
	// 	.attr("class", "infolabel")
	// 	.attr("id", props.cell_id.toString()+"label") //for styling label
	// 	.html(labelAttribute) //add text
	// 	.append("div") //add child div for feature name
	// 	.attr("class", "labelname") //for styling name
	// 	.html(labelName); //add feature name to label
// };

// function dehighlight(data){
// 	var props = data.properties; //json properties
// 	console.log(data.properties);

// 	var area = d3.select("#"+props.cell_id); //select the current area
// 	var fillcolor = area.select("desc").text(); //access original color from desc
// 	area.style("fill", fillcolor); //reset enumeration unit to orginal color
	
// 	d3.select("#"+props.cell_id+"label").remove(); //remove info label
// };

// function moveLabel() {
// 	var x = d3.event.clientX+10; //horizontal label coordinate based mouse position stored in d3.event
// 	var y = d3.event.clientY-75; //vertical label coordinate
// 	d3.select(".infolabel") //select the label div for moving
// 		.style("margin-left", x+"px") //reposition label horizontal
// 		.style("margin-top", y+"px"); //reposition label vertical
// };
