---
layout: management
published: true
permalink: /dashboard/management/drought_impacts/water_quality/

subsection: Drought Impacts
_title: Water Quality
---

Droughts and water scarcity jointly pose a substantial threat to the environment, agriculture, infrastructure, society and culture in the UK, yet our ability to characterise and predict their occurrence, duration and intensity, as well as minimise their impacts, is often inadequate.

In MaRIUS we developed new methodologies and models for analysis of the impacts of water scarcity on ecosystems, society and various economic activities including agriculture, industry and household consumers. By supporting the analysis of a full range of impacts in a common framework MaRIUS provides multi-attribute characterisation of drought impacts and evidence to evaluate trade-offs between different impacts. [Click on the below categories to see further information on the analysis and impacts of water scarcity]

///

Droughts can affect water quality in rivers and reservoirs due to reduced dilution of discharges and runoff, enhanced biogeochemical processes [hover over to define] and longer residence times in rivers. Moreover, at the end of a drought the sudden wetting of the soils releases significant fluxes of sediments and chemicals that can disrupt public water supplies, trigger algal blooms and damage ecosystems.  In MaRIUS water quality models were extended and developed for different spatial scales.

*Historical analysis of droughts highlighted that water quality was affected and impacts seen in terms of xxxx… In the Thames catchment water quality was shown to e.g. reduce in response to droughts, for the near (2030s) and far (2080s) future….*

MaRIUS has produced tools to guide decision makers. These tools will be both models and new methodological approaches. These outcomes are expected to be of use for catchment managers towards the definition of resilience strategies for climate change adaptation.

* [Ecology](drought_impacts_ecology/)
* [Agriculture](drought_impacts_agriculture)
* [Economy](drought_impacts_economy)

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
		Change in Water Quality…
		<svg style='height:300px'></svg>
	</div>

</div>

<script src='{{ site.baseurl }}/assets/js/line_plus_bar_chart.js' type='text/javascript'> </script>
