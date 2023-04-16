import React from 'react'

export const Congurlation = () => {
    return (
      <>
        <div className=" h-screen">
          <div className="flex items-center justify-center py-12">
            <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
              <div className="flex flex-col items-center py-16 ">
                <img
                  className="px-4 hidden md:block"
                  src="https://static.vecteezy.com/system/resources/thumbnails/006/800/655/small/order-complete-abstract-concept-illustration-e-commerce-website-online-store-digital-purchase-status-booking-complete-order-and-shipping-details-delivery-service-abstract-metaphor-vector.jpg"
                  alt=""
                />
                <img
                  className="md:hidden"
                  src="https://static.vecteezy.com/system/resources/thumbnails/006/800/655/small/order-complete-abstract-concept-illustration-e-commerce-website-online-store-digital-purchase-status-booking-complete-order-and-shipping-details-delivery-service-abstract-metaphor-vector.jpg"
                  alt=""
                />
                <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
                  Conguration Your oder has been process
                </h1>
                <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  harum minima at nemo, quae iure, inventore repellendus, hic
                  obcaecati quaerat architecto. Optio porro animi excepturi
                  voluptates error fuga autem ipsum.
                </p>
                <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
                  Back Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
