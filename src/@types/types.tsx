import { JSX } from "react";

export interface BannerType {
  title: string;
  subTitle: string[];
  src: string;
}
export interface AboutType {
  title: string;
  subTitle: string;
  description: string[];
}

export interface AccommodationType {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    subTitle: string;
    description: string;
    images: string[];
    listOfServices: string[];
    links: {
      label: string;
      href: string;
    }[];
  }[];
}

export interface GalleryType {
  title: string;
  subTitle: string;
  images: string[];
  links: {
    label: string;
    href: string;
  }[];
}
export interface TestimonialsType {
  title: string;
  subTitle: string;
  image: string;
  cards: {
    title: string;
    desc: string;
  }[];
}

export interface FooterData {
  image: string;
  description: string;
  contact: {
    title: string;
    links: {
      label: string;
      href: string;
      icon: JSX.Element;
      subContact?: {
        title: string;
        links: {
          label: string;
          href: string;
          icon: JSX.Element;
        }[];
      };
    }[];
  }[];
}
