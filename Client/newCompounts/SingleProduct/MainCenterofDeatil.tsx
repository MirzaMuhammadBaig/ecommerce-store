import { Fragment, useEffect, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import axios from "axios"
import Slug from "../../src/pages/SingleProduct/[slug]"
import { useRouter } from "next/router"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { addToCart, setCart } from "@/state/features"

interface props {
  dataa: any
}

const MainCenterofDeatil = ({ dataa }: props) => {
  const dispatch = useDispatch()
  const addCart = (dataa: any) => {
    dispatch(addToCart(dataa.data))
    alert("the product has been add to card")
    // dispatch(addToCart({ tital: "654534534" }))
  }
  return (
    <>
      <div className="flex  justify-center gap-x-5">
        {/* <div className=" ">
          <div className="border border-black rounded-lg ">
            <div className="w-16 h-16 ">
              <img
                className="w-16 h-16 rounded-lg"
                src="../../phone/andrew-griswold-iOyJ7xCXLig-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="border border-black mt-10  rounded-lg">
            <div className="w-16 h-16  ">
              <img
                className="w-16 h-16  rounded-lg"
                src="../../phone/dennis-brendel-qygEOi4JS0A-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="border border-black mt-10  rounded-lg">
            <div className="w-16 h-16  ">
              <img
                className="w-16 h-16  rounded-lg"
                src="../../phone/dennis-brendel-qygEOi4JS0A-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="border border-black mt-10  rounded-lg">
            <div className="w-16 h-16 ">
              <img
                className="w-16 h-16  rounded-lg"
                src="../../phone/isaac-martin-XSlHJklgSe8-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
        </div> */}
        <div className="">
          <div className="">
            <img
              className="w-96 h-96 rounded-lg"
              src="../../phone/andrew-griswold-iOyJ7xCXLig-unsplash.jpg"
              alt="not image in here"
            />
          </div>
        </div>
        <div>
          <div className="h-96 border bg-gray-200">
            <div className="w-3/4">
              <div className="ml-3">
                <h1 className="font-extrabold text-2xl">{dataa.data.brand}</h1>
              </div>
              <div className="ml-3 mt-1">
                <h1 className="font-extrabold text-xl ">{dataa.data.price} $ USD</h1>
              </div>

              <div className="ml-3 mt-1 font-semibold ">
                <h1>product description</h1>
              </div>

              <div>
                <ul className="list-disc ml-7 mt-1">
                  <li className="text-zinc-500">
                    {dataa.data.description} XDR display and 5G connectivity
                  </li>
                  {/* <li className="text-zinc-500">
                    Advanced camera system with triple-lens setup, improvedlow-light performance,
                    and macro mode
                  </li> */}
                  <li className="text-zinc-500">
                    Long-lasting battery provides up to 14 hours of video playback or 75 hours of
                    audio playback
                  </li>
                  {/* <li className="text-zinc-500">
                    Long-lasting battery provides up to 14 hours of video playback or 75 hours of
                    audio playback
                  </li> */}
                </ul>
              </div>
              <div className="flex ml-3 mt-3 items-center">
                <div className=" -mt-2">
                  <input
                    placeholder="1"
                    type="number"
                    className="w-16 px-2 py-1 bg-gray-200 rounded-lg border border-gray-700"
                  />
                </div>
                <div className="ml-5">
                  <button
                    type="button"
                    onClick={() => addCart(dataa) }
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                  Add Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainCenterofDeatil
