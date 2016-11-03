---
layout: dpe
published: true
permalink: /dashboard/dpe/what_are_droughts/
_title: What are droughts?
related_links:
  - name: Droughts over the 20th century
    url: '!science_url!/drought_climatology/20c/'
  - name: CEH UK Drought Portal
    url: 'https://eip.ceh.ac.uk/droughts'
    external: true
---

Droughts are natural events which occur when a period of low rainfall creates a shortage of water. Each drought is different, with the nature, timing and impacts varying according to location and which sectors are affected such as public water supply, agriculture, the environment or industry. Water scarcity describes the relationship between water demand and availability.

Drought events can also be defined based on the duration of the rainfall deficit and the particular impacts that evolve over time. The Environment Agency identify three main types of drought which may occur separately or together:

![Drought definitions_v02.png]({{site.baseurl}}/assets/img/Drought definitions_v02.png)


## Identifying drought events

Drought indices can incorprate various climate and hydrological data within a single indicator that can be used for analysing trends and relaying information to stakeholders, policy makers and the public in a clear format. The drought index value is often presented as a single number, which can be far easier to understand and use than raw data. In <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> we used the Standardized Precipitation Evapotranspiration Index **(SPEI)** to determine drought. The SPEI reflects changes in rainfall as well temperature on water demand through the inclusion of potential evapotranspiration (PET).

The SPEI can be calculated for different time periods so that the dynamics of different types of drought (environmental, agricultural, or water supply drought) can be assessed. Drought onset, severity, and duration are categorised based on the SPEI values, with negative values below a set threshold used to determine drought.

The graph right illustrate the SPEI time series from 1974-77. From May 1975 to August 1976 it illustrates the effects of below aveage rainfall, which resulted in the most significant drought to affect the UK since 1910. This can be selected for different SPEI timeseries and shows regional averages for different river basin regions. 

