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

			<div className="mt-18 w-ful">
				<WhoWeAre whoWeAreRef={whoWeAreRef} />
				<Whatwedo whatWeDoRef={whatWeDoRef} />
				<OurImpact ourImpactRef={ourImpactRef} />
				<WhereWeWork whereWeWorkRef={whereWeWorkRef} />
			</div>
		</>
	);
}
