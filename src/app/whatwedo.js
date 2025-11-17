// import React from "react";
// import Image from "next/image";
// import sch from "./images/sch.jpg";

// function Whatwedo({ whatWeDoRef }) {
//   return (
//     <div
//       className="mt-24 scroll-mt-24 px-4 md:px-10"
//       tabIndex="-1"
//       ref={whatWeDoRef}
//       id="what-we-do"
//     >
//       <div className="font-sans mt-10 max-w-7xl mx-auto rounded-2xl shadow-lg overflow-hidden">
//         <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-gradient-to-br from-gray-50 to-white">
//           <div class="lg:h-[480px] flex items-center">
//             <Image
//               src={sch}
//               className="w-full h-full object-cover"
//               alt="kids-image"
//             />
//           </div>
//           <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-6">
//             <h2 className="text-orange-red lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
//               What We Do.
//             </h2>
//             <p className="text-gray-800 mt-6 text-base leading-relaxed">
//               At Leki Charity Foundation, our core focus is to provide
//               educational opportunities to children who need it most. Our
//               programs are designed to remove the barriers that prevent children
//               from attending school, allowing them to focus on their studies and
//               build a foundation for a better future.
//             </p>
//             <p className="text-gray-800 mt-6 text-base leading-relaxed">
//               Our key activities include:
//             </p>
//             <ul className="mt-2">
//               <li>
//                 <p className="text-orange-red font-bold">
//                   Sponsorship Programs
//                 </p>
//                 We offer full and partial educational sponsorships, covering
//                 school fees, uniforms, books, and supplies for children from
//                 low-income families.
//               </li>
//               <li className="mt-3">
//                 <p className="text-orange-red font-bold">
//                   Mentorship and Guidance
//                 </p>
//                 Beyond financial assistance, we offer mentorship programs to
//                 help children navigate school life and stay motivated on their
//                 path to success.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Whatwedo;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sch from "./images/sch.jpg";

function Whatwedo({ whatWeDoRef }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const refEl = sectionRef.current;

    let timer;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          // SECTION ENTERED → start animation
          setShow(true);
        } else {
          // SECTION LEFT → reset animation so it will replay
          clearTimeout(timer);
          timer = setTimeout(() => setShow(false), 150);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (refEl) observer.observe(refEl);

    return () => {
      if (refEl) observer.unobserve(refEl);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(false); // reset animation
          setTimeout(() => setInView(true), 50); // restart animation
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={(el) => {
        sectionRef.current = el;
        if (whatWeDoRef) whatWeDoRef.current = el;
      }}
      id="what-we-do"
      className="scroll-mt-24 px-4 md:px-10 mt-24"
      tabIndex="-1"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto rounded-3xl shadow-xl overflow-hidden
                   bg-gradient-to-br from-white to-gray-50 border border-gray-100"
      >
        <div className="grid lg:grid-cols-2 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:h-[480px] overflow-hidden flex items-center"
          >
            <Image
              src={sch}
              alt="kids-image"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
            />
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="p-6 sm:p-12 max-lg:text-center"
          >
            <h2 className="text-orange-red lg:text-5xl text-3xl font-extrabold leading-tight">
              What We Do.
            </h2>

            <p className="text-gray-700 mt-6 leading-relaxed text-base">
              At Leki Charity Foundation, our mission is to create educational
              opportunities for the children who need it the most. We remove
              barriers that keep children out of school, enabling them to build
              strong foundations for a brighter future.
            </p>

            <p className="text-gray-800 mt-6 text-base leading-relaxed">
              Our key activities include:
            </p>

            <ul className="mt-4 space-y-4 text-left max-lg:text-center">
              <li>
                <p className="text-orange-red font-semibold text-lg">
                  Sponsorship Programs
                </p>
                <p className="text-gray-700">
                  Full and partial sponsorship covering fees, uniforms, books,
                  and essential school supplies.
                </p>
              </li>

              <li>
                <p className="text-orange-red font-semibold text-lg">
                  Mentorship & Guidance
                </p>
                <p className="text-gray-700">
                  We provide mentorship to keep children motivated, confident,
                  and focused on academic success.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Whatwedo;
