---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_management/planning_long_term/

subsection: Drought Management
_title: Planning for the long term
---
Drought management is a problem of minimising negative impacts, given uncertain information about past, present and future conditions. This is dependent on how impacts and risks of droughts and water scarcity are understood, managed by key stakeholders, and shaped by institutions, regulation and markets.

Droughts occur at multiple spatial scales and evolve over timescales that make them distinctive compared to other ‘natural’ hazards. The impacts of water scarcity on the environment, society and the economy are complex, reflecting meteorological and hydrological conditions as well as human choices and trade-offs between competing claims for water. At a broad scale drought plans, drought orders and permits, as well as more general powers for environmental regulators to limit the abstraction of water from ground and surface water bodies are key regulatory tools for preventing and managing drought.

_[Placeholder: Add text and
1. Overview (interactive visual) of the possible range of drought management options and highlight currently applied range of drought management options in UK.
2. Focus on the main ‘sets’ of options to describe further.]_

*[drought plans, drought orders and permits]: Define in pop-up


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

	<label>Select a <b>management strategy</b></label>
	<input type="radio" name="management_strategy" value="management_strategy_a" id="management_strategy_a"><label for="management_strategy_a">A</label>
	<input type="radio" name="management_strategy" value="management_strategy_b" id="management_strategy_b"><label for="management_strategy_b">B</label>

	<label>Select a <b>result format</b></label>
	<input type="radio" name="result_format" value="result_format_trade_offs" id="result_format_trade_offs"><label for="result_format_trade_offs">Trade-offs</label>
	<input type="radio" name="result_format" value="result_format_trade_risk" id="result_format_trade_risk"><label for="result_format_trade_risk">Risks</label>
</div>

<div class="large-6 medium-6 columns">
	<div id="chart" style="height:500px"></div>
</div>

<script src='{{ site.baseurl }}/assets/js/radar_chart.js' type='text/javascript'> </script>

<script>
	var w = 350,
	h = 350;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Agriculture','Water Quality', 'Economy'];

//Data
var d = [
		  [
			{axis:"impact1",value:0.59},
			{axis:"impact2",value:0.56},
			{axis:"impact3",value:0.42},
			{axis:"impact4",value:0.34},
			{axis:"impact5",value:0.48},
			{axis:"impact6",value:0.14},
			{axis:"impact7",value:0.11},
			{axis:"impact8",value:0.05},
			{axis:"impact9",value:0.07},
			{axis:"impact10",value:0.12}
		  ],[
			{axis:"impact1",value:0.48},
			{axis:"impact2",value:0.41},
			{axis:"impact3",value:0.27},
			{axis:"impact4",value:0.28},
			{axis:"impact5",value:0.46},
			{axis:"impact6",value:0.29},
			{axis:"impact7",value:0.11},
			{axis:"impact8",value:0.14},
			{axis:"impact9",value:0.05},
			{axis:"impac10",value:0.19}
		  ],[
			{axis:"impact1",value:0.34},
			{axis:"impact2",value:0.40},
			{axis:"impact3",value:0.31},
			{axis:"impact4",value:0.48},
			{axis:"impact5",value:0.22},
			{axis:"impact6",value:0.51},
			{axis:"impact7",value:0.22},
			{axis:"impact8",value:0.28},
			{axis:"impact9",value:0.5},
			{axis:"impac10",value:0.40}
		  ]

		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

</script>

*[risk-based]: define in pop-up