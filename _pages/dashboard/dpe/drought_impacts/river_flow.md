---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_impacts/river_flow/
_title: Impacts of drought on river flow
---
The Environment Agency monitor droughts using various indicators or drought triggers. Triggers can be based on hydrological thresholds such as river levels and flows, reservoir storage and groundwater levels. Understanding the hydrological response to rainfall deficit is essential for drought risk assessment, management and water resource planning.

Hydrological models represent the land surface, rivers, vegetation and sub-surface water. In particular, they are used to estimate flows and groundwater levels at abstraction points, river and wetland water levels for aquatic ecology, soil moisture for ecological and agricultural impacts assessment, as well as providing the basis for water quality assessment. 

*Updated text to be sent*
Results to include:
1. Maps for different regions and temporal scales
2. Drought Risk

The hydrological indicators are used within the [ecological](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/ecology/ "Ecological impact page"), [agricultural](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/agriculture/ "Agricultural impact page"), and [economic](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/economy/ "Economic impact page") models for impact assessment.

<div class="large-6 medium-6 columns">
	<label>Select a <b>temporal scale</b></label>
	<input type="radio" name="drought_event" value="drought_event_01" id="drought_event_01"><label for="drought_event_01">current</label>
	<input type="radio" name="drought_event" value="drought_event_02" id="drought_event_02"><label for="drought_event_02">near future</label>
	<input type="radio" name="drought_event" value="drought_event_03" id="drought_event_03"><label for="drought_event_03">far future</label>

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

