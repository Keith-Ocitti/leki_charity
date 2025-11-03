"use client";
import { useRef } from "react";
import Whatwedo from "./whatwedo";
import OurImpact from "./ourimpact";
import WhereWeWork from "./wherewework";
import WhoWeAre from "./whoweare";
import Header from "./header";
import Hero from "./hero";

export default function Home() {
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const ourImpactRef = useRef(null);
  const whereWeWorkRef = useRef(null);

  const handlewhoWeAreDiv = () => {
    whoWeAreRef.current.focus();
  };
  const handlewhatWeDoDiv = () => {
    whatWeDoRef.current.focus();
  };
  const handleourImpactDiv = () => {
    ourImpactRef.current.focus();
  };

  const handleWhereWeWorkDiv = () => {
    whereWeWorkRef.current.focus();
  };
  return (
    <>
      <Header
        handleWhereWeWorkDiv={handleWhereWeWorkDiv}
        handlewhoWeAreDiv={handlewhoWeAreDiv}
        handlewhatWeDoDiv={handlewhatWeDoDiv}
        handleourImpactDiv={handleourImpactDiv}
      />
      <Hero />

      {/* Ways to Give Callout */}
      <section className="mt-8 px-4 md:px-10">
        <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-orange-red">
              Your gift changes a child&#39;s future
            </h3>
            <p className="text-sm md:text-base mt-1 text-black/80">
              Donate once, set up a monthly gift, or sponsor a child’s
              education.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              className="bg-orange-red text-white px-4 py-2 rounded shadow"
              href="mailto:info@lekicharity.org?subject=Donation%20to%20Leki%20Charity%20Foundation"
              aria-label="Email to donate now"
            >
              Donate
            </a>
            <a
              className="bg-white text-black px-4 py-2 rounded border border-black/10"
              href="#what-we-do"
              aria-label="See what your support does"
            >
              See Impact
            </a>
          </div>
        </div>
      </section>

      <div className="mt-18 w-ful">
        <WhoWeAre whoWeAreRef={whoWeAreRef} />
        <Whatwedo whatWeDoRef={whatWeDoRef} />
        <OurImpact ourImpactRef={ourImpactRef} />
        <WhereWeWork whereWeWorkRef={whereWeWorkRef} />
      </div>
    </>
  );
}
