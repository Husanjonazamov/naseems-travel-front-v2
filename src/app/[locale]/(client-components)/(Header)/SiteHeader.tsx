"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useThemeMode } from "@/utils/useThemeMode";

// PathName tipini shu yerda aniqlaymiz, bu xatoliklarni bartaraf etadi
type PathName =
  | "/"
  | "/home-2"
  | "/home-3"
  | "/listing-car-detail"
  | "/listing-experiences-detail"
  | "/listing-stay-detail";

export type SiteHeaders = "Header 1" | "Header 2" | "Header 3";

interface HomePageItem {
  name: string;
  slug: PathName;
}

const OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

let OBSERVER: IntersectionObserver | null = null;

const PAGES_HIDE_HEADER_BORDER: PathName[] = [
  "/home-3",
  "/listing-experiences-detail",
  "/listing-stay-detail",
];

const SiteHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [headers] = useState<SiteHeaders[]>(["Header 1", "Header 2", "Header 3"]);

  const [homePages] = useState<HomePageItem[]>([
    { name: "Travel", slug: "/" },
    { name: "Real Estate", slug: "/home-2" },
    { name: "Booking", slug: "/home-3" },
  ]);

  const [headerSelected, setHeaderSelected] = useState<SiteHeaders>("Header 2");

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
  }, []);

  useThemeMode();

  const pathname = usePathname();

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting);
    });
  };

  useEffect(() => {
    if (!PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      if (OBSERVER) {
        OBSERVER.disconnect();
        OBSERVER = null;
      }
      return;
    }

    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
      if (anchorRef.current) {
        OBSERVER.observe(anchorRef.current);
      }
    }

    return () => {
      if (OBSERVER) {
        OBSERVER.disconnect();
        OBSERVER = null;
      }
    };
  }, [pathname]);

  const renderRadioHeaders = () => {
    return (
      <div className="mt-4">
        <span className="text-sm font-medium">Header Styles</span>
        <div className="mt-1.5 flex items-center space-x-2">
          {headers.map((header) => (
            <div
              key={header}
              className={`py-1.5 px-3.5 flex items-center rounded-full font-medium text-xs cursor-pointer select-none ${
                headerSelected === header
                  ? "bg-black text-white shadow-black/10 shadow-lg"
                  : "border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
              }`}
              onClick={() => setHeaderSelected(header)}
            >
              {header}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderRadioHomePages = () => {
    return (
      <div className="mt-4">
        <span className="text-sm font-medium">Home Demos</span>
      
      </div>
    );
  };

  const renderHeader = () => {
    let headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";

    if (PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      headerClassName = isTopOfPage
        ? ""
        : "shadow-sm dark:border-b dark:border-neutral-700";
    }

    switch (headerSelected) {
      case "Header 1":
        return <Header className={headerClassName} navType="MainNav1" />;
      case "Header 2":
        return <Header className={headerClassName} navType="MainNav2" />;
      case "Header 3":
      default:
        return <Header className={headerClassName} navType="MainNav1" />;
    }
  };

  return (
    <>
      {renderHeader()}
      <div ref={anchorRef} className="h-1 absolute invisible"></div>

      {/* Agar kerak bo‘lsa, radio knopkalarni ko‘rsatish uchun */}
      {/* {renderRadioHeaders()} */}
      {/* {renderRadioHomePages()} */}
    </>
  );
};

export default SiteHeader;
