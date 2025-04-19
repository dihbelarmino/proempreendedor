"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Division = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

const divisions: Division[] = [
  {
    id: "showroom",
    title: "Showroom & Automotive",
    description: "Experience luxury automotive excellence at our state-of-the-art showroom featuring premium vehicles and exceptional customer service.",
    image: "/images/divisions/showroom.jpg",
    icon: "🚘",
  },
  {
    id: "realestate",
    title: "Real Estate & Construction",
    description: "Discover unparalleled real estate opportunities and construction services focused on quality, innovation, and architectural excellence.",
    image: "/images/divisions/realestate.jpg",
    icon: "🏢",
  },
  {
    id: "tech",
    title: "Technology Services",
    description: "Cutting-edge digital solutions and technology services to propel your business forward in an increasingly connected world.",
    image: "/images/divisions/tech.jpg",
    icon: "💻",
  },
  {
    id: "consulting",
    title: "Corporate Consulting",
    description: "Strategic corporate consulting services to optimize your business operations, enhance growth, and maximize profitability.",
    image: "/images/divisions/consulting.jpg",
    icon: "📊",
  },
];

export default function BusinessDivisions() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
      id="business"
      ref={sectionRef}
      className="section-padding bg-black py-24"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Our <span className="text-gradient">Business Divisions</span>
          </h2>
          <p className="text-gray-300">
            We provide comprehensive services across diverse sectors, each dedicated to delivering exceptional value and innovation to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisions.map((division, index) => (
            <div
              key={division.id}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <Card className="bg-zinc-900 border-zinc-800 h-full overflow-hidden group hover:border-white/30 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={division.image}
                    alt={division.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoverIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                    {division.icon}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white">{division.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-400 line-clamp-3">
                    {division.description}
                  </CardDescription>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-white p-0 hover:bg-transparent group-hover:text-white/80"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
