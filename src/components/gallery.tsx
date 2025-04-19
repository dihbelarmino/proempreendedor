"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  year: string;
  description: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/image1.jpg",
    alt: "Pasban Corporation Showroom",
    year: "2020",
    description: "Launch of our flagship luxury automobile showroom in Sahiwal",
  },
  {
    id: 2,
    src: "/images/gallery/image2.jpg",
    alt: "Corporate Leadership",
    year: "2021",
    description: "Formation of strategic leadership team to drive business expansion",
  },
  {
    id: 3,
    src: "/images/gallery/image3.jpg",
    alt: "Modern Office Space",
    year: "2022",
    description: "Inaugurated state-of-the-art corporate headquarters",
  },
  {
    id: 4,
    src: "/images/gallery/image4.jpg",
    alt: "Architectural Excellence",
    year: "2023",
    description: "Completion of our first major real estate development project",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-zinc-900 py-24"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Our <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-gray-300">
            A journey of excellence and innovation, marked by significant achievements and continuous growth.
          </p>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-white text-black text-sm font-bold px-3 py-1 rounded">
                  {image.year}
                </div>

                {/* Hover Information */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold mb-2">{image.alt}</p>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white w-fit mt-4 border border-white/30"
                  >
                    <Eye className="h-4 w-4 mr-2" /> View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.id}>
                  <Card className="border-none bg-transparent">
                    <CardContent className="p-0">
                      <div
                        className={`relative h-80 rounded-lg overflow-hidden transform transition-all duration-1000 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

                        {/* Year Badge */}
                        <div className="absolute top-4 right-4 bg-white text-black text-sm font-bold px-3 py-1 rounded">
                          {image.year}
                        </div>

                        {/* Information */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <p className="text-white font-semibold mb-2">{image.alt}</p>
                          <p className="text-gray-300 text-sm">{image.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none bg-black border-white/20 text-white hover:bg-zinc-800 hover:text-white" />
              <CarouselNext className="static transform-none bg-black border-white/20 text-white hover:bg-zinc-800 hover:text-white" />
            </div>
          </Carousel>
        </div>

        {/* Timeline */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="relative border-l-2 border-white/20 pl-8 ml-4">
            {galleryImages.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`mb-12 last:mb-0 transform transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px]" />
                <div className="font-bold text-xl text-white mb-1">{milestone.year}</div>
                <div className="text-white mb-2">{milestone.alt}</div>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
