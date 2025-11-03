import React from "react";

function OurImpact({ ourImpactRef }) {
  return (
    <div
      className="w-full mt-24 bg-white scroll-mt-24 px-4 md:px-10"
      tabIndex="-1"
      ref={ourImpactRef}
      id="our-impact"
    >
      <p className="text-4xl font-bold text-orange-red text-center pb-3">
        Our Impact
      </p>
      <hr />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 my-12 mt-10 max-w-7xl mx-auto">
        <div className="text-center ">
          <p className="text-6xl md:text-7xl lg:text-8xl text-orange-red">
            13+
          </p>
          <p>Have successfully graduated with support from us</p>
        </div>
        <div className="text-center ">
          <p className="text-6xl md:text-7xl lg:text-8xl text-orange-red ">
            3+
          </p>
          <p>
            Number of regions within Uganda from which we have helped students{" "}
          </p>
        </div>
        <div className="text-center ">
          <p className="text-6xl md:text-7xl lg:text-8xl text-orange-red">
            20+
          </p>
          <p>Number of students who are currently being supported</p>
        </div>
      </div>
      <div className="font-[sans-serif] bg-white w-full p-3 mt-20">
        <div className="mb-12 text-center">
          <h2 className="text-orange-red text-3xl font-extrabold">
            Words from some of our beneficiaries.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow relative">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-14 h-14 rounded-full border-4 border-white"
                alt="Beneficiary portrait"
              />
              <div>
                <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
                  Amito Vivian
                </h4>
                <p className="mt-0.5 text-xs text-gray-600">Teacher</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-800 text-sm leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow relative">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src="https://readymadeui.com/team-1.webp"
                className="w-14 h-14 rounded-full border-4 border-white"
                alt="Beneficiary portrait"
              />
              <div>
                <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
                  Ouma Stephen
                </h4>
                <p className="mt-0.5 text-xs text-gray-600">
                  Computer Scientist
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-800 text-sm leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow relative">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src="https://readymadeui.com/team-4.webp"
                className="w-14 h-14 rounded-full border-4 border-white"
                alt="Beneficiary portrait"
              />
              <div>
                <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
                  Ouma Innocent
                </h4>
                <p className="mt-0.5 text-xs text-gray-600">Teacher</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-800 text-sm leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow relative">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src="https://readymadeui.com/team-4.webp"
                className="w-14 h-14 rounded-full border-4 border-white"
                alt="Beneficiary portrait"
              />
              <div>
                <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
                  Nyeko Robinson
                </h4>
                <p className="mt-0.5 text-xs text-gray-600">Business Admin</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-800 text-sm leading-relaxed">
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
