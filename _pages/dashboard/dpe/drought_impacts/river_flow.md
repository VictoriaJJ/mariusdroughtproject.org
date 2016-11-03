---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_impacts/river_flow/
subsection: Drought Impacts
_title: Impacts of drought on river flow
related_links:
  - name: Hydrology
    url: '!science_url!/drought_impacts_management/hydrology/'
  - name: Hydrological output UK
    url: 'http://www.hydoutuk.net/latest-outlook'
    external: true
---
The Environment Agency and water companies monitor droughts using various indicators or drought triggers. Triggers can be based on hydrological thresholds such as river levels and flows, reservoir storage and groundwater levels. Understanding the hydrological response to rainfall deficit is essential for drought risk assessment, management and water resource planning.

Hydrological models represent the land surface, rivers, vegetation and sub-surface water. In particular, they are used to estimate river flows and soil moisture for ecological and agricultural impacts assessment, as well as providing the basis for a water quality assessment.

Output from the hydrological models can be used within [environmental](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/environment/), [water resource management](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_management/water_supply_options/), [farming](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/farming/), and [economic](https://5j4.github.io/mariusdroughtproject.org/dashboard/dpe/drought_impacts/economy/) modelling for further analysis of impacts of drought and water scarcity.

![Monthly mean river flow for July 1976.png]({{site.baseurl}}/assets/img/Monthly mean river flow for July 1976.png)

_Thames basin: Monthly mean river flow for July 1976 (G2G output)_

COMING SOON!!

- See outputs from the different <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> hydrological models for river flow, soil moisture, run-off, and ground water.
- How these outputs vary across spatial scales ranging from the Thames and Severn catchments to England and Great Britain.
- How these outputs vary for the baseline, near future and far future.


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
