// import React from "react";

// function OurImpact({ ourImpactRef }) {
//   return (
//     <div
//       className="w-full mt-24 bg-white scroll-mt-24 px-4 md:px-10"
//       tabIndex="-1"
//       ref={ourImpactRef}
//       id="our-impact"
//     >
//       <p className="text-4xl font-bold text-orange-red text-center pb-3">
//         Our Impact
//       </p>
//       <hr />
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 my-12 mt-10 max-w-7xl mx-auto">
//         <div className="text-center ">
//           <p className="text-6xl md:text-7xl lg:text-8xl text-orange-red">
//             13+
//           </p>
//           <p>Have successfully graduated with support from us</p>
//         </div>
//         <div className="text-center ">
//           <p className="text-6xl md:text-7xl lg:text-8xl text-orange-red ">
//             3+
//           </p>
//           <p>
//             Number of regions within Uganda from which we have helped students{" "}
//           </p>
//         </div>
//         <div className="text-center ">
//           <p className="text-6xl md:text-7xl lg:text-8xl text-orange-red">
//             20+
//           </p>
//           <p>Number of students who are currently being supported</p>
//         </div>
//       </div>
//       <div className="font-[sans-serif] bg-white w-full p-3 mt-20">
//         <div className="mb-12 text-center">
//           <h2 className="text-orange-red text-3xl font-extrabold">
//             Words from some of our beneficiaries.
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           <div className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow relative">
//             <div className="flex flex-wrap items-center gap-4">
//               <img
//                 src="https://readymadeui.com/team-2.webp"
//                 className="w-14 h-14 rounded-full border-4 border-white"
//                 alt="Beneficiary portrait"
//               />
//               <div>
//                 <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
//                   Amito Vivian
//                 </h4>
//                 <p className="mt-0.5 text-xs text-gray-600">Teacher</p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <p className="text-gray-800 text-sm leading-relaxed">
//                 The service was amazing. I never had to wait that long for my
//                 food. The staff was friendly and attentive, and the delivery was
//                 impressively prompt.
//               </p>
//             </div>
//           </div>

//           <div className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow relative">
//             <div className="flex flex-wrap items-center gap-4">
//               <img
//                 src="https://readymadeui.com/team-1.webp"
//                 className="w-14 h-14 rounded-full border-4 border-white"
//                 alt="Beneficiary portrait"
//               />
//               <div>
//                 <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
//                   Ouma Stephen
//                 </h4>
//                 <p className="mt-0.5 text-xs text-gray-600">
//                   Computer Scientist
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <p className="text-gray-800 text-sm leading-relaxed">
//                 The service was amazing. I never had to wait that long for my
//                 food. The staff was friendly and attentive, and the delivery was
//                 impressively prompt.
//               </p>
//             </div>
//           </div>

//           <div className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow relative">
//             <div className="flex flex-wrap items-center gap-4">
//               <img
//                 src="https://readymadeui.com/team-4.webp"
//                 className="w-14 h-14 rounded-full border-4 border-white"
//                 alt="Beneficiary portrait"
//               />
//               <div>
//                 <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
//                   Ouma Innocent
//                 </h4>
//                 <p className="mt-0.5 text-xs text-gray-600">Teacher</p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <p className="text-gray-800 text-sm leading-relaxed">
//                 The service was amazing. I never had to wait that long for my
//                 food. The staff was friendly and attentive, and the delivery was
//                 impressively prompt.
//               </p>
//             </div>
//           </div>
//           <div className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow relative">
//             <div className="flex flex-wrap items-center gap-4">
//               <img
//                 src="https://readymadeui.com/team-4.webp"
//                 className="w-14 h-14 rounded-full border-4 border-white"
//                 alt="Beneficiary portrait"
//               />
//               <div>
//                 <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
//                   Nyeko Robinson
//                 </h4>
//                 <p className="mt-0.5 text-xs text-gray-600">Business Admin</p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <p className="text-gray-800 text-sm leading-relaxed">
//                 The service was amazing. I never had to wait that long for my
//                 food. The staff was friendly and attentive, and the delivery was
//                 impressively prompt.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurImpact;

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function OurImpact({ ourImpactRef }) {
  const impactStats = [
    {
      value: 13,
      suffix: "+",
      text: "Have successfully graduated with support from us",
    },
    {
      value: 3,
      suffix: "+",
      text: "Regions in Uganda from which we have helped students",
    },
    {
      value: 20,
      suffix: "+",
      text: "Students who are currently being supported",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div
      className="w-full mt-24 bg-white scroll-mt-24 px-4 md:px-10"
      tabIndex="-1"
      ref={ourImpactRef}
      id="our-impact"
    >
      <motion.p
        className="text-4xl font-bold text-orange-red text-center pb-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        Our Impact
      </motion.p>

      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1, transition: { duration: 0.8 } }}
        viewport={{ once: false, amount: 0.3 }}
        className="origin-center border-orange-red/50"
      />

      {/* Impact Numbers */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-4 my-16 max-w-7xl mx-auto mt-10">
        {impactStats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.p
              className="text-6xl md:text-7xl lg:text-8xl text-orange-red font-bold"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6, delay: index * 0.2 },
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
            </motion.p>
            <p className="text-gray-700 mt-2 leading-snug">{stat.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="font-[sans-serif] bg-white w-full p-3 mt-20">
        <div className="mb-12 text-center">
          <motion.h2
            className="text-orange-red text-3xl font-extrabold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Words from some of our beneficiaries.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              name: "Amito Vivian",
              role: "Teacher",
              image: "https://readymadeui.com/team-2.webp",
              message:
                "The support I received was life-changing. I achieved what once felt impossible.",
            },
            {
              name: "Ouma Stephen",
              role: "Computer Scientist",
              image: "https://readymadeui.com/team-1.webp",
              message:
                "I am forever grateful for the educational assistance that shaped my career.",
            },
            {
              name: "Ouma Innocent",
              role: "Teacher",
              image: "https://readymadeui.com/team-4.webp",
              message:
                "This program helped me reach heights I never imagined. Truly impactful.",
            },
            {
              name: "Nyeko Robinson",
              role: "Business Admin",
              image: "https://readymadeui.com/team-4.webp",
              message:
                "Their support gave me hope and the opportunity to pursue my education.",
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-red/10"
            >
              <div className="flex items-center gap-4">
                <img
                  src={b.image}
                  className="w-14 h-14 rounded-full border-4 border-white shadow"
                  alt={b.name}
                />
                <div>
                  <h4 className="text-gray-800 text-sm font-bold">{b.name}</h4>
                  <p className="mt-0.5 text-xs text-gray-600">{b.role}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mt-6 italic">
                {b.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurImpact;
