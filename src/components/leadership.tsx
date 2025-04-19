"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Phone } from "lucide-react";

type Leader = {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    whatsapp: string;
    phone: string;
    instagram: string;
    facebook: string;
  };
};

const leaders: Leader[] = [
  {
    id: "saqib",
    name: "Saqib Naveed",
    position: "Founder & CEO",
    bio: "With a visionary approach to business and a passion for excellence, Saqib has been the driving force behind Pasban Corporation's growth and success.",
    image: "/images/team/saqib.jpg",
    social: {
      whatsapp: "+92 301 8690302",
      phone: "+92 301 8690302",
      instagram: "https://www.instagram.com/saqib.naveed302/",
      facebook: "https://www.facebook.com/saqib.naveed.3701/",
    },
  },
  {
    id: "kashif",
    name: "Kashif Nazir",
    position: "Co-founder & COO",
    bio: "Kashif brings extensive operational expertise and strategic insight that has been instrumental in establishing Pasban as a premier business group in Sahiwal.",
    image: "/images/team/kashif.jpg",
    social: {
      whatsapp: "+92 300 8690302",
      phone: "+92 300 8690302",
      instagram: "https://www.instagram.com/kashif_nazir_pasban_sahiwal/",
      facebook: "https://www.facebook.com/leolionpasban/",
    },
  },
];

export default function Leadership() {
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
      id="leadership"
      ref={sectionRef}
      className="section-padding bg-black py-24"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-gray-300">
            Meet the visionary leaders who drive our mission and shape our future with expertise, passion, and unwavering commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-white/30 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-2/5 h-[280px] md:h-auto overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                        <p className="text-gray-400 mb-4">{leader.position}</p>
                        <p className="text-gray-300 mb-6">{leader.bio}</p>
                      </div>

                      {/* Social Links */}
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`tel:${leader.social.phone.replace(/\s+/g, '')}`}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-white/10 transition-colors"
                          aria-label={`Call ${leader.name}`}
                        >
                          <Phone className="h-5 w-5 text-white" />
                        </Link>

                        <Link
                          href={`https://wa.me/${leader.social.whatsapp.replace(/\s+/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-green-900/30 transition-colors"
                          aria-label={`WhatsApp ${leader.name}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                          </svg>
                        </Link>

                        <Link
                          href={leader.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-pink-900/30 transition-colors"
                          aria-label={`${leader.name}'s Instagram`}
                        >
                          <Instagram className="h-5 w-5 text-white" />
                        </Link>

                        <Link
                          href={leader.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-blue-900/30 transition-colors"
                          aria-label={`${leader.name}'s Facebook`}
                        >
                          <Facebook className="h-5 w-5 text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
