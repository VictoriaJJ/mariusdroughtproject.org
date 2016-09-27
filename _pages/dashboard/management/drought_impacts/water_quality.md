---
layout: management
published: true
permalink: /dashboard/management/drought_impacts/water_quality/
subsection: Drought Impacts
_title: Water Quality
---

Droughts and water scarcity jointly pose a substantial threat to the environment, agriculture, infrastructure, society and culture in the UK, yet our ability to characterise and predict their occurrence, duration and intensity, as well as minimise their impacts, is often inadequate.

In MaRIUS we developed new methodologies and models for analysis of the impacts of water scarcity on ecosystems, society and various economic activities including agriculture, industry and household consumers. By supporting the analysis of a full range of impacts in a common framework MaRIUS provides multi-attribute characterisation of drought impacts and evidence to evaluate trade-offs between different impacts.

Droughts can affect **water quality** in rivers and reservoirs due to reduced dilution of discharges and runoff, enhanced biogeochemical processes and longer residence times in rivers. Moreover, at the end of a drought the sudden wetting of the soils releases significant fluxes of sediments and chemicals that can disrupt public water supplies, trigger algal blooms and damage ecosystems.  

In MaRIUS water quality models were extended and developed for different spatial scales. Overall, the national scale data and modelling analysis of the impact of drought on water quality in UK rivers will provide us with a better understanding of how water quality changes during droughts across multiple catchments.  This is essential information for many different stakeholders so that we can anticipate and, if possible, mitigate the impact of future drought and maintain resilience of freshwater systems to these extreme events.

_*[Placeholder for text outlining key results at different spatial scales e.g.: 
1. Risk of cyanobacteria bloom in reservoir 
2. Response of water chemistry to drought/climate variability - Thames
3. Response of phytoplankton to drought/climate variability - Thames
4. Response of water chemistry to droughts/climate - National]_

_[Response surface maps? - tbc]_

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

	<div id='chart' width="100%">
		Example: Phosphorous and Chlorophyll Concentrations
		<svg style='height:300px'></svg>
	</div>

</div>

<script src='{{ site.baseurl }}/assets/js/line_plus_bar_chart.js' type='text/javascript'> </script>


* [Ecology](drought_impacts_ecology)
* [Agriculture](drought_impacts_agriculture)
* [Economy](drought_impacts_economy)

*[biogeochemical processes]: Define in pop-up
