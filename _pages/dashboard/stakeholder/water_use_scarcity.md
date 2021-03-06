---
layout: stakeholder
published: true
permalink: /dashboard/stakeholder/water_use_scarcity/

_title: Water Use and Scarcity
---

Water scarcity describes the relationship between water demand and availability. Central to drought management are decisions about quantities of water to abstract (from a range of different sources), for storage or for allocation to different water users. 

These water allocation decisions need to be made in the context of abstraction licencing, water resources planning and drought management planning.  Water resources simulation models (WRSM) simulate abstractions, stores (including groundwater), transfers, consumption of water and return flows. They can incorporate rule-based representation of the arrangements for managing water resources and/or optimisation for allocation of water to maximise an objective function.

In MaRIUS we have improved on existing WRSMs to provide capability to model the potential for, and robustness of, more sophisticated water allocation and management arrangements during droughts. This provides information on the probability of water shortages for different users under given management strategies, and allows us to test a wide range of water abstraction, allocation and transfer strategies before and during droughts and during drought recovery.

*For example, assuming current drought management practices sectors xx and xx were shown to be at most risk from water scarcity. The probability of water shortages increased by xx% and xx% respectively for the near (2030s) and far (2080s) future…*

*Changing current drought management practices by xxx were shown to have the most beneficial impacts. For example, could reduce drought duration by xx and reduce recovery time by xx.*

*Simulation of water resources to show potential trajectories for water companies*



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
</div>


<div class="large-6 medium-6 columns">
    <!-- <div id='sgnb_chart1' style='width: 100%'>
    	Allocation of abstracted water to users
		<svg style='height:300px' />
	</div> -->

	<div id='pie_chart1'>
		Probability of water shortages for different users
		<svg style='width:300px;height:300px'></svg>
	</div>
</div>

<!-- <script src='{{ site.baseurl }}/assets/js/stacked_area.js' type='text/javascript'> </script> -->
<!-- <script src='{{ site.baseurl }}/assets/libs/js/stream_layers.js' type='text/javascript'> </script> -->
<!--<script src='{{ site.baseurl }}/assets/js/stacked_grouped_nbar_chart.js' type='text/javascript'> </script>-->
<script src='{{ site.baseurl }}/assets/js/pie_chart.js' type='text/javascript'> </script>
