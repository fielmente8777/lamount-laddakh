"use client";
import { GalleryType } from "@/@types/types";
import { LinkButton, SectionWithContainer, SwiperCarousel } from "@/components";
import { SectionHeadingDesc } from "@/components/typography";
import { NextButton, PrevButton } from "@/Icons/icon";
import Image from "next/image";
// import { useEffect } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";

const Gallery: React.FC<GalleryType> = ({ title, subTitle, images, links }) => {
  // useEffect(() => {
  //   // class- 'swiper-slide-fully-visible swiper-slide-active'
  //   document
  //     .querySelectorAll<HTMLDivElement>(
  //       ".swiper-slide-fully-visible.swiper-slide-active"
  //     )
  //     ?.forEach((slide) => {
  //       (slide as HTMLDivElement).style.width = "1900px"; // Modify as needed
  //     });
  // }, []);
  return (
    <SectionWithContainer>
      <div className="w-full space-y-14">
        <SectionHeadingDesc title={title} subTitle={subTitle} textcenter />
        <div className="w-full swiper-slide-custom">
          <SwiperCarousel
            data={images}
            modules={[EffectCoverflow, Navigation]}
            navigation={{
              nextEl: ".about-next",
              prevEl: ".about-prev",
            }}
            className="w-full"
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0, // Keep flat
              stretch: 10, // Don't stretch
              depth: 150, // Controls scale & blur of side slides
              modifier: 2, // Makes the central slide more prominent
              slideShadows: true, // Shadow adds blur illusion
            }}
            
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 30,
              },
            }}
            renderSlide={(src, index) => (
              <div className="relative aspect-[4/2.5] md:aspect-[4/3] rounded w-full overflow-hidden ">
                <Image
                  src={src}
                  alt={`Slide ${index ? index + 1 : ""}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            )}
          />
          <div className="flex items-center gap-2 mt-8 justify-center">
            <button className="about-prev flex items-center justify-center box-shadow rounded-full w-10 aspect-square text-dark hover:text-white hover:bg-dark cursor-pointer hover:scale-105 active:scale-95 disabled:text-tertiary">
              <span className="sr-only">prev button</span>
              <PrevButton className="w-6 h-6" />
            </button>
            <button className="about-next flex items-center justify-center box-shadow rounded-full w-10 aspect-square text-dark hover:text-white hover:bg-dark cursor-pointer hover:scale-105 active:scale-95 disabled:text-tertiary">
              <span className="sr-only">next button</span>
              <NextButton className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center -mt-6">
          {links.map((link, index) => (
            <LinkButton
              key={index}
              {...link}
              className="bg-dark text-white hover:text-dark hover:bg-white"
            />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
