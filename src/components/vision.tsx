"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div
        className={`container-custom text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex justify-center mb-8">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
            <Quote className="h-8 w-8 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8 leading-tight">
          Driven by Vision.<br />Defined by Excellence.
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          At Pasban Corporation Group, we are committed to pioneering innovation,
          delivering exceptional quality, and creating lasting value across all our ventures.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className={`text-center px-6 py-4 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-white font-bold text-xl mb-2">Innovation</h3>
            <p className="text-gray-400">Pioneering solutions that transform industries</p>
          </div>

          <div className={`text-center px-6 py-4 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-white font-bold text-xl mb-2">Excellence</h3>
            <p className="text-gray-400">Unwavering commitment to the highest standards</p>
          </div>

          <div className={`text-center px-6 py-4 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-white font-bold text-xl mb-2">Integrity</h3>
            <p className="text-gray-400">Building relationships founded on trust and honesty</p>
          </div>
        </div>
      </div>
    </section>
  );
}