<div class="large-6 medium-6 columns">
	<label><b>Select an SPEI time period</b></label>
	<input type="radio" name="spei" value="spei3" id="spei3"><label for="spei3">SPEI 3</label>
	<input type="radio" name="spei" value="spei6" id="spei6"><label for="spei6">SPEI 6</label>
	<input type="radio" name="spei" value="spei12" id="spei12"><label for="spei12">SPEI 12</label>
	<input type="radio" name="spei" value="spei24" id="spei24"><label for="spei24">SPEI 24</label>

	<!-- <label>Select SPEI time period</label>
	<input id="checkbox1" type="checkbox"><label for="checkbox1">SPEI 3</label>
	<input id="checkbox2" type="checkbox"><label for="checkbox2">SPEI 6</label>
	<input id="checkbox3" type="checkbox"><label for="checkbox3">SPEI 12</label>
	<input id="checkbox4" type="checkbox"><label for="checkbox4">SPEI 24</label>

	<label>Select a <b>time period</b></label>
	<input type="radio" name="time_period" value="time_period_present" id="time_period_present"><label for="time_period_present">Present</label>
	<input type="radio" name="time_period" value="time_period_2030s" id="time_period_2030s"><label for="time_period_2030s">2030s</label>
	<input type="radio" name="time_period" value="time_period_2080s" id="time_period_2080s"><label for="time_period_2080s">2080s</label>
	<input type="radio" name="time_period" value="time_period_all" id="time_period_all"><label for="time_period_all">All</label>

	<label>Select a <b>drought event</b></label>
	<input type="radio" name="drought_event" value="drought_event_01" id="drought_event_01"><label for="drought_event_01">01</label>
	<input type="radio" name="drought_event" value="drought_event_02" id="drought_event_02"><label for="drought_event_02">02</label>
	<input type="radio" name="drought_event" value="drought_event_03" id="drought_event_03"><label for="drought_event_03">03</label>
	<input type="radio" name="drought_event" value="drought_event_04" id="drought_event_04"><label for="drought_event_04">04</label>

	<label>Select a <b>spatial scale</b></label>
	<input type="radio" name="spatial_scale" value="spatial_scale_thames" id="spatial_scale_thames"><label for="spatial_scale_thames">Thames</label>
	<input type="radio" name="spatial_scale" value="spatial_scale_uk" id="spatial_scale_uk"><label for="spatial_scale_uk">UK</label>

	<label>Select an <b>spatial scale</b></label>
	<input type="radio" name="spatial_scale" value="spatial_scale_thames" id="spatial_scale_thames"><label for="spatial_scale_thames">Thames</label>
	<input type="radio" name="spatial_scale" value="spatial_scale_severn" id="spatial_scale_severn"><label for="spatial_scale_severn">Severn</label>
	<input type="radio" name="spatial_scale" value="spatial_scale_england" id="spatial_scale_england"><label for="spatial_scale_england">England</label>

	<label>Select an <b>indicator</b></label>
	<input type="radio" name="indicator" value="indicator_river_flow" id="indicator_river_flow"><label for="indicator_river_flow">River flow</label>
	<input type="radio" name="indicator" value="indicator_run_off" id="indicator_run_off"><label for="indicator_run_off">Run-off</label>
	<input type="radio" name="indicator" value="indicator_groundwater" id="indicator_groundwater"><label for="indicator_groundwater">Groundwater</label>
	<input type="radio" name="indicator" value="indicator_soil_moisture" id="indicator_soil_moisture"><label for="indicator_soil_moisture">Soil moisture</label>
	<input type="radio" name="indicator" value="indicator_all" id="indicator_all"><label for="indicator_all">All</label>

	<label>Select an <b>impact</b></label>
	<input type="radio" name="impact" value="impact_water_quality" id="impact_water_quality"><label for="impact_water_quality">Water quality</label>
	<input type="radio" name="impact" value="impact_ecology" id="impact_ecology"><label for="impact_ecology">Ecology</label>
	<input type="radio" name="impact" value="impact_agriculture" id="impact_groundwater"><label for="impact_groundwater">Agriculture</label>
	<input type="radio" name="impact" value="impact_economy" id="impact_economy"><label for="impact_economy">Economy</label>

	<label>Select a <b>management strategy</b></label>
	<input type="radio" name="management_strategy" value="management_strategy_a" id="management_strategy_a"><label for="management_strategy_a">A</label>
	<input type="radio" name="management_strategy" value="management_strategy_b" id="management_strategy_b"><label for="management_strategy_b">B</label>
	<input type="radio" name="management_strategy" value="management_strategy_c" id="management_strategy_c"><label for="management_strategy_c">C</label>

	<label>Select a <b>result format</b></label>
	<input type="radio" name="result_format" value="result_format_trade_offs" id="result_format_trade_offs"><label for="result_format_trade_offs">Trade-offs</label>
	<input type="radio" name="result_format" value="result_format_trade_risk" id="result_format_trade_risk"><label for="result_format_trade_risk">Risks</label> -->
</div>

<div class="large-6 medium-6 columns">
    <div id='chart1' style='width:100%'>
		<svg style='height:300px' />
	</div>

	<!-- <div id='chart2' style='width:100%'>
		<svg style='height:300px' />
	</div> -->

	<!-- <div id='chart3' style='width:100%'>
		<svg style='height:300px' />
	</div> -->

	<div id='chart4' style='width:100%'>
		<svg style='height:300px' />
	</div>

	<!-- <div id='chart5' style='width:100%'>
		<svg style='height:300px' />
	</div> -->
</div>

<script src='{{ site.baseurl }}/assets/js/stacked_area.js' type='text/javascript'> </script>
<script src='{{ site.baseurl }}/assets/libs/js/stream_layers.js' type='text/javascript'> </script>
<script src='{{ site.baseurl }}/assets/js/stacked_grouped_nbar_chart.js' type='text/javascript'> </script>


*[MaRIUS]:  Managing the Risks, Impacts and Uncertainties of drought and water Scarcity

*[PET]: Maximum quantity of water capable of being evaporated in a given climate, by a continuous expanse of vegetation covering the whole ground and well supplied with water. It includes evaporation from the soil and transpiration from the vegetation.
