---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_impacts/economy/
subsection: Drought Impacts
_title: Economy
---

Droughts and water scarcity jointly pose a substantial threat to the environment, agriculture, infrastructure, society and culture in the UK, yet our ability to characterise and predict their occurrence, duration and intensity, as well as minimise their impacts, is often inadequate.

In MaRIUS we developed new methodologies and models for analysis of the impacts of water scarcity on ecosystems, society and various economic activities including agriculture, industry and household consumers. By supporting the analysis of a full range of impacts in a common framework MaRIUS provides multi-attribute characterisation of drought impacts and evidence to evaluate trade-offs between different impacts.

**Economic** impacts of drought can be large and far-ranging. In MaRIUS a new analytical framework was developed, to capture all the factors that contribute to, or mitigate against, the economic costs or impacts of a drought (including policy-making, planning and management actions). Using an economic model, the direct and indirect losses of drought on domestic and commercial water consumers and major industrial abstractors were quantified. In particular, there was a focus on **electricity** generation as approximately one third of the UK’s electricity supply depends on freshwater, for the cooling of coal, gas and biomass thermal power plants. These power plants need a reliable water supply and operate under strict environmental controls to minimise ecological impacts.

_[Placeholder for results: 
1. The analysis highlighted that economic risk of drought at the Thames/UK level will increase by xx% for the near (2030s) and far (2080s) future.
2. Indirect costs accounted for xx% of losses highlighting…
3. Low flows and warm water temperatures mean some power plants may need to reduce or shut down operations. A drought could potentially impact on several plants simultaneously, resulting in the need to use more expensive electricity supply options, thus pushing up electricity supply prices.]_


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
	<div id='sgnb_chart1' style='width:100%'>
		 Total output losses for different climate and management scenarios
		<svg style='height:300px' />
	</div>
</div>

<script src='{{ site.baseurl }}/assets/libs/js/stream_layers.js' type='text/javascript'> </script>

<script>
// nv.addGraph(function() {
// var sgnb_chart1 = nv.models.multiBarChart()
//   .transitionDuration(350)
//   .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
//   .rotateLabels(0)      //Angle to rotate x-axis labels.
//   .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
//   .groupSpacing(0.1)    //Distance between each group of bars.
// ;

// sgnb_chart1.xAxis
//     .tickFormat(d3.format(',f'));

// sgnb_chart1.yAxis
//     .tickFormat(d3.format(',.1f'));

// d3.select('#sgnb_chart1 svg')
//     .datum(exampleData('Intensity'))
//     .call(sgnb_chart1);

// nv.utils.windowResize(sgnb_chart1.update);

// return sgnb_chart2;
// });


function initGraph(chart_id, var_name){
	nv.addGraph(function() {
	var chart_name = chart_id + '_chart';
	var chart_name = nv.models.multiBarChart()
	  .transitionDuration(350)
	  .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
	  .rotateLabels(0)      //Angle to rotate x-axis labels.
	  .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
	  .groupSpacing(0.1)    //Distance between each group of bars.
	;

	chart_name.xAxis
	    .tickFormat(d3.format(',f'));

	chart_name.yAxis
	    .tickFormat(d3.format(',.1f'));

	d3.select('#' + chart_id + ' svg')
	    .datum(exampleData(var_name))
	    .call(chart_name);

	nv.utils.windowResize(chart_name.update);

	return chart_name;
	});
};


//Generate some nice data.
function exampleData(var_name) {
  // return stream_layers(3,10+Math.random()*10,.1).map(function(data, i) {
  return stream_layers(4,5,.1).map(function(data, i) {
    return {
      // key: [1,2,3],
      key:  var_name + i,
      values: data
    };
  });
}

initGraph('sgnb_chart1', 'scenario');
</script>   

<div class="large-6 medium-6 columns">

<div id='mlc_chart1' style='width:100%'>
		Availability of electricity capacity changing through time
		<svg style='height:300px'></svg>
	</div>

</div>

<script src='{{ site.baseurl }}/assets/js/multi_line_chart.js' type='text/javascript'> </script>

_[Placeholder: Suggested animation of UK map with location of ~20 key power plants, and showing their availability through time during an example drought event – e.g. green marker = 100% available; yellow marker = reduced operation; red marker = shutdown. Simultaneously, on the side a growing bar chart of economic costs growing…]._

* [Water Quality](drought_impacts_wq)
* [Ecology](drought_impacts_ecology)
* [Agriculture](drought_impacts_agriculture)



*[direct and indirect]: Define in pop-up
