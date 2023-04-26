<script>
    export let theme = "#000";
	export let tutor_name;
	export let date_format;
	import dateformat from "dateformat";
	export let tutorStatus;
	export let tutorOnline;

	let current_date = new Date();

	export let hasCar = true;
	export let gender = "m";
	export let availability = "Mornings, Afternoons, Evenings, Weekends";
	export let tutorPreference;


	$: genderDisplay = gender=='m' ? 'male':'female'
	$: genderColor = gender=='m'? 'text-blue-600':'text-pink-600'
	$: model_date = dateformat(current_date, date_format);
	$: carColor = hasCar ? "text-green-600" : "text-red-500";
	$: carModel = hasCar ? "directions_car" : "car_crash";



	function toggle(event){
		const animationContainer = event.target.closest('.animation-container');
		const animationTarget = animationContainer.querySelector('.animation-target');
		const dropdown = event.target.closest('.dropdown')
		const isExpanded = getComputedStyle(animationTarget).height !== '0px';


		setTimeout(() => {
			if(isExpanded){
				animationTarget.style.overflow = 'visible';
			}else {
				animationTarget.style.overflow = 'hidden';
			}
		}, 500);


		if(isExpanded){
			animationTarget.style.height = '0px';
			dropdown.classList.remove('spin');
		}else {
			dropdown.classList.add('spin');
			animationTarget.style.height = animationTarget.scrollHeight + 'px';
		}
	}

</script>

<style global>
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

	.dropdown{
		animation: transform 0.2s ease-in-out;
		transform: rotate(0deg);
		transition: transform 0.2s;
	}


	:global(.dropdown.spin){
		transform: rotate(180deg) !important;
	}
</style>

