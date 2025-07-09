import { AboutType } from "@/@types/types";
import { SectionWithContainer } from "@/components";
import SectionHeadingDesc from "../../../components/typography/SectionHeadingDesc";

const About: React.FC<AboutType> = ({ title, subTitle, description }) => {
  return (
    <SectionWithContainer sectionClassName="lg:py-24">
      <div className="max-w-[50rem] mx-auto space-y-6 w-full">
        <div className="max-w-xl mx-auto space-y-4 w-full">
          <SectionHeadingDesc title={title} subTitle={subTitle} textcenter />
        </div>
        <p className="text-lg text-light lato text-center">{description}</p>
      </div>
    </SectionWithContainer>
  );
};

export default About;
