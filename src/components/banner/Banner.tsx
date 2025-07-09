import { BannerType } from "@/@types/types";
import Image from "next/image";
import { Headings } from "../typography";
import Form1 from "../forms/Form1";
import Navbar from "../navbar/Navbar";

const Banner: React.FC<BannerType> = ({ title, subTitle, src }) => {
  return (
    <section className="w-full max_screen  md:pt-4 md:px-[1.3125rem]">
      <div className="relative md:aspect-[4/2.1] aspect-[4/4.5] after:absolute after:inset-0 after:border after:border-secondary after:m-4">
        <Image
          src={src}
          alt="banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 z-20 flex flex-col max-md:px-5 bg-black/50">
          <Navbar />
          <div className="w-full text-center flex flex-col space-y-4 mt-auto mb-36">
            <p className="text-white text-lg lato">{title}</p>
            <Headings
              level={1}
              className="text-white text-[2rem]/[2.5rem] md:text-[3.5rem]/[4rem] tracking-wide font-semibold playfair-display"
            >
              {subTitle}
            </Headings>
            <div className="max-w-[71rem] mt-[1.125rem] mx-auto p-4 bg-[#131313]/50 md:block hidden">
              <Form1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
