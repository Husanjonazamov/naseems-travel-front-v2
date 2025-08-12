import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import LangDropdown from "./LangDropdown";
import WorkingHoursDropdown from "./WorkingHoursDropdown";
import {useTranslations} from 'next-intl';


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
  const t = useTranslations('travel');

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      {/* 🔵 Marketing Top Bar */}
    <div className="hidden lg:flex justify-between items-center px-6 bg-gradient-to-r from-indigo-50 to-white dark:from-neutral-900 dark:to-neutral-800 text-sm text-gray-700 dark:text-neutral-300 h-14 border-b border-gray-200 dark:border-neutral-700 shadow-sm">
  
  {/* Chap taraf: Aloqa ma'lumotlari */}
  <div className="flex items-center gap-6">
    
    {/* Telefon */}
    <a
      href="tel:+998901234567"
      className="flex items-center gap-1 hover:text-indigo-600 transition"
      title="24/7 Murojaat"
    >
      <PhoneArrowUpRightIcon className="w-5 h-5 text-indigo-600" aria-hidden="true" />
      <span className="whitespace-nowrap font-semibold text-indigo-700 dark:text-indigo-400">
        +998 90 123 45 67
      </span>
      <span className="ml-1 bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-full">
        24/7
      </span>
    </a>

    {/* Manzil */}
    <a
      href="https://maps.google.com/?q=Toshkent, Amir Temur ko'chasi 10"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-indigo-600 transition"
      title="Bizning manzil"
    >
      <GlobeAltIcon className="w-5 h-5 text-indigo-600" aria-hidden="true" />
      <span className="whitespace-nowrap">
        {t("address")}
      </span>
    </a>

    {/* Email */}
    <a
      href="mailto:info@naseemstravel.uz"
      className="flex items-center gap-1 hover:text-indigo-600 transition"
      title="Email orqali murojaat"
    >
      <EnvelopeIcon className="w-5 h-5 text-indigo-600" aria-hidden="true" />
      <span className="whitespace-nowrap">{t("email")}</span>
    </a>

    {/* Ish vaqti */}
    <div className="flex items-center gap-1 hover:text-indigo-600 transition" title="Ish vaqti">
      <WorkingHoursDropdown />
    </div>
  </div>

  {/* O'ng taraf: Tez aloqa va CTA */}
  <div className="flex items-center gap-4">
    
    {/* Telegram */}
    <a
      href="https://t.me/naseemstravel"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-indigo-600 transition"
      title="Telegram orqali yozish"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-sky-500" viewBox="0 0 24 24">
        <path d="M9.993 15.915 9.86 19.318c.31 0 .444-.133.605-.292l1.451-1.393 3.009 2.193c.552.305.945.145 1.083-.512l1.96-9.197c.178-.815-.293-1.133-.834-.935L4.637 12.63c-.79.31-.778.75-.134.953l3.663 1.144 8.51-5.37c.4-.258.765-.116.465.142l-6.148 5.416Z" />
      </svg>
      <span className="hidden xl:inline">{t("telegram")}</span>
    </a>

    <a
      href="https://instagram.com/naseemstravel"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-pink-600 transition"
      title="Instagram sahifamiz"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-pink-500" viewBox="0 0 24 24">
        <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.75 6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
      </svg>
      <span className="hidden xl:inline">{t("instagram")}</span>
    </a>

    {/* YouTube */}
    <a
      href="https://youtube.com/@naseemstravel"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-red-600 transition"
      title="YouTube kanalimiz"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-red-500" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-1.647-.308-8.23-.308-8.23-.308s-6.583 0-8.23.308C1.478 3.507.867 4.137.546 5.015 0 6.6 0 12 0 12s0 5.4.546 6.985c.321.878.932 1.508 2.609 1.831 1.647.308 8.23.308 8.23.308s6.583 0 8.23-.308c1.677-.323 2.288-.953 2.609-1.831C24 17.4 24 12 24 12s0-5.4-.546-6.985c-.321-.878-.932-1.508-2.609-1.831ZM9.546 15.568V8.432L15.818 12l-6.272 3.568Z" />
      </svg>
      <span className="hidden xl:inline">{t("youtube")}</span>
    </a>

    {/* Bron qilish tugmasi */}
    <a
      href="http://naseemus.com/"
      target="_blank"
      className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition shadow-md"
    >
      {t("website")}
    </a>
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
