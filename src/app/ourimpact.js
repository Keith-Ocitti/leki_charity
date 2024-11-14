import React from "react";

function OurImpact({ ourImpactRef }) {
	return (
		<div className="w-full mt-24 bg-white" tabIndex="-1" ref={ourImpactRef}>
			<p className="text-4xl font-bold text-orange-red text-center pb-3">
				Our Impact
			</p>
			<hr />
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 my-12 mt-10">
				<div className="text-center ">
					<p className="text-8xl text-orange-red hover:text-9xl">13+</p>
					<p>Have successfully graduated with support from us</p>
				</div>
				<div className="text-center ">
					<p className="text-8xl text-orange-red  hover:text-9xl ">3+</p>
					<p>
						Number of regions within Uganda from which we have helped students{" "}
					</p>
				</div>
				<div className="text-center ">
					<p className="text-8xl text-orange-red hover:text-9xl">20+</p>
					<p>Number of students who are currently being supported</p>
				</div>
			</div>
			<div class="font-[sans-serif] bg-white w-full p-3 mt-20">
				<div class="mb-12 text-center">
					<h2 class="text-orange-red text-3xl font-extrabold">
						Words from some of our beneficiaries.
					</h2>
				</div>

				<div class="grid md:grid-cols-4 gap-6">
					<div class="p-6 rounded-lg mx-auto bg-white shadow-xl relative">
						<div class="flex flex-wrap items-center gap-4">
							<img
								src="https://readymadeui.com/team-2.webp"
								class="w-14 h-14 rounded-full border-4 border-white"
							/>
							<div>
								<h4 class="text-gray-800 text-sm whitespace-nowrap font-bold">
									Amito Vivian
								</h4>
								<p class="mt-0.5 text-xs text-gray-600">Teacher</p>
							</div>
						</div>

						<div class="mt-6">
							<p class="text-gray-800 text-sm leading-relaxed">
								The service was amazing. I never had to wait that long for my
								food. The staff was friendly and attentive, and the delivery was
								impressively prompt.
							</p>
						</div>
					</div>

					<div class="p-6 rounded-lg mx-auto bg-white shadow-xl relative">
						<div class="flex flex-wrap items-center gap-4">
							<img
								src="https://readymadeui.com/team-1.webp"
								class="w-14 h-14 rounded-full border-4 border-white"
							/>
							<div>
								<h4 class="text-gray-800 text-sm whitespace-nowrap font-bold">
									Ouma Stephen
								</h4>
								<p class="mt-0.5 text-xs text-gray-600">Computer Scientist</p>
							</div>
						</div>

						<div class="mt-6">
							<p class="text-gray-800 text-sm leading-relaxed">
								The service was amazing. I never had to wait that long for my
								food. The staff was friendly and attentive, and the delivery was
								impressively prompt.
							</p>
						</div>
					</div>

					<div class="p-6 rounded-lg mx-auto bg-white shadow-xl relative">
						<div class="flex flex-wrap items-center gap-4">
							<img
								src="https://readymadeui.com/team-4.webp"
								class="w-14 h-14 rounded-full border-4 border-white"
							/>
							<div>
								<h4 class="text-gray-800 text-sm whitespace-nowrap font-bold">
									Ouma Innocent
								</h4>
								<p class="mt-0.5 text-xs text-gray-600">Teacher</p>
							</div>
						</div>

						<div class="mt-6">
							<p class="text-gray-800 text-sm leading-relaxed">
								The service was amazing. I never had to wait that long for my
								food. The staff was friendly and attentive, and the delivery was
								impressively prompt.
							</p>
						</div>
					</div>
					<div class="p-6 rounded-lg mx-auto bg-white shadow-xl relative">
						<div class="flex flex-wrap items-center gap-4">
							<img
								src="https://readymadeui.com/team-4.webp"
								class="w-14 h-14 rounded-full border-4 border-white"
							/>
							<div>
								<h4 class="text-gray-800 text-sm whitespace-nowrap font-bold">
									Nyeko Robinson
								</h4>
								<p class="mt-0.5 text-xs text-gray-600">Business Admin</p>
							</div>
						</div>

						<div class="mt-6">
							<p class="text-gray-800 text-sm leading-relaxed">
								The service was amazing. I never had to wait that long for my
								food. The staff was friendly and attentive, and the delivery was
								impressively prompt.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurImpact;
