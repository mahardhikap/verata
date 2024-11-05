import React, { useState } from "react";
import Image from "next/image";
import verata from "../assets/icons/verata.jpg";
import { HeaderMenu } from "@/data/menu.data";
import { useRouter } from "next/router";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";

const HeaderPage: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="pe-3 sticky top-0 z-10 bg-main overflow-hidden">
      <div className="flex flex-row justify-between md:justify-start items-center container mx-auto relative my-14 sm:my-16 md:my-8 lg:my-5">
        <Image
          onClick={() => router.replace("/")}
          src={verata}
          alt="logo"
          width={150}
          height={150}
          className="w-3/12 sm:w-2/12 md:w-2/12 lg:w-1/12 object-contain cursor-pointer absolute left-0"
        />
        <div className="hidden md:flex flex-row flex-grow justify-center items-center flex-wrap gap-3 my-5 text-premium">
          {HeaderMenu?.map((item, i) => (
            <Link key={i} href={item.url_menu}>
              <div
                className={`${
                  pathname === item.url_menu
                    ? "bg-gradient-to-br text-white from-premium to-second"
                    : ""
                } cursor-pointer hover:bg-gradient-to-br hover:from-premium hover:to-second rounded-xl text-base px-4 py-1 hover:text-main bg-dark font-medium`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
        {/* Button to toggle menu */}
        <RiMenu3Line
          size={40}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden p-2 bg-main text-premium rounded absolute right-0"
        />
      </div>

      {/* Sidebar menu */}
      <div
        className={`fixed inset-0 lg:hidden bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-main shadow-lg transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 text-premium">
            <h2 className="text-lg font-bold">
              <Image
                onClick={() => router.replace("/")}
                src={verata}
                alt="logo"
                width={150}
                height={150}
                className="w-5/12 sm:w-4/12 lg:w-2/12 object-contain cursor-pointer"
              />
            </h2>
            {HeaderMenu?.map((item, i) => (
              <Link href={item.url_menu} key={i}>
                <div
                  className="cursor-pointer my-4 bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent font-semibold"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
