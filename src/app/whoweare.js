"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import kids from "./images/kids.jpg";

function WhoWeAre({ whoWeAreRef }) {
  const sectionRef = useRef(null);
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
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(false); // reset animation
          setTimeout(() => setShow(true), 50); // replay animation
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id="who-we-are"
      ref={(el) => {
        sectionRef.current = el;
        if (whoWeAreRef) whoWeAreRef.current = el;
      }}
      className="scroll-mt-24 px-4 md:px-10 mt-20 font-sans"
      tabIndex="-1"
    >
      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto rounded-3xl shadow-xl overflow-hidden
                   bg-gradient-to-br from-white to-gray-50 border border-gray-100
                   grid lg:grid-cols-2 items-center"
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={show ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="sm:p-12 p-4 max-lg:text-center"
        >
          <h2 className="text-orange-red lg:text-5xl text-3xl font-extrabold leading-tight">
            Who We Are.
          </h2>

          <p className="text-gray-800 mt-6 leading-relaxed text-base">
            At Leki Charity Foundation, we believe every child deserves the
            opportunity to access quality education—no matter their background.
            Founded to break the cycle of poverty through learning, we support
            underprivileged children across Northern Uganda.
          </p>

          <p className="text-gray-800 mt-6 leading-relaxed text-base">
            Guided by compassion and a commitment to real change, we partner
            with families, schools, and community leaders to empower children to
            grow academically and unlock their full potential.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={show ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="lg:h-[480px] hidden md:flex items-center"
        >
          <Image
            src={kids}
            alt="Children supported by Leki Charity"
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
          />
        </motion.div>
      </motion.div>

      {/* Mission / Passion / Values */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-20 max-w-7xl mx-auto px-4 md:px-0">
        {[
          {
            title: "Our Mission",
            content:
              "We provide sponsorships, resources, and mentorship to children who would otherwise miss the chance of education. Through empathy and partnership, we strive for sustainable, impactful support.",
          },
          {
            title: "Our Passion",
            content:
              "We believe education is a fundamental right. When children are given the opportunity to learn, they can break free from poverty and build stronger futures for themselves and their communities.",
          },
          {
            title: "Our Values",
            content:
              "Empowerment, integrity, compassion, collaboration, and excellence guide our work. We commit to honest, transparent support for the children we serve.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 
                       transition-all border border-gray-100"
          >
            <h3 className="text-lg font-bold text-orange-red mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WhoWeAre;
