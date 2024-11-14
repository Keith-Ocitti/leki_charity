import React from "react";
import Image from "next/image";
import map from "./images/map.jpg";

function WhereWeWork({ whereWeWorkRef }) {
	return (
		<div tabindex="-1" ref={whereWeWorkRef}>
			<div class="font-sans mt-20">
				<div class="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-gray-100 hover:bg-gray-200">
					<div class="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
						<h2 class="text-orange-red lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
							Where We Work.
						</h2>
						<p class="text-gray-800 mt-6 text-base leading-relaxed">
							Leki Charity Foundation operates Nation wide but mostly in the
							Northern region of Uganda, a region historically affected by
							conflict and socio-economic challenges. Despite these hardships,
							the people of Northern Uganda have shown remarkable resilience,
							and we are committed to working with local communities to bring
							about sustainable change through education.
						</p>
						<p class="text-gray-800 mt-6 text-base leading-relaxed">
							Our efforts are focused on rural and underserved areas where
							access to education is limited. By partnering with parents and
							community leaders, we are able to reach the most vulnerable
							children, ensuring they receive the support they need to succeed
							in school.
						</p>
						<p class="text-gray-800 mt-6 text-base leading-relaxed">
							Our work in Uganda is driven by the belief that education is the
							key to breaking the cycle of poverty and building a more equitable
							future. As we continue to grow, we aim to expand our reach and
							impact, giving more children the opportunity to transform their
							lives through learning.
						</p>
					</div>

					<div class="lg:h-[480px] flex items-center">
						<Image
							src={map}
							className="w-full h-full object-cover hidden md:block"
							alt="kids-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhereWeWork;
