"use client";
import { TestimonialsType } from "@/@types/types";
import { SectionWithContainer, TestimonalCard } from "@/components";
import { SectionHeadingDesc } from "@/components/typography";
import Image from "next/image";
import SwiperCarousel from "../../../components/SwiperCarousel";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials: React.FC<TestimonialsType> = ({
  title,
  subTitle,
  cards,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-bg1">
      <div className="grid md:grid-cols-2 grid-cols-1 max-md:gap-6 items-center">
        <div className="relative aspect-[4/3]  md:aspect-[4/5]">
          <Image
            src={image}
            alt={title}
            className="object-cover rounded-lg"
            fill
            sizes="100vw"
          />
        </div>
        <div className="max-w-lg md:ml-auto w-full space-y-7 common">
          <SectionHeadingDesc title={title} subTitle={subTitle} />
          <div className="relative aspect-square max-w-24 w-full ">
            <Image
              src={"https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/la_mount_ladakh/icon.webp"}
              alt={title}
              className="object-contain rounded-lg"
              fill
              sizes="100vw"
            />
          </div>
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={24}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true, el: ".pagination_3" }}
            renderSlide={(item, index) => (
              <TestimonalCard key={index} {...item} />
            )}
          />
          <div className="pagination_3 flex items-center justify-center "></div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
