import React from "react";
import Image from "next/image";
import mum from "./images/mum.jpg";
import classImg from "./images/class.jpg";

function Hero() {
	return (
		<div>
			<div class="relative h-[450px] md:h-[650px] w-full">
				<Image
					src={classImg}
					className="absolute inset-0 w-full h-full object-cover filter blur-sm"
				/>

				<div class="absolute inset-0 bg-black bg-opacity-50"></div>
				<div class="absolute inset-0 flex flex-col items-center justify-center">
					<h1 class="text-2xl md:text-4xl text-white font-bold">
						Education is a right and a need.
					</h1>
					<div className="w-[400px] md:w-[800px]">
						<p class="text-md md:text-2xl text-white mt-4 p-2 text-center">
							Every child deserves the opportunity to dream, learn, and succeed.
							At Leki Charity Foundation, we are dedicated to transforming lives
							through education. Join us in giving every child a chance to
							unlock their full potential and change the world, one classroom at
							a time.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
