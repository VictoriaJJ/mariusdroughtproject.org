---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_impacts/water_quality/
subsection: Drought Impacts
_title: Impacts of drought on water quality
related_links:
  - name: Water Quality
    url: '!science_url!/drought_impacts_management/water_quality/'
---

Droughts can affect **water quality** in rivers and reservoirs due to reduced dilution of discharges and runoff, enhanced biogeochemical processes and longer residence times in rivers. Moreover, at the end of a drought the sudden wetting of the soils releases significant fluxes of sediments and chemicals that can disrupt public water supplies, trigger algal blooms and damage ecosystems.  

In <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> water quality models were extended and developed for different spatial scales. The national scale data and modelling analysis of the impact of drought on water quality in UK rivers provides us with a better understanding of how water quality changes during droughts across multiple catchments.  This is essential information for many different stakeholders so that we can anticipate and, if possible, mitigate the impact of future drought and maintain resilience of freshwater systems to these extreme events.

The response of water chemistry in the lower Thames catchment to different severity and duration droughts, based on the observed historical drought of 1975-76 and three synthetic events, are shown right. The time series data highlights how changes in precipitation, temperature, potential evapotranspiration and flow can affect suspended sediment concentration, total phosphorous concentration, and nitrate concentration.


*[biogeochemical]: relating to or denoting the cycle in which chemical elements and compounds are transferred between living systems and the environment.

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

	<div id='chart' width="100%">
		<svg style='height:300px'></svg>
	</div>

</div>

<script src='{{ site.baseurl }}/assets/js/line_plus_bar_chart.js' type='text/javascript'> </script>
