---
layout: dpe
published: true
permalink: /dashboard/dpe/hydrological_response/
_title: Hydrological Response
---

The Environment Agency monitor droughts using various indicators or drought triggers. Triggers can be based on hydrological thresholds such as river levels and flows, reservoir storage and groundwater levels. Understanding the hydrological response to rainfall deficit is essential for drought risk assessment, management and water resource planning.

Hydrological models represent the land surface, rivers, vegetation and sub-surface water. In particular, they are used to estimate flows and groundwater levels at abstraction points, river and wetland water levels for aquatic ecology, soil moisture for ecological and agricultural impacts assessment, as well as providing the basis for water quality assessment. 

In <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> advances were made in **hydrological modelling** at a national and catchment level to facilitate more realistic modelling of droughts and support drought risk assessment, management and water resource planning. 

The models can provide estimates of catchment and national-scale soil-moisture, runoff, river flows and groundwater resources, provide a platform to assess the sensitivity of the system to different human activity scenarios, and allow quantification and analysis of uncertainties in hydrological modelling of drought. The enhanced process representation in national level models will lead to improved performance of those models. Where such models are used for decision making or management purposes, better decisions are expected, including influencing UK policies governing water management and abstraction scenarios.

*For example, results from the improved models highlight that…*

The hydrological indicators are used within the [ecological](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/ecology/ "Ecological impact page"), [agricultural](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/agriculture/ "Agricultural impact page"), and [economic](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/economy/ "Economic impact page") models for impact assessment.

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

	<label>Select an <b>indicator</b></label>
	<input type="radio" name="impact" value="River flow" id="River flow">
    <label for="River flow">River flow</label>
	<input type="radio" name="impact" value="Run-off" id="Run-off"><label for="Run-off">Run-off</label>
	<input type="radio" name="impact" value="Ground water" id="Ground water"><label for="Ground water">Ground water</label>
	<input type="radio" name="impact" value="Soil moisture" id="Soil moisture"><label for="Soil moisture">Soil moisture</label>
</div>

<div class="large-6 medium-6 columns">

<div id='mlc_chart1' style='width:100%'>
		Hydrological indicators
		<svg style='height:300px'></svg>
	</div>

</div>

<script src='{{ site.baseurl }}/assets/js/multi_line_chart.js' type='text/javascript'> </script>

