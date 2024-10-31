import React, { useState } from "react";
import Image from "next/image";
import verata from "../assets/icons/verata.jpg";
import { HeaderMenu } from "@/data/menu.data";
import { useRouter } from "next/router";
import { RiMenu3Line } from "react-icons/ri";

const HeaderPage: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="pe-3 sticky top-0 z-10 bg-main rounded-b-3xl overflow-hidden">
      <div className="flex flex-row justify-between items-center container mx-auto">
        <Image
          onClick={() => router.replace("/")}
          src={verata}
          alt="logo"
          width={150}
          height={150}
          className="w-3/12 sm:w-2/12 lg:w-1/12 object-contain cursor-pointer"
        />
        <div className="hidden lg:flex flex-row items-center flex-wrap gap-3 ms-20 my-5 text-premium">
          {HeaderMenu?.map((item, i) => (
            <div
              className={`${pathname === item.url_menu ? 'bg-premium text-main' : ''} cursor-pointer hover:bg-premium rounded-xl text-sm px-2 py-1 hover:text-main`}
              key={i}
              onClick={() => router.push(item.url_menu)}
            >
              {item.label}
            </div>
          ))}
        </div>
        {/* Button to toggle menu */}
        <RiMenu3Line
          size={40}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 bg-main text-premium rounded"
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
              <div
                key={i}
                className="cursor-pointer my-4"
                onClick={() => {
                  router.push(item.url_menu);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
