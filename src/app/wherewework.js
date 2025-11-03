import React from "react";
import Image from "next/image";
import map from "./images/map.jpg";

function WhereWeWork({ whereWeWorkRef }) {
  return (
    <div
      tabIndex="-1"
      ref={whereWeWorkRef}
      id="where-we-work"
      className="scroll-mt-24 px-4 md:px-10"
    >
      <div className="font-sans mt-20 max-w-7xl mx-auto rounded-2xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-6">
            <h2 className="text-orange-red lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
              Where We Work.
            </h2>
            <p className="text-gray-800 mt-6 text-base leading-relaxed">
              Leki Charity Foundation operates Nation wide but mostly in the
              Northern region of Uganda, a region historically affected by
              conflict and socio-economic challenges. Despite these hardships,
              the people of Northern Uganda have shown remarkable resilience,
              and we are committed to working with local communities to bring
              about sustainable change through education.
            </p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed">
              Our efforts are focused on rural and underserved areas where
              access to education is limited. By partnering with parents and
              community leaders, we are able to reach the most vulnerable
              children, ensuring they receive the support they need to succeed
              in school.
            </p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed">
              Our work in Uganda is driven by the belief that education is the
              key to breaking the cycle of poverty and building a more equitable
              future. As we continue to grow, we aim to expand our reach and
              impact, giving more children the opportunity to transform their
              lives through learning.
            </p>
          </div>

          <div className="lg:h-[480px] flex items-center">
            <Image
              src={map}
              className="w-full h-full object-cover hidden md:block"
              alt="Map of Uganda highlighting regions where we work"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereWeWork;
