"use client";
import { OutLineCallIcon, OutLinePhoneIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <header className="pt-8">
      <nav className="max-width max-md:!px-px">
        <div className="flex items-center justify-between md:py-4">
          <div className="relative max-md:w-24 md:aspect-[4/2.5] h-[3.9rem] aspect-[4/.3]">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </div>
          <div className="">
            <Link
              href="tel:+91 96222 05133"
              className="text-white text-lg flex items-center gap-2"
            >
              <span className="md:block hidden">
                <OutLinePhoneIcon />
              </span>
              <span className="block md:hidden w-8 h-8">
                <OutLineCallIcon />
              </span>
              <span className="md:block hidden text-nowrap">+91 96222 05133 </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
