---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_impacts/

_title: Drought Impacts
---

Droughts and water scarcity jointly pose a substantial threat to the environment, agriculture, infrastructure, society and culture in the UK, yet our ability to characterise and predict their occurrence, duration and intensity, as well as minimise their impacts, is often inadequate.

In MaRIUS we developed new methodologies and models for analysis of the impacts of water scarcity on ecosystems, society and various economic activities including agriculture, industry and household consumers. By supporting the analysis of a full range of impacts in a common framework MaRIUS provides multi-attribute characterisation of drought impacts and evidence to evaluate trade-offs between different impacts. [Click on the below categories to see further information on the analysis and impacts of water scarcity]

## Water Quality

Droughts can affect water quality in rivers and reservoirs due to reduced dilution of discharges and runoff, enhanced biogeochemical processes [hover over to define] and longer residence times in rivers. Moreover, at the end of a drought the sudden wetting of the soils releases significant fluxes of sediments and chemicals that can disrupt public water supplies, trigger algal blooms and damage ecosystems.  In MaRIUS water quality models were extended and developed for different spatial scales.

*Historical analysis of droughts highlighted that water quality was affected and impacts seen in terms of xxxx… In the Thames catchment water quality was shown to e.g. reduce in response to droughts, for the near (2030s) and far (2080s) future….*

MaRIUS has produced tools to guide decision makers. These tools will be both models and new methodological approaches. These outcomes are expected to be of use for catchment managers towards the definition of resilience strategies for climate change adaptation.

## Ecology

Water is fundamental for the functioning of all ecosystems, but they may display different responses depending on their ecological characteristics and the severity and duration of water shortages. In MaRIUS ecological models were refined and combined for improved assessment of the impacts of drought on aquatic and wetland habitats and their species. These impacts were also linked to ecosystem function and services, and potential effectiveness of ecosystem management and conservation explored.

*The analysis highlighted the implications of drought for fish, macro-invertebrates and macrophytes.  Maps of spatial patterns of risk for river-fed wetlands in the Thames Basin indicated that xxxx, for the near (2030s) and far (2080s) future…. The climate suitability of species xx and xx in the Thames Basin….These impacts were greatest under management scenario x, and reduced under management scenario xx whereby….*

## Agriculture

Droughts and water scarcity affect rain-fed and irrigated agricultural systems across multiple timescales.  Effects on long term yield and profit variability influence farm business planning and investment, for example affecting crop and rotation selection and investment in infrastructure for irrigation. In MaRIUS critical thresholds of drought characteristics that trigger changes in long term farm-level planning were established. Farm modelling tools were used to simulate agricultural impacts and farmer responses, and analyse the impacts and trade-offs of different irrigation management strategies and decisions.

*The analysis highlighted that…..*

## Economy

Economic impacts of drought can be large and far-ranging. In MaRIUS a new analytical framework was developed, to capture all the factors that contribute to, or mitigate against, the economic costs or impacts of a drought (including policy-making, planning and management actions). Using an Economic I-O model the direct and indirect losses of drought on domestic and commercial water consumers and major industrial abstractors, notably electricity generation were quantified.

* The analysis highlighted that economic risk of drought at the Thames/UK level will increase by xx% for the near (2030s) and far (2080s) future…Indirect costs accounted for xx% of losses highlighting…Most vulnerable sectors included…Electricity generation, supply and prices….*

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

<div class="large-6 medium-3 columns">

	<div id='chart1'>
		Probability of water shortages for different users
		<svg style='height:300px;width:300px'></svg>
	</div>

</div>

<script src='{{ site.baseurl }}/assets/js/pie_chart.js' type='text/javascript'> </script>
