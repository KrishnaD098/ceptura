import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from 'gsap';
import concrete from "../assets/services/concrete.jpeg";
import plumbing from "../assets/services/plumbing.jpeg";
import electrical from "../assets/services/electrical.jpeg";
import roofing from "../assets/services/roofing.jpeg";
import flooring from "../assets/services/flooring.jpeg";
import utility from "../assets/services/utility.jpeg";
import structural from "../assets/services/structural.jpeg";
import landscape from "../assets/services/irrigation.jpeg";

const services = [
  {
    id: 1,
    name: 'Concrete and Rebar',
    description: 'We provide high-quality concrete and rebar services for your construction projects. Our concrete ensures durability and strength, while our rebar installations reinforce structures for long-lasting support.',
    img: concrete,
  },
  {
    id: 2,
    name: 'Plumbing',
    description: 'Our professional plumbing services cover routine maintenance to complete system installations. We use advanced techniques and high-quality materials to ensure reliable water systems meeting industry standards.',
    img: plumbing,
  },
  {
    id: 3,
    name: 'Electrical',
    description: 'We offer expert electrical services for safe and efficient power distribution. Our team handles wiring, repairs, and installations, all while adhering to strict safety codes and standards.',
    img: electrical,
  },
  {
    id: 4,
    name: 'Roofing',
    description: 'Our roofing solutions provide long-lasting protection against the elements. We offer a variety of materials and styles to ensure your property is safeguarded with weather-resistant roofing.',
    img: roofing,
  },
  {
    id: 5,
    name: 'Utility and Civil',
    description: 'We deliver utility and civil services for infrastructure development. Our team handles utility installations, upgrades, and civil engineering projects, ensuring effective solutions for your needs.',
    img: utility,
  },
  {
    id: 6,
    name: 'Flooring',
    description: 'Our flooring services cater to residential and commercial spaces with a range of styles and materials. Whether hardwood, tiles, or laminates, we provide expert installation to enhance your floors.',
    img: flooring,
  },
  {
    id: 7,
    name: 'Structural Steel',
    description: 'We specialize in high-quality structural steel services for robust construction frameworks. Our precise fabrication and installation deliver the strength and stability needed for reliable building structures.',
    img: structural,
  },
  {
    id: 8,
    name: 'Landscape and Irrigation',
    description: 'Our landscape and irrigation services create lush gardens and outdoor spaces. We design and implement landscaping solutions, including efficient irrigation systems, to enhance your property’s exterior.',
    img: landscape,
  }
];

const ServicesPage = () => {
  const servicesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Check if servicesRef is correctly populated
    if (servicesRef.current.length === services.length) {
      servicesRef.current.forEach((el, index) => {
        gsap.fromTo(el, 
          { x: index % 2 === 0 ? -200 : 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    gsap.to(`.slick-slide[data-slick-index="${activeIndex}"]`, {
      scale: 1.1,
      duration: 0.5,
      ease: "power4.out",
      onComplete: () => {
        gsap.to(`.slick-slide:not([data-slick-index="${activeIndex}"])`, {
          scale: 1,
          duration: 0.5,
          ease: "power4.out"
        });
      }
    });
  }, [activeIndex]);

  const handleAfterChange = (current) => {
    setActiveIndex(current);
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1050,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    afterChange: handleAfterChange,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    prevArrow: <div className="slick-prev" style={{ color: '#132030', fontSize: '24px' }}>‹</div>,
    nextArrow: <div className="slick-next" style={{ color: '#132030', fontSize: '24px' }}>›</div>
  };

  return (
    <div className="bg-[#EFF0F0] py-12 min-h-screen font-roboto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-5xl font-bold text-[#132030]">Our Services</p>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <Slider {...settings}>
            {services.map(({ id, name, description, img }, index) => (
              <div 
                key={id} 
                className="p-4" 
                ref={el => servicesRef.current[index] = el}
                data-slick-index={index}
              >
                <div className="flex flex-col justify-start items-start shadow-xl rounded-3xl bg-gradient-to-r from-[#132030] to-[#4A515D] text-white relative h-[450px] w-[350px] transform transition-transform duration-300 hover:shadow-2xl">
                  <img src={img} alt={name} className="w-full h-56 object-cover rounded-t-lg" />
                  <hr className="w-full border-gray-300 mt-0" />
                  <div className="px-6 pt-4 flex-1">
                    <p className="text-xl font-semibold mb-2">{name}</p>
                    <p className="text-gray-200 text-base leading-relaxed font-light">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
