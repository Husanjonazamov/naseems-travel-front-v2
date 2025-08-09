import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import LangDropdown from "./LangDropdown";
import WorkingHoursDropdown from "./WorkingHoursDropdown";

// Heroicons
import {
  PhoneArrowUpRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      {/* 🔵 Marketing Top Bar */}
      <div className="hidden lg:flex justify-end items-center px-6 bg-gray-100 dark:bg-neutral-800 text-sm text-gray-600 dark:text-neutral-300 h-10 border-b border-gray-200 dark:border-neutral-700">
        <div className="flex items-center gap-6">
          {/* Telefon */}
          <div
            className="flex items-center gap-1 hover:text-indigo-500 transition"
            title="Bizga qo‘ng‘iroq qiling"
          >
            <PhoneArrowUpRightIcon className="w-4 h-4 text-indigo-500" aria-hidden="true" />
            <span className="whitespace-nowrap">+998 90 123 45 67</span>
          </div>

          {/* Veb sayt */}
          <div
            className="flex items-center gap-1 hover:text-indigo-500 transition"
            title="Saytga o'tish"
          >
            <GlobeAltIcon className="w-4 h-4 text-indigo-500" aria-hidden="true" />
            <span className="whitespace-nowrap">
              <a
                href="https://naseemus.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                naseemus.com
              </a>
            </span>
          </div>

          {/* Email */}
          <div
            className="flex items-center gap-1 hover:text-indigo-500 transition"
            title="Bizga email yozing"
          >
            <EnvelopeIcon className="w-4 h-4 text-indigo-500" aria-hidden="true" />
            <span className="whitespace-nowrap">info@naseemstravel.uz</span>
          </div>

          {/* Ish vaqti dropdown */}
          <div
            className="flex items-center gap-1 hover:text-indigo-500 transition"
            title="Ish vaqti"
          >
            <WorkingHoursDropdown />
          </div>
        </div>
      </div>

      {/* 🔵 Main Navigation */}
      <div className="px-4 lg:container h-20 relative flex justify-between items-center">
        {/* 🔹 Chap: Logo + Navigation */}
        <div className="hidden md:flex justify-start flex-1 space-x-4 sm:space-x-10">
          <Logo />
          <Navigation />
        </div>

        {/* 🔹 Mobil qidiruv */}
        <div className="flex lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <div className="self-center flex-1">
            <HeroSearchForm2MobileFactory />
          </div>
        </div>

        {/* 🔹 O'ng: til, mavzu, qidiruv, menyu */}
        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-1 items-center">
            <LangDropdown />
            {/* <SwitchDarkMode /> */}
            <SearchDropdown className="flex items-center" />
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
