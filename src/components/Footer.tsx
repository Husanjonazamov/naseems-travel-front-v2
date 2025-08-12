"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";
import { useTranslations } from "next-intl";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const Footer: React.FC = () => {
  const t = useTranslations("travel");

  const widgetMenus: WidgetFooterMenu[] = [
    {
      id: "5",
      title: t("gettingStarted"),
      menus: [
        { href: "/", label: t("home") },
        { href: "/tour", label: t("tour") },
        { href: "/blog", label: t("blog") },
        { href: "/contact", label: t("contact") },
      ],
    },
    {
      id: "1",
      title: t("explore"),
      menus: [
        { href: "#", label: t("designFeatures") },
        { href: "#", label: t("prototyping") },
        { href: "#", label: t("designSystems") },
        { href: "#", label: t("pricing") },
        { href: "#", label: t("security") },
      ],
    },
    {
      id: "2",
      title: t("resources"),
      menus: [
        { href: "#", label: t("bestPractices") },
        { href: "#", label: t("support") },
        { href: "#", label: t("developers") },
        { href: "#", label: t("learnDesign") },
        { href: "#", label: t("releases") },
      ],
    },
    {
      id: "4",
      title: t("community"),
      menus: [
        { href: "#", label: t("discussionForums") },
        { href: "#", label: t("codeOfConduct") },
        { href: "#", label: t("communityResources") },
        { href: "#", label: t("contributing") },
        { href: "#", label: t("concurrentMode") },
      ],
    },
  ];

  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo />
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
      </div>
    </>
  );
};

export default Footer;
