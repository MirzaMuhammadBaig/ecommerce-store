import { Disclosure } from "@headlessui/react";
import Newfooter from "newCompounts/newfooter";
import React from "react";
import FilterCard from "./filterCard";

const filters = [
  {
    id: "brand",
    name: "brand",
    options: [
      { value: "apple", label: "apple", checked: false },
      { value: "nokia", label: "nokia", checked: false },
      { value: "htc", label: "htc", checked: false },
      { value: "samsung", label: "samsung", checked: false },
      { value: "tecno", label: "tecno", checked: false },
      { value: "vivo", label: "vivo", checked: false },
    ],
  },
];
const filtersColor = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
];

function SideFilter() {
  return (
    <>
      <div className="flex h-full">
        <div className="w-64 absolute sm:relative bg-white shadow md:h-full flex-col justify-between hidden sm:flex">
          <div className="px-8">
            <ul className="mt-12">
              <li className=" w-full  text-black  items-center mb-6">
                <div className="flex items-center">
                  <span className="text-sm font-bold ml-2">prize</span>
                </div>
                <br />
                <div className="flex justify-between">
                  <input
                    type="number"
                    placeholder="$300"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm  py-2.5 w-[40%] dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                  <input
                    type="number"
                    placeholder="$300"
                    // className="w-[35%] h-[30%] border rounded-lg border-black"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm  py-2.5 w-[40%] dark:bg-gray-800 dark:text-white dark:border-gray-600 "
                  />
                </div>
              </li>
              <hr />
              <br />
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="">
                  <div className="flex items-center">
                    <span className="text-sm font-bold ml-2">Brand</span>
                  </div>
                  <br />
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="">
                      <h3 className=" text-center">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </h3>
                    </Disclosure>
                  ))}
                </div>
              </li>
              <hr />
              {/* <br1 /> */}
              <li className="flex w-full mt-2 justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="">
                  <div className="flex items-center">
                    <span className="text-sm font-bold ml-2">Color</span>
                  </div>
                  <br />
                  {filtersColor.map((section) => (
                    <Disclosure as="div" key={section.id} className="">
                      <h3 className=" text-center">
                        {/* <span className="font-medium text-gray-900">
                          {section.name}
                        </span> */}
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </h3>
                    </Disclosure>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <div className=" ">
            <div className="flex lg:gap-x-12 hidden lg:block md:block">
              <div className="flex lg:flex">
                <a href="" className=" p-2 mt-1">
                  <h1 className="font-semibold">Sort by</h1>
                </a>
              </div>
              <div className="inline-flex rounded-lg shadow-sm">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-l-3xl hover:bg-gray-100  dark:text-white dark:hover:text-white  dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  popular
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-black bg-white border-t border-b border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-3  dark:text-white dark:hover:text-white   dark:focus:text-white"
                >
                  tranding
                </button>
                <button
                  type="button"
                  className="px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-3 focus:ring-blue-700 focus:text-blue-700  dark:focus:text-white"
                >
                  apple
                </button>
                <button
                  type="button"
                  className="px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-3 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700  dark:text-white dark:hover:text-white  dark:focus:text-white"
                >
                  tecno
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-3xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-3 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  iphone
                </button>
              </div>
            </div>
            <FilterCard />

            <br />
            <br />
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
export default SideFilter;
