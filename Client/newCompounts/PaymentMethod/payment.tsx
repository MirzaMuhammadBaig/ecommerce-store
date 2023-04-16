import React from "react"

const Payment = () => {
  return (
    <>
      <div className="flex mt-20 gap-16 mb-10 justify-center">
        <div className="">
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className="ml-3">
            Cash On delivery
          </label>
        </div>
      
      </div>
      <li className="flex justify-center mt-5 mb-5">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Shopping card
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delivery
        </button>
      </li>
    </>
  )
}

export default Payment
