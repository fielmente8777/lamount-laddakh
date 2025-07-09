"use client";
import Link from "next/link";
import { Container } from "../sectionComponent";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { footerLinks } from "@/utils/pageData";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { socialLinks } from "@/utils/links";

const Footer = () => {
  const year = new Date().getFullYear();
  const pathName = usePathname();

  if (pathName === "/thank-you") {
    return null;
  }
  return (
    <footer className="max_screen">
      <section className="bg-dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center md:py-20 py-10 md:gap-10">
            <div className="w-full">
              <div className="w-full max-w-[183px] relative md:aspect-[4/3] aspect-square max-md:mx-auto">
                <Image
                  src={footerLinks.src}
                  alt={"logo"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {footerLinks.data.map((link, index) => (
              <div key={index} className="w-full space-y-4">
                {link.title && (
                  <h3 className="text-white playfair-display md:text-[2rem]/[2.5rem] text-xl mb-2">
                    {link.title}
                  </h3>
                )}

                {!link.mapUrl ? (
                  <ul className="space-y-4 text-white">
                    {link.links?.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href} className="text-white">
                          {item.label}
                        </Link>
                        {item.href2 && <span className="mr-2">,</span>}
                        {item.label2 && (
                          <Link href={item.href2} className="text-white">
                            {item.label2}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div key={index} className="aspect-[4/1.6] bg-white">
                    <LazyLoadedMap src={link.mapUrl} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <div className="bg-secondary">
        <Container>
          <div className="py-4 flex max-md:flex-col max-md:gap-3 items-center justify-center text-dark relative">
            <div className="flex w-full md:w-fit justify-center items-center max-md:border-b-dark max-md:border-b max-md:pb-2 ">
              <span className="md:px-6 px-4 text-nowrap"> &copy; {year} La Mount Ladakh</span>
              <span className="max-md:hidden text-xl">|</span>
              <span className="md:px-6 px-4 text-nowrap">All rights reserved</span>
            </div>
            <span className="max-md:hidden text-xl">|</span>
            <span className="px-6">
              Designed & Developed by{" "}
              <Link
                href={"https://www.eazotel.com/"}
                className="font-medium"
                target="_blank"
              >
                Eazotel
              </Link>
            </span>
            <ul className="md:absolute right-4 flex items-center gap-4">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-dark text-white w-8 h-8 flex items-center justify-center hover:bg-white hover:text-dark border border-dark"
                  >
                    {item.icon}
                    <span className="sr-only">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
