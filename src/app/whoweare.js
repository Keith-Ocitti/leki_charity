import React from "react";
import Image from "next/image";
import kids from "./images/kids.jpg";

function WhoWeAre({ whoWeAreRef }) {
	return (
		<div class="font-sans mt-20 " tabindex="-1" ref={whoWeAreRef}>
			<div class="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-gray-100">
				<div class="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
					<h2 class="text-orange-red lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
						Who We Are.
					</h2>
					<p class="text-gray-800 mt-6 text-base leading-relaxed">
						At Leki Charity Foundation, we believe that every child deserves the
						opportunity to access quality education, regardless of their
						background or circumstances. Founded with the vision of breaking the
						cycle of poverty through education, we are a nonprofit organization
						dedicated to supporting children from underprivileged communities in
						Northern Uganda.
					</p>
					<p class="text-gray-800 mt-6 text-base leading-relaxed">
						Driven by compassion and a commitment to making a lasting impact, we
						work closely with local schools, families, and community leaders to
						ensure that every child can attend school, grow academically, and
						unlock their full potential.
					</p>
				</div>

				<div class="lg:h-[480px] flex items-center">
					<Image
						src={kids}
						className="w-full h-full object-cover hidden md:block"
						alt="kids-image"
					/>
				</div>
			</div>

			<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 mt-20 my-12">
				<div class="bg-white p-6 rounded-md shadow-lg">
					<h3 class="text-lg font-bold mb-2 text-orange-red">Our Mission</h3>
					<p class="text-sm text-black">
						We aim to provide educational sponsorships, resources, and
						mentorship to children who would otherwise be deprived of the chance
						of education.Through empathy and strong partnerships, we strive for
						sustainable impact, always seeking to improve and achieve the
						highest standards in our work
					</p>
				</div>
				<div class="bg-white p-6 rounded-md shadow-lg">
					<h3 class="text-lg font-bold mb-2 text-orange-red">Our Passion</h3>
					<p class="text-sm text-black">
						Our passion is rooted in the belief that education is a fundamental
						right that every child deserves, regardless of their socio-economic
						background. We are driven by the conviction that when given the
						opportunity to learn, children can rise above the challenges of
						poverty and create a brighter future for themselves, their families,
						and their communities.
					</p>
				</div>
				<div class="bg-white p-6 rounded-md shadow-lg">
					<h3 class="text-lg font-bold mb-2 text-orange-red">Our Values</h3>
					<p class="text-sm text-black">
						We are guided by the values of empowerment, integrity, compassion,
						collaboration, and excellence. We believe in the transformative
						power of education to uplift individuals and communities, and we are
						committed to providing honest, transparent support to the children
						we serve.
					</p>
				</div>
			</div>
		</div>
	);
}

export default WhoWeAre;
