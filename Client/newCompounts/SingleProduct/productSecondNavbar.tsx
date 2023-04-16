import React, { useState } from "react";

const productSecondNavbar = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  return (
    <div className="">
      <div className="xl:w-full xl:mx-0 h-12 sm:block bg-white shadow rounded ">
        <hr />
        <ul className="flex justify-center px-5">
          <li
            onClick={() => setActiveStatus(1)}
            className={
              activeStatus == 1
                ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12"
                : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"
            }
          >
            <div className="flex items-center mb-3">
              <span className="ml-1 font-normal">
                {activeStatus == 1 ? "iphone" : "iphone"}
              </span>
            </div>
            {activeStatus == 1 && (
              <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
            )}
          </li>
          <li
            onClick={() => setActiveStatus(2)}
            className={
              activeStatus == 2
                ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12"
                : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"
            }
          >
            <div className="flex items-center mb-3">
              <span className="ml-1 font-normal">
                {activeStatus == 2 ? "cyrbon" : "cyrbon"}
              </span>
            </div>
            {activeStatus == 2 && (
              <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
            )}
          </li>
          <li
            onClick={() => setActiveStatus(3)}
            className={
              activeStatus == 3
                ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12"
                : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"
            }
          >
            <div className="flex items-center mb-3">
              <span className="ml-1 font-normal">
                {activeStatus == 3 ? "description" : "description"}
              </span>
            </div>
            {activeStatus == 3 && (
              <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
            )}
          </li>
          <li
            onClick={() => setActiveStatus(4)}
            className={
              activeStatus == 4
                ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12"
                : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"
            }
          >
            <div className="flex items-center mb-3">
              <span className="ml-1 font-normal">
                {activeStatus == 4 ? "descriptionnew" : "descriptionnew"}
              </span>
            </div>
            {activeStatus == 4 && (
              <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default productSecondNavbar;
