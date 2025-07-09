"use client";
import { useState } from "react";
import { Headings } from "../typography";
import { TestimonialsType } from "@/@types/types";

const TestimonialCard: React.FC<TestimonialsType["cards"][0]> = ({
  desc,
  title,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4">
      

      <p className="text-light text-base md:leading-8">
        {readMore ? desc : `${desc.slice(0, 200)}...`}
        <span
          className="cursor-pointer text-dark font-semibold"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "...Read less" : "Read more"}
        </span>
      </p>
      <Headings
        level={3}
        className="text-dark font-semibold text-base tracking-wide"
      >
        {title}
      </Headings>
    </div>
  );
};

export default TestimonialCard;
