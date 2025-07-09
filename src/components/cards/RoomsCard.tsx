"use client";
import SwiperCarousel from "../SwiperCarousel";
import { Headings } from "../typography";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { AccommodationType } from "@/@types/types";
import { RightTickIcon } from "@/Icons/icon";

const RoomsCard: React.FC<AccommodationType["cards"][0]> = ({
  title,
  subTitle,
  images,
  description,
  listOfServices,
  links,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 w-full">
      <div className="md:col-span-5 w-full common2 relative">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={24}
          modules={[Navigation]}
          navigation={true}
          loop={true}
          className="w-full"
          renderSlide={(image) => (
            <div className="relative w-full md:aspect-[4/2.2] aspect-[4/3]">
              <Image src={image} alt={title} className="object-cover rounded-tl-lg md:rounded-bl-lg max-md:rounded-tr-lg" fill />
            </div>
          )}
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4 md:py-9 md:px-8 px-4 py-6 bg-bg1 md:border-y max-md:border-x md:border-r max-md:border-b  border-[#131313] max-md:rounded-b-lg md:rounded-tr-lg md:rounded-br-lg">
        <div className="">
          <p className="text-secondary uppercase tracking-widest">{subTitle}</p>
          <Headings
            level={3}
            className="text-primary capitalize md:text-[2rem]/[2.5rem] text-[1.5rem]/[2rem]"
          >
            {title}
          </Headings>
        </div>

        {/* title & list */}
        <p className="text-[#808080]">{description.slice(0, 240)}</p>
        {/* list of services */}
        {listOfServices && (
          <ul className="">
            {listOfServices.map((item, index) => (
              <li
                key={index}
                className="text-[#808080] flex items-center gap-2"
              >
                <span className="text-secondary">
                  <RightTickIcon />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={links[0].href}
          // onClick={() => setOpen(true)}
          className="px-4 py-3 bg-dark w-fit text-white flex items-center justify-center gap-2 hover:bg-white hover:text-dark border border-dark transition-all duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-lg"
        >
          {links[0].label}
        </Link>
      </div>
    </div>
  );
};

export default RoomsCard;
