import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function FilterNavbar() {
  return (
    <>
      <div className="isolate bg-white">
    
        <div className="px-6 pt-6 lg:px-8">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>

              <a href="" className="-m-1.5 p-1.5">
                <h1 className="font-semibold">Cell Phone</h1>
              </a>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
              <p className="">
                cell phone
              </p>

              <p className=""> cell phone </p>

              <p className="">cell phone </p>

            
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default FilterNavbar;
