import { Popover, Tab, Transition } from "@headlessui/react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { FC, Fragment, useState } from "react";

export const headerLanguage = [
  { id: "uz", name: "UZ", href: "#", active: true },
  { id: "en", name: "EN", href: "#" },
  { id: "ru", name: "RU", href: "#" },
];

interface LangDropdownProps {
  panelClassName?: string;
  className?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const LangDropdown: FC<LangDropdownProps> = ({
  panelClassName = "top-full right-0 w-32 sm:w-48",
  className = "flex",
}) => {
  const [selectedLang, setSelectedLang] = useState(
    headerLanguage.find((l) => l.active) || headerLanguage[0]
  );

  const renderLang = (close: () => void) => {
    return (
      <div className="grid gap-2">
        {headerLanguage.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedLang(item);
              close();
            }}
            className={`flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 ${
              selectedLang.id === item.id
                ? "bg-gray-100 dark:bg-gray-700 font-bold"
                : "opacity-80"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <Popover className={`LangDropdown relative ${className}`}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`group h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 font-medium hover:text-opacity-100 focus:outline-none`}
          >
            <GlobeAltIcon className="w-5 h-5 opacity-80 mr-1 hidden sm:block" />
            <span>{selectedLang.name}</span>
            <ChevronDownIcon
              className={`${open ? "-rotate-180" : "text-opacity-70"}
                ml-1 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
              aria-hidden="true"
            />
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
            <Popover.Panel
              className={`absolute z-20 ${panelClassName} p-3 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5`}
            >
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-full bg-gray-100 dark:bg-slate-700 p-1">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-full py-1 text-sm font-medium",
                        selected
                          ? "bg-white shadow"
                          : "text-gray-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-900/40"
                      )
                    }
                  >
                    Lang
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-3">
                  <Tab.Panel>{renderLang(close)}</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default LangDropdown;
