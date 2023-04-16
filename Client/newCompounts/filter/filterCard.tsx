import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import Link from "next/link"

function FilterCard() {
  const [products, setProducts] = useState([])

  console.log(products, "product")
  useEffect(() => {
    axios
      .get("https://ecommerce-store-rho.vercel.app/api/product")
      .then((response) => {
        setProducts(response.data)
        console.log(response.data[0].category, "data")
        console.log(response.data[0]._id, "data")
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      {products.map((product: any) => (
        <Link key={product._id} href={`/SingleProduct/${product.slug}`}>
          <div className="flex items-center  sm:flex-none mt-14 py-8 border-t border border-gray-200">
            <div className="w-1/4">
              <img
                src="../../ramal-wickramasinghe-OjMyiwfviQ4-unsplash.jpg"
                className="w-[75%] h-[75%] object-center object-cover"
              />
            </div>
            <div className=" md:w-3/4 ">
              <div className="flex items-center justify-between w-full pt-1">
                <p className=" font-black leading-none text-3xl text-gray-800">
                  {product.brand}
                </p>
                <p className="py-1 font-bold px-1 border border-gray-200  focus:outline-none">
                  {product.price}$
                </p>
              </div>

              <p className="text-xl leading-3 text-black-600 pt-8">
                {product.totalrating} total reating
              </p>
              {/* <br /> */}

              <p className="text-lg leading-3 text-gray-600 py-4">
                {product.description}
                {/* {product.title} */}
              </p>
              <p className=" text-lg leading-3 text-gray-600">{product.tags}</p>
              <div className="flex items-center justify-between pt-5 pr-6"></div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default FilterCard
