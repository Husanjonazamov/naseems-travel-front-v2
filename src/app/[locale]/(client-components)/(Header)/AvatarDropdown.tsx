import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Avatar from "@/shared/Avatar";
import SwitchDarkMode2 from "@/shared/SwitchDarkMode2";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function AvatarDropdown({ className = "" }: Props) {
  return (
    <Popover className={`AvatarDropdown relative flex ${className}`}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`self-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center`}
          >
            <Avatar sizeClass="w-8 h-8 sm:w-9 sm:h-9" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-[260px] px-4 top-full -right-10 sm:right-0 sm:px-0">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6">
                  {/* Profil va boshqa bo‘limlar */}

                  {/* To‘g‘ri ishlaydigan Link */}
                  <Link
                    href={"/account"}
                    className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    onClick={() => close()}
                  >
                    {/* ...Icon va matn */}
                    <p className="text-sm font-medium">{"My Account"}</p>
                  </Link>

                  {/* Boshqa Linklar ham shunday */}

                  {/* Noto‘g‘ri Link o‘rniga oddiy <a> */}
                  <a
                    href="#"
                    className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    onClick={() => close()}
                  >
                    {/* Icon va matn */}
                    <p className="text-sm font-medium">{"Help"}</p>
                  </a>

                  {/* Yana boshqa bo‘limlar */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
