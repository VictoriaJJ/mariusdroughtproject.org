---
layout: management
published: true
permalink: /dashboard/management/drought_impacts/agriculture/

subsection: Drought Impacts
_title: Agriculture
---

Droughts and water scarcity jointly pose a substantial threat to the environment, agriculture, infrastructure, society and culture in the UK, yet our ability to characterise and predict their occurrence, duration and intensity, as well as minimise their impacts, is often inadequate.

In MaRIUS we developed new methodologies and models for analysis of the impacts of water scarcity on ecosystems, society and various economic activities including agriculture, industry and household consumers. By supporting the analysis of a full range of impacts in a common framework MaRIUS provides multi-attribute characterisation of drought impacts and evidence to evaluate trade-offs between different impacts. [Click on the below categories to see further information on the analysis and impacts of water scarcity]

///

Droughts and water scarcity affect rain-fed and irrigated agricultural systems across multiple timescales.  Effects on long term yield and profit variability influence farm business planning and investment, for example affecting crop and rotation selection and investment in infrastructure for irrigation. In MaRIUS critical thresholds of drought characteristics that trigger changes in long term farm-level planning were established. Farm modelling tools were used to simulate agricultural impacts and farmer responses, and analyse the impacts and trade-offs of different irrigation management strategies and decisions.

*The analysis highlighted that…..*


* [Water Quality](drought_impacts_wq/)
* [Ecology](drought_impacts_ecology)
* [Economy](drought_impacts_economy)


1. Crop Yields: Bar | Bar
2. Price: line


<div class="large-6 medium-6 columns">
	<label>Select a <b>drought event</b></label>
	<input type="radio" name="drought_event" value="drought_event_01" id="drought_event_01"><label for="drought_event_01">01</label>
	<input type="radio" name="drought_event" value="drought_event_02" id="drought_event_02"><label for="drought_event_02">02</label>
	<input type="radio" name="drought_event" value="drought_event_03" id="drought_event_03"><label for="drought_event_03">03</label>
	<input type="radio" name="drought_event" value="drought_event_04" id="drought_event_04"><label for="drought_event_04">04</label>

	<label>Select an <b>spatial scale</b></label>
	<input type="radio" name="spatial_scale" value="spatial_scale_thames" id="spatial_scale_thames"><label for="spatial_scale_thames">Thames</label>
	<input type="radio" name="spatial_scale" value="spatial_scale_severn" id="spatial_scale_severn"><label for="spatial_scale_severn">Severn</label>
	<input type="radio" name="spatial_scale" value="spatial_scale_england" id="spatial_scale_england"><label for="spatial_scale_england">England</label>

	<label>Select an <b>impact</b></label>
	<input type="radio" name="impact" value="impact_water_quality" id="impact_water_quality"><label for="impact_water_quality">Water quality</label>
	<input type="radio" name="impact" value="impact_ecology" id="impact_ecology"><label for="impact_ecology">Ecology</label>
	<input type="radio" name="impact" value="impact_agriculture" id="impact_groundwater"><label for="impact_groundwater">Agriculture</label>
	<input type="radio" name="impact" value="impact_economy" id="impact_economy"><label for="impact_economy">Economy</label>
</div>

<div class="large-6 medium-6 columns">

	<div id='bar_chart1' style='width:100%'>>
		Crop yield 1
		<svg style='height:300px;'></svg>
	</div>

	<div id='bar_chart2' style='width:100%'>
		Crop yield 2
		<svg style='height:300px'></svg>
	</div>

	<div id='mlc_chart1' style='width:100%'>
		Crop price 
		<svg style='height:300px'></svg>
	</div>

</div>



<script>
function initBarChart(chart_id){
	nv.addGraph(function() {
		var chart_name = chart_id + '_chart';
		var chart_name = nv.models.discreteBarChart()
		  .x(function(d) { return d.label })    //Specify the data accessors.
		  .y(function(d) { return d.value })
		  .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
		  .tooltips(false)        //Don't show tooltips
		  .showValues(true)       //...instead, show the bar value right on top of each bar.
		  .transitionDuration(350)
		  ;

		d3.select('#' + chart_id + ' svg')
		  .datum(exampleData())
		  .call(chart_name);

		nv.utils.windowResize(chart_name.update);

		return chart_name;
	});
};

//Each bar represents a single discrete quantity.
function exampleData() {
 return  [ 
    {
      key: "Crop production",
      values: [
        { 
          "label" : "A Label" ,
          "value" : -29.765957771107
        } , 
        { 
          "label" : "B Label" , 
          "value" : 0
        } , 
        { 
          "label" : "C Label" , 
          "value" : 32.807804682612
        } , 
        { 
          "label" : "D Label" , 
          "value" : 196.45946739256
        } , 
        { 
          "label" : "E Label" ,
          "value" : 0.19434030906893
        }
      ]
    }
  ]

}

initBarChart('bar_chart1');
initBarChart('bar_chart2');

</script>

<script src='{{ site.baseurl }}/assets/js/multi_line_chart.js' type='text/javascript'> </script>

