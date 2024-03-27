import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function IndexPage({ linkurl }) {
  return (
    <>
      <div className=" top-20">
        <div className="fixed p-8 bottom-10 overflow-hidden">
          <div className=" top-20 left-80 fixed mb-8">
            <h2 className=" text-2xl font-bold text-gray-800 dark:text-gray-600">
              Your Calendar
            </h2>
            <p className="text-gray-600 dark:text-gray-600">
              Manage Appointments
            </p>
            <p className="text-gray-600 dark:text-gray-600">
              Today's Date: 13/12/2023
            </p>
          </div>
          <div className="ml-10 mt-20  shadow-lg">
            <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t top-30">
              <div className="px-4 flex items-center justify-between rounded-md">
                <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">
                  DECEMBER 2023
                </h1>
                <div className="flex items-center text-gray-800 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler ml-3 icon-tabler-chevron-right"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between pt-12 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                            Mo
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                            Tu
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                            We
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                            Th
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                            Fr
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                            Sa
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                            Su
                          </p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-6">
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                      </td>
                      <td className="pt-6">
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                      </td>
                      <td className="pt-6">
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            1
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            2
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100">
                            3
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            4
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            5
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            6
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            7
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="w-full h-full">
                          <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                              8
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            9
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100">
                            10
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            11
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            12
                          </p>
                        </div>
                      </td>

                      <td>
                        <Link to={linkurl}>
                          <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                            <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-white bg-cyan-700 rounded-full">
                              13
                            </p>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            14
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            15
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            16
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100">
                            17
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            18
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            19
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            20
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            21
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            22
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            23
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100">
                            24
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            25
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            26
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            27
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            28
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            29
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">
                            30
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
