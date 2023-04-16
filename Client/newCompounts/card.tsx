import axios from "axios";
import { useState, useEffect } from "react";

export default function card() {
  const [products1, setProducts] = useState([]);

  // console.log(products1, "product");
  useEffect(() => {
    axios
      .get("https://ecommerce-store-rho.vercel.app/api/product")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data, "data");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products1.map((product: any) => (
              <div key={product._id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-72">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {/* <a href=""> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.brand}
                      {/* </a> */}
                    </h3>
                    <p
                      className="mt-1 text-sm text-gray-500"
                      style={{ color: product.color }}
                    >
                      {product.color}
                      {/* Black */}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}$
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @media (max-width: 640px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style> */}
    </>
  );
}
