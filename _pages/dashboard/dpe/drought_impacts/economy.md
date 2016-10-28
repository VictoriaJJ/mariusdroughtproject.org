---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_impacts/economy/
subsection: Drought Impacts
_title: Impacts of drought on the economy
related_links:
  - name: Economy and Industry
    url: '!science_url!/drought_impacts_management/economy_and_industry/'
---
**Economic** impacts of drought can be large and far-ranging. However, estimates of the economic impact of droughts are generally developed in the absence of an explicit conceptual framework. Therefore, in <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> a new analytical framework was developed, to capture all the factors that contribute to, or mitigate against, the economic costs or impacts of a drought. These factors include climate and drought dynamics, infrastructure in place and policy, planning and management actions. 

The economic model will be used to estimate direct and indirect losses of drought and highlight the impacts associated with different drought management options.

A particular focus was also placed on **electricity** generation. Approximately one third of the UK’s electricity supply depends on freshwater, for the cooling of coal, gas and biomass thermal power plants. These power plants need a reliable water supply and operate under strict environmental controls to minimise ecological impacts. Low flows and warm water temperatures mean some power plants may need to reduce or shut down operations, resulting in the need to use more expensive electricity supply options, thus pushing up electricity supply prices.

The maps right illustrate the proportion of capacity unavailable at 40 power plants across the UK, for different time-periods, with estimated economic costs shown in the bar graphs below.

- In severe drought years, such as the 1975-‘76 drought, the value of unavailable generations ranges potentially up to £400-800m.


*[indirect]:  Direct economic impacts can indirectly affect business production affecting the flow of goods and services across sectors

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
