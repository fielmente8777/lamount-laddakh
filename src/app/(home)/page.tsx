import { Banner, SectionWithContainer } from "@/components";
import { pageDate } from "@/utils/pageData";
import { About, Accommodations, Gallery, Testimonials } from "./components";
import Form1 from "@/components/forms/Form1";

export default function Home() {
  return (
    <main>
      <Banner {...pageDate.bannerdata} />
      <SectionWithContainer sectionClassName="bg-[#131313]/50 md:hidden">
        <Form1 />
      </SectionWithContainer>
      <About {...pageDate.aboutUs} />
      <Accommodations {...pageDate.accommodations} />
      <Gallery {...pageDate.gallery} />
      <Testimonials {...pageDate.testimonial} />
    </main>
  );
}
