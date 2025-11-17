// import React from "react";
// import Image from "next/image";
// import mum from "./images/mum.jpg";
// import classImg from "./images/class.jpg";

// function Hero() {
//   return (
//     <div>
//       <div className="relative h-[520px] md:h-[720px] w-full">
//         <Image
//           src={classImg}
//           className="absolute inset-0 w-full h-full object-cover"
//           alt="Students in a classroom receiving education support"
//         />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
//           <h1 className="text-3xl md:text-5xl text-white font-extrabold text-center leading-tight">
//             Education is a right and a need.
//           </h1>
//           <div className="w-[400px] md:w-[900px]">
//             <p className="text-md md:text-2xl text-white mt-4 p-2 text-center">
//               Every child deserves the opportunity to dream, learn, and succeed.
//               At Leki Charity Foundation, we are dedicated to transforming lives
//               through education. Join us in giving every child a chance to
//               unlock their full potential and change the world, one classroom at
//               a time.
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <a
//               className="bg-gradient-to-r from-orange-red to-rose-500 text-white px-6 py-3 rounded-full shadow-lg text-sm md:text-base text-center"
//               href="mailto:info@lekicharity.org?subject=Donation%20to%20Leki%20Charity%20Foundation"
//               aria-label="Email to donate now"
//             >
//               Donate Now
//             </a>
//             <a
//               className="bg-white/90 backdrop-blur text-black px-6 py-3 rounded-full shadow text-sm md:text-base text-center"
//               href="#who-we-are"
//               aria-label="Learn more about who we are"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import classImg from "./images/class.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Hero() {
  return (
    <div className="relative h-[520px] md:h-[720px] w-full overflow-hidden mt-14">
      {/* Background with parallax */}
      <motion.div
        variants={{
          hidden: { scale: 1.1, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        className="absolute inset-0"
      >
        <Image
          src={classImg}
          fill
          priority
          alt="Students in a classroom"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
        >
          Education is a right and a need.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="text-md md:text-2xl text-white mt-6 max-w-2xl md:max-w-4xl"
        >
          Every child deserves the opportunity to dream, learn, and succeed. At
          Leki Charity Foundation, we are dedicated to transforming lives
          through education.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 mt-8"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-red to-rose-500 text-white px-8 py-3 rounded-full shadow-lg text-sm md:text-base"
            href="mailto:info@lekicharity.org?subject=Donation%20to%20Leki%20Charity%20Foundation"
          >
            Donate Now
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur text-black px-8 py-3 rounded-full shadow text-sm md:text-base"
            href="#who-we-are"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
