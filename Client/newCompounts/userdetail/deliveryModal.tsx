import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function DeliveryModal({ open, setOpen }: any) {
  const cancelButtonRef = useRef(null);

  const [data, setData] = useState<any>();
  console.log(data, "data>>>");

  const handleChange = (e: any) => {
    setData({
      ...data,

      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (event: any) => {
    event.preventDefault();
    console.log(data, "data>>>>>>");
    try {
      const response = await axios({
        method: "post",
        url: "https://ecommerce-store-rho.vercel.app/api/user/cart/delivery/detail",
        data,
      });

      console.log("response find data", response);
    } catch (error) {
      console.log(error, "the error has been occure");
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Delivery detail
                      </Dialog.Title>
                      <div className="mt-10 sm:mt-0">
                        <div className="md:grid ">
                          <div className="md:col-span-1">
                            <div className="px-4 sm:px-0"></div>
                          </div>
                          <div className="mt-5 md:col-span-2 md:mt-0">
                            <form
                              onSubmit={submitForm}
                              className="justify-center flex"
                            >
                              <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                  <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        First name
                                      </label>
                                      <input
                                        type="text"
                                        name="firstname"
                                        placeholder="First name"
                                        value={data?.firstname || ""}
                                        onChange={handleChange}
                                        className="mt-1 block w-full bg-slate-200 py-2 rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Last name
                                      </label>
                                      <input
                                        type="text"
                                        name="lastname"
                                        value={data?.lastname || ""}
                                        onChange={handleChange}
                                        autoComplete="family-name"
                                        className="mt-1 block w-full bg-slate-200 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                      <label
                                        htmlFor="email-address"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Email address
                                      </label>
                                      <input
                                        type="text"
                                        name="email"
                                        value={data?.email || ""}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        className="mt-1 block w-full  bg-slate-200 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6">
                                      <label
                                        htmlFor="street-address"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Street address
                                      </label>
                                      <input
                                        type="text"
                                        name="address"
                                        value={data?.address || ""}
                                        onChange={handleChange}
                                        autoComplete="street-address"
                                        className="mt-1 block w-full bg-slate-200 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                      <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        City
                                      </label>
                                      <input
                                        type="text"
                                        name="city"
                                        value={data?.city || ""}
                                        onChange={handleChange}
                                        autoComplete="address-level2"
                                        className="mt-1 block w-full bg-slate-200 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                      <label
                                        htmlFor="region"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        State / Province
                                      </label>
                                      <input
                                        type="text"
                                        name="state"
                                        value={data?.state || ""}
                                        onChange={handleChange}
                                        autoComplete="address-level1"
                                        className="mt-1 block w-full bg-slate-200 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                      <label
                                        htmlFor="postal-code"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        ZIP / Postal code
                                      </label>
                                      <input
                                        type="number"
                                        name="pinCode"
                                        value={data?.pinCode || ""}
                                        onChange={handleChange}
                                        autoComplete="postal-code"
                                        className="mt-1 block w-full bg-slate-200 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                      <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Phone no
                                      </label>
                                      <input
                                        type="number"
                                        placeholder="Phone number"
                                        name="phoneNo"
                                        value={data?.phoneNo || ""}
                                        onChange={handleChange}
                                        className="mt-1 block w-full bg-slate-200 py-2 rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-50 px-1 flex justify-center gap-5 py-3 text-right sm:px-6">
                                  <button
                                    type="submit"
                                    className="inline-flex  justify-center rounded-2xl border border-transparent bg-indigo-600 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Conform
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
