"use client";

import React from "react";
import ButtonClose from "@/shared/ButtonClose";
import Logo from "@/shared/Logo";
import { Disclosure } from "@headlessui/react";
import { NavItemType } from "./NavigationItem";
import { NAVIGATION_DEMO } from "@/data/navigation";
import SocialsList from "@/shared/SocialsList";
import { ChevronDownIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = NAVIGATION_DEMO,
  onClickClose,
}) => {
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <Link
              href={{
                pathname: i.href || undefined,
              }}
              className="flex px-4 text-neutral-900 dark:text-neutral-200 text-sm font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-0.5"
            >
              <span
                className={`py-2.5 pr-3 ${!i.children ? "block w-full" : ""}`}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="flex-1 flex"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="py-2.5 flex justify-end flex-1"
                  >
                    <ChevronDownIcon
                      className="ml-2 h-4 w-4 text-neutral-500"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                </span>
              )}
            </Link>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <Disclosure
        key={item.id}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <Link
          className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
          href={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={`py-2.5 pr-3 ${!item.children ? "block w-full" : ""}`}
          >
            {item.name}
          </span>
          {item.children && (
            <span className="flex-1 flex" onClick={(e) => e.preventDefault()}>
              <Disclosure.Button
                as="span"
                className="py-2.5 flex items-center justify-end flex-1 "
              >
                <ChevronDownIcon
                  className="ml-2 h-4 w-4 text-neutral-500"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </Link>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="py-6 px-5 relative">
        <Logo />
        <button
          onClick={onClickClose}
          className="absolute right-5 top-5 p-1 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded"
          aria-label="Close menu"
        >
          <ButtonClose />
        </button>
        <p className="mt-5 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
          Discover the most outstanding articles on all topics of life. Write
          your stories and share them.
        </p>

        <div className="flex justify-between items-center mt-4">
          <SocialsList
            itemClass="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300"
          />
        </div>
      </div>

      {/* Navigatsiya */}
      <nav>
        <ul className="flex flex-col py-6 px-5 space-y-1">
          {data.map(_renderItem)}
        </ul>
      </nav>

      {/* Kontaktlar */}
      <div className="px-5 py-6 border-t border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-300 text-sm space-y-4">
        <h3 className="font-semibold text-base mb-2">Kontaktlar</h3>

        <div className="flex items-center space-x-3">
          <PhoneIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <a href="tel:+998901234567" className="hover:underline">
            +998 90 123 45 67
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <EnvelopeIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <a href="mailto:info@naseemstravel.uz" className="hover:underline">
            info@naseemstravel.uz
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <MapPinIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <address>
            Tashkent, Uzbekistan, Amir Temur ko'chasi, 123
          </address>
        </div>

        <div className="flex items-center space-x-3">
          <GlobeAltIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <a
            href="https://naseemus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            naseemus.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
