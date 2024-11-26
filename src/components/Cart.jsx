import React from "react";
import Nav from "./navs/Nav";
import Footer from "./navs/Footer";

import applewatch from "./assets/applewatch.png";
import imac from "./assets/imac.png";
import iphone12 from "./assets/iphone12.png";

function Cart() {
  return (
    <>
      <Nav />

      <div class="relative pl-10 pr-10 overflow-x-auto shadow-md sm:rounded-lg mt-60 lg:mt-32">
        <table class="w-full text-sm text-left rtl:text-right text-green-500 ">
          <thead class="text-xs text-green-700 uppercase bg-[#9CFF2C]">
            <tr>
              <th scope="col" class="px-16 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">
                Product
              </th>
              <th scope="col" class="px-6 py-3">
                Qty
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#9CFF2C] border border-white  mb-10 text-black border-b  hover:bg-[#4df170] ">
              <td class="p-4 ">
                <img
                  src={applewatch}
                  class="w-16 md:w-32 max-w-full max-h-full"
                />
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 ">
                Apple Watch
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <button
                    class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400  dark:focus:ring-[#2ac127]"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-green-100 "
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>

              <td class="px-6 py-4 font-semibold text-gray-900 ">
                $599
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr class="bg-[#9CFF2C] border border-white  mb-10 text-black border-b  hover:bg-[#4df170] ">
              <td class="p-4">
                <img src={imac} class="w-16 md:w-32 max-w-full max-h-full" />
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 ">
                iMac 27"
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <button
                    class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <div class="ms-3">
                    <input
                      type="number"
                      id="first_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-green-100 "
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 ">
                $2499
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr class="bg-[#9CFF2C] border border-white  mb-10 text-black border-b  hover:bg-[#4df170] ">
              <td class="p-4">
                <img
                  src={iphone12}
                  class="w-16 md:w-32 max-w-full max-h-full"
                  alt="iPhone 12"
                />
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 ">
                IPhone 12
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <button
                    class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <div class="ms-3">
                    <input
                      type="number"
                      id="first_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-green-100 "
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 ">
                $999
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
