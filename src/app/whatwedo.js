import React from "react";
import Image from "next/image";
import sch from "./images/sch.jpg";

function Whatwedo({ whatWeDoRef }) {
	return (
		<div className="mt-24" tabindex="-1" ref={whatWeDoRef}>
			<div class="font-sans mt-10">
				<div class="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-gray-100">
					<div class="lg:h-[480px] flex items-center">
						<Image
							src={sch}
							className="w-full h-full object-cover"
							alt="kids-image"
						/>
					</div>
					<div class="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
						<h2 class="text-orange-red lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
							What We Do.
						</h2>
						<p class="text-gray-800 mt-6 text-base leading-relaxed">
							At Leki Charity Foundation, our core focus is to provide
							educational opportunities to children who need it most. Our
							programs are designed to remove the barriers that prevent children
							from attending school, allowing them to focus on their studies and
							build a foundation for a better future.
						</p>
						<p class="text-gray-800 mt-6 text-base leading-relaxed">
							Our key activities include:
						</p>
						<ul className="mt-2">
							<li>
								<p className="text-orange-red font-bold">
									Sponsorship Programs
								</p>
								We offer full and partial educational sponsorships, covering
								school fees, uniforms, books, and supplies for children from
								low-income families.
							</li>
							<li className="mt-3">
								<p className="text-orange-red font-bold">
									Mentorship and Guidance
								</p>
								Beyond financial assistance, we offer mentorship programs to
								help children navigate school life and stay motivated on their
								path to success.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Whatwedo;
