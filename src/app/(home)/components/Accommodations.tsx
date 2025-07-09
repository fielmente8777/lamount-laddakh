"use client";
import { AccommodationType } from "@/@types/types";
import { RoomsCard, SectionWithContainer, SwiperCarousel } from "@/components";
import { SectionHeadingDesc } from "@/components/typography";
import { NextButton, PrevButton } from "@/Icons/icon";
import { Navigation, Pagination } from "swiper/modules";

const Accommodations: React.FC<AccommodationType> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-bg1">
      <div className="w-full space-y-14">
        <SectionHeadingDesc title={title} subTitle={subTitle} textcenter />
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          spaceBetween={24}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true, el: ".pagination_2" }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          loop={true}
          className="w-full"
          renderSlide={(card) => <RoomsCard {...card} />}
        />
        <div className="w-full flex items-center justify-center gap-10 common -mt-6">
          {/* button prev */}
          <button className="swiper-prev box-shadow rounded-full w-10 aspect-square flex items-center justify-center hover:bg-secondary">
            <PrevButton className="w-6 h-6" />
          </button>
          {/* pagination */}
          <div className="pagination_2 max-md:hidden !w-fit flex items-center justify-center gap-2" />
          {/* button next */}
          <button className="swiper-next bg-primary box-shadow rounded-full w-10 aspect-square flex items-center justify-center hover:bg-secondary">
            <NextButton className="w-6 h-6" />
          </button>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Accommodations;
