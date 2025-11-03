import React from "react";
import Image from "next/image";
import mum from "./images/mum.jpg";
import classImg from "./images/class.jpg";

function Hero() {
  return (
    <div>
      <div className="relative h-[520px] md:h-[720px] w-full">
        <Image
          src={classImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Students in a classroom receiving education support"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
          <h1 className="text-3xl md:text-5xl text-white font-extrabold text-center leading-tight">
            Education is a right and a need.
          </h1>
          <div className="w-[400px] md:w-[900px]">
            <p className="text-md md:text-2xl text-white mt-4 p-2 text-center">
              Every child deserves the opportunity to dream, learn, and succeed.
              At Leki Charity Foundation, we are dedicated to transforming lives
              through education. Join us in giving every child a chance to
              unlock their full potential and change the world, one classroom at
              a time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="bg-gradient-to-r from-orange-red to-rose-500 text-white px-6 py-3 rounded-full shadow-lg text-sm md:text-base text-center"
              href="mailto:info@lekicharity.org?subject=Donation%20to%20Leki%20Charity%20Foundation"
              aria-label="Email to donate now"
            >
              Donate Now
            </a>
            <a
              className="bg-white/90 backdrop-blur text-black px-6 py-3 rounded-full shadow text-sm md:text-base text-center"
              href="#who-we-are"
              aria-label="Learn more about who we are"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
