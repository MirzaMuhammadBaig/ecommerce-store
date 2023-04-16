import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../src/state/hooks/hooks";
import { getCartData, setCart } from "../../src/state/features/index";
import { useSelector } from "react-redux";
import Link from "next/link";
import DeliveryModal from "newCompounts/userdetail/deliveryModal";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc: "../../ramal-wickramasinghe-OjMyiwfviQ4-unsplash.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
];

const Checkout = () => {
  const CartData: any = useSelector(getCartData);
  const [open, setOpen] = useState(false);

  return (
    <>
      <DeliveryModal open={open} setOpen={setOpen} />
      <div className="flex justify-center">
        <ul>
          {CartData.map((product: any) => {
            const { title, brand, description, price } = product;

            return (
              <li key={product.id} className="flex mt-5 border">
                <div className="h-24 w-24 ">
                  <img
                    src="../../ramal-wickramasinghe-OjMyiwfviQ4-unsplash.jpg"
                    alt=""
                    className=" w-20 h-24"
                  />
                </div>
                <div className="flex mt-7 gap-24 sm:gap-9">
                  <div className=" ml-5">
                    <h1 className="font-bold">{title}</h1>
                    <h1 className="font-semibold">{brand}</h1>
                  </div>
                  <div className="hidden lg:block">{description}</div>
                  <div className="">
                    <p>${price}</p>
                  </div>
                </div>
              </li>
            );
          })}

          <li className="flex justify-end mb-5 mt-5">
            <p className="font-semibold mr-5">total price:</p>
            <p>$600</p>
          </li>
          <li className="flex justify-center mt-5 mb-5">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Shopping
            </button>

            <button
              onClick={() => setOpen(true)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Payments
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Checkout;
