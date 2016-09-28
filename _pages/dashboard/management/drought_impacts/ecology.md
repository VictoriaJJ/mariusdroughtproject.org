---
layout: management
published: true
permalink: /dashboard/management/drought_impacts/ecology/
subsection: Drought Impacts
_title: Ecology
---

Droughts and water scarcity jointly pose a substantial threat to the environment, agriculture, infrastructure, society and culture in the UK, yet our ability to characterise and predict their occurrence, duration and intensity, as well as minimise their impacts, is often inadequate.

In MaRIUS we developed new methodologies and models for analysis of the impacts of water scarcity on ecosystems, society and various economic activities including agriculture, industry and household consumers. By supporting the analysis of a full range of impacts in a common framework MaRIUS provides multi-attribute characterisation of drought impacts and evidence to evaluate trade-offs between different impacts.


Water is fundamental for the functioning of all **ecosystems**, but they may display different responses depending on their ecological characteristics and the severity and duration of water shortages. In MaRIUS **ecological models** were refined and combined for improved assessment of the impacts of drought on aquatic and wetland habitats and their species. These impacts were also linked to ecosystem function and services, and potential effectiveness of ecosystem management and conservation explored. 

_[Placeholder for key results:
1. All ecosystems will respond to drought, but will vary in the magnitude of the impact and their ability to recover.
2. Terrestrial (woodlands) – different mortality responses of species and change of mortality composition
3. River flows are reduced by droughts, making conditions unsuitable for many species. River habitats can be fragmented preventing normal species movements required for feeding, predictor predator avoidance and reproduction. River ecosystems can recover from drought. The time taken depends on the species and much depends on the severity and duration of the drought.
]_

The ecological analysis is influential in demonstrating the complexity of ecological response to drought.

<div class="large-6 medium-3 columns">
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
	<ol>
		<li>Horizontal bar (100%)</li>
		<li>Spatial distribution map</li>
	</ol>
</div>

<script src='{{ site.baseurl }}/assets/js/pie_chart.js' type='text/javascript'> </script>

_[Placeholder - add tree composition chart and map showing change in composition of tree species for climate scenario by grid or catchment]._

* [Water Quality]({{ site.management_url }}/drought_impacts/water_quality/)
* [Agriculture]({{ site.management_url }}/drought_impacts/agriculture/)
* [Economy]({{ site.management_url }}/drought_impacts/economy/)
