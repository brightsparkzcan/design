<script>
    export let theme = "#000";
	export let tutor_name;
	export let date_format;
	import dateformat from "dateformat";

	let current_date = new Date();

	export let availability = "Mornings, Afternoons, Evenings, Weekends";

	$: model_date = dateformat(current_date, date_format);



	function toggle(event){
		const animationContainer = event.target.closest('.animation-container');
		const animationTarget = animationContainer.querySelector('.animation-target');
		const isExpanded = getComputedStyle(animationTarget).height !== '0px';


		if(isExpanded){
			animationTarget.style.height = '0px';
		}else {
			animationTarget.style.height = animationTarget.scrollHeight + 'px';
		}
	}

</script>

<style>
	main {
		display: block;
	}

	.page {
		max-width: 1080px;
		margin: auto;
	}	

	.animation-container {
		overflow: hidden;
	}

	.animation-container .animation-target {
		transition: height 0.2s ease-in-out;
	}

	.animation-container .animation-target {
		height: 0px;
	}
</style>


<main>
	<div class="bg-grey-200 width-100">
		<div class="page">
			<div class="container">
				<div class="flex flex-col shadow-lg rounded-lg border border-slate-600 animation-container">
					<div class="card-header flex flex-row p-4 items-start rounded-t-lg" style="background-color:{theme}">
						<div class="flex flex-col items-center">
							<div class="w-32 h-32 bg-white">
								<img src="https://ucarecdn.com/de23362b-6734-4091-bde4-74385130f294/-/crop/2268x2270/0,1040/-/preview/" alt="Avatar" class="w-32 h-32">
							</div>
							<div class="pt-2 text-white font-bold text-lg">{tutor_name}</div>
						</div>
						<div class="ml-auto p-2 bg-slate-700 text-white font-bold rounded">{model_date}</div>
					</div>


					<div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 bg-white p-1 rounded-b-lg m-auto md:w-11/12" style="color:{theme}">
							<div class="">
								<div class="text-md font-bold uppercase"> Provincial: Ontario </div>
								
								<ul class="list-disc pl-5">
									<li>Chemistry Only (92%)</li>
									<li>English (91%)</li>
									<li>History (85%)</li>
									<li>Math (94%)</li>
									<li>Advanced Functions (94%)</li>
								</ul>
							</div>

							<div class="">
								<div class="text-md font-bold uppercase"> Stats </div>
								<table class="">
									<tr>
									  <td class="font-bold align-top">
										Milestones:
									  </td>
									  <td> 0</td>
									</tr>
									<tr>
									  <td class="font-bold align-top">Tutored:</td>
									  <td> 0</td>
									</tr>
									<tr>
									  <td class="font-bold align-top">Availability:</td>
									  <td> {availability}</td>
									</tr>
								  </table>
								  
							</div>


							<div class="">
								<div class="text-md font-bold uppercase"> Tertiary Education </div>
								
								<ul class="list-disc pl-5">
									<li>Chemistry Only (92%)</li>
									<li>English (91%)</li>
									<li>History (85%)</li>
									<li>Math (94%)</li>
									<li>Advanced Functions (94%)</li>
								</ul>
							</div>

							<div class="">
								<div class="text-md font-bold uppercase"> Personal Information </div>
								
								<table>
									<tr>
										<td class="material-icons px-2">phone</td>
										<td>(705) 288-3921</td>
									</tr>
									<tr>
										<td class="material-icons px-2">location_on</td>
										<td>130 Blanti, Brampton</td>
									</tr>
									<tr>
										<td class="material-icons px-2">email</td>
										<td>divyanshbansal.db@gmail.com</td>
									</tr>
								</table>
							</div>
					</div>
					<!-- Divider -->
					<div class="flex flex-row justify-end p-5 pt-0 text-slate-800">
						<span on:click={toggle} class="material-icons cursor-pointer select-none" >expand_circle_down</span>
					</div>
					<!-- Second Section -->
					<div class="animation-target">
						<div class="grid grid-cols-1 md:grid-cols-2 p-3 grid-flow-row gap-4 bg-white rounded-b-lg m-auto md:w-11/12" style="color:{theme}">
							<div class="">
								<div class="text-md font-bold uppercase"> Subject Preferences </div>
								
								<ul class="list-disc pl-5">
									<li>Business Studies (1-12, Adult & Foreign Languages)</li>
									<li>Economics (1-12)</li>
									<li>English (Beginner) (1-12)</li>
									<li>Accounting (1-12)</li>
								</ul>
							</div>

							<div class="">
								<div class="text-md font-bold uppercase"> Additional Information </div>
									<div class="font-bold">Availability</div>
									<div class="text-sm">Evenings, Weekends (I Will Only Be Able To Tutor Online From December To End Of January.)</div>
								<div class="flex flex-col"></div> 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>