<!-- () -->
<main>
	<div class="bg-grey-200 width-100">
		<div class="page">
			<div class="container">
				<div class="flex flex-col shadow-lg rounded-lg border border-slate-600 animation-container">
					<div class="card-header flex flex-row p-4 items-end rounded-t-lg justify-between md:justify-around items-center" style="background-color:{theme}">
						<div class="w-12 h-12 bg-white">
							<img src="https://ucarecdn.com/de23362b-6734-4091-bde4-74385130f294/-/crop/2268x2270/0,1040/-/preview/" alt="Avatar" class="w-12 h-12">
						</div>
						<div class="flex flex-col items-end md:flex-row md:justify-between  md:items-baseline flex-grow justify-end">
							<div class="text-white font-bold text-md text-base md:text-3xl md:pl-5">{tutor_name}</div>
							<div class="text-white font-bold text-sm font-bold">{model_date}</div>
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-1 md:gap-4 bg-white p-1 rounded-b-lg m-auto md:w-11/12 py-4" style="color:{theme}">
							<table class="">
								<tr>
									<td class="align-bottom"><i class="material-icons text-slate-600">account_box</i></td>
									<td class="align-base font-bold text-sm align-middle"> {tutorStatus}</td>
								</tr>
								<tr>
									<td class="align-middle"><span class="material-icons {carColor}">{carModel}</span></td>
									<td class="align-baseline font-bold text-sm align-middle">1km {#if tutorPreference!='N/A'} 
											{#if tutorPreference.toLowerCase() == "online only"}
												<span class="text-xs text-slate-400 lowercase">({tutorPreference})</span>
											{:else}
												<span class="text-xs text-slate-400 lowercase">(Up To {tutorPreference})</span> 
											{/if}
										{/if}
									</td>
								</tr>
								<tr>
									<td class="align-middle"><span class="material-icons text-red-500">map</span></td>
									<td class="align-baseline font-bold text-sm">35 Thorndale St N, Hamilton, ON L8S 3K5, Canada</td>
								</tr>
								<tr>
									<td class="align-top">
										<span class="">
											<i class="material-icons text-slate-600">
												{#if tutorOnline}wifi{:else}wifi_off{/if}
											</i>
										</span>
									</td>
									<td class="align-base font-bold text-sm">{#if tutorOnline} Online {:else} Offline {/if}</td>
								</tr>
								<tr>
									<td class="align-top"><span class="material-icons {genderColor}">{genderDisplay}</span></td>
									<td class="align-top"></td>
								</tr>
							</table>

							<table class="hidden md:table">
								<tr>
									<td class="text-left md:text-center"><i class="material-icons text-slate-400">hourglass_bottom</i></td>
									<td class="w-full pl-2 font-bold">10.5 hr</td>
								</tr>
								<tr>
									<td class="text-left md:text-center"><i class="material-icons text-yellow-500">workspace_premium</i></td>
									<td class="w-full pl-2 font-bold">10.5 hr</td>
								</tr>
								<tr>
									<td class="font-bold">Created</td>
									<td class="w-full pl-2">{model_date}</td>
								</tr>
							</table>
							
							<div class="md:hidden bg-gray-100 rounded p-1">
								<table class="w-full ">
									<tr>
										<td class="md:text-center"><i class="material-icons text-slate-400 align-middle">hourglass_bottom</i> 10.5 hr</td>
										<td class=""><i class="material-icons text-yellow-500 align-middle">workspace_premium</i> 10.5 hr</td>
									</tr>
									<tr>
										<td class="">Created</td>
										<td class="">{model_date}</td>
									</tr>
								</table>
							</div>


							<div class="">
								<div class="text-sm font-bold uppercase text-slate-400 bg-slate-700 text-white p-1">PROVINCIAL: ONTARIO</div>
								<ul class="list-disc pl-5">
									<li>Chemistry Only (97%)</li>
									<li>English (96%)</li>
									<li>Biology (96%)</li>
									<li>Social Science (96%)</li>
									<li>French (94%)</li>
									<li>Physics Only (94%)</li>
									<li>Math (93%)</li>
								</ul>
							</div>

							<div>
								<div class="text-sm font-bold uppercase text-slate-400 bg-slate-700 text-white p-1">Additional Info</div>
								<table class="col-span-2 md:col-span-1">
									<tr>
										<td class="material-icons px-2">phone</td>
										<td>(705) 288-3921</td>
									</tr>
									<tr>
										<td class="material-icons px-2">email</td>
										<td>divyanshbansal.db@gmail.com</td>
									</tr>
									<tr>
										<td class="material-icons px-2">schedule</td>
										<td>Evenings, Weekends (I Will Only Be Able To Tutor Online From December To End Of January.)</td>
									</tr>
								</table>
							</div>
							<!-- <div class="">
								<div class="text-md font-bold uppercase"> Tertiary Education </div>
								
								<ul class="list-disc pl-5">
									<li>
										<p class="font-bold text-md">Medical: Medicine / Nursing / Dentistry</p> 
										<span class="font-thin">Bachelors of Health Sciences (BHSc Honours)/ Diploma (4th)</span>
									</li>
								</ul>
							</div> -->

							
					</div>
					<!-- Divider -->
					<div class="flex flex-row justify-end pb-1 pr-2 text-slate-800">
						<span on:click={toggle} on:keydown={toggle} class="dropdown material-icons cursor-pointer select-none" >expand_circle_down</span>
					</div>
					<!-- Second Section -->
					<div class="animation-target">
						<div class="grid grid-cols-1 md:grid-cols-2 p-3 grid-flow-row gap-4 bg-white rounded-b-lg m-auto md:w-11/12" style="color:{theme}">
							<div class="">
								<div class="text-sm font-bold uppercase text-slate-400 bg-slate-700 text-white p-1">Post-Secondary Education</div>
								<ul class="list-disc pl-5">
									<li>
										<div>
											<div class="text-sm font-bold uppercase">
												Medical: Medicine / Nursing / Dentistry
											</div>
											<div class="text-sm capitalize">
												Bachelors of Health Sciences (BHSc Honours)/ Diploma
											</div>
										</div>
									</li>
								</ul>
							</div>

							<div class="">
								<div class="text-sm font-sm font-bold uppercase text-slate-400 bg-slate-700 text-white p-1"> Additional Information </div>
									<div class="font-bold text-sm capitalize">Availability</div>
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