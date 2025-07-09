import Headings from "./Headings";

interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  textcenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
}

const SectionHeadingDesc: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  textcenter = false,
  titleColor,
  subTitleColor,
}) => {
  return (
    <div className="flex flex-col w-full gap-1">
      {title && (
        <Headings
          level={2}
          className={` ${textcenter ? "text-center" : ""} ${titleColor ? `text-${titleColor}` : "text-secondary"} font-medium artifex text-base `}
        >
          {title}
        </Headings>
      )}
      {subTitle && (
        <Headings
          level={3}
          className={` ${textcenter ? "text-center" : ""} ${subTitleColor ? `text-${subTitleColor}` : "text-dark"} playfair-display md:text-[2.5rem]/[3rem] text-2xl`}
        >
          {subTitle}
        </Headings>
      )}
    </div>
  );
};

export default SectionHeadingDesc;
