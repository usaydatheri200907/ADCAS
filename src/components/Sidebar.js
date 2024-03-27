import ManageAudios from "../pages/ManageAudios";
import {Link} from "react-router-dom";
function Sidebar({
  manage,
  linkUrl,
  manage2,
  linkurl2,
  manage3,
  linkurl3,
}) {
  return (
    <div className="bg-cyan h-screen fixed top-8 left-0 right-auto overflow-y-auto">
      <div className="bg-cyan-800">
        <div className="flex h-screen bg-cyan-100">
          <div className="bg-blue-50 lg:flex md:w-64 md:flex-col max-h-screen overflow-y-auto">
          <div className="flex-col pt-5 flex overflow-y-auto">
              <div className="h-full flex-col justify-between px-4 flex">
                <div className="space-y-4">
                  <div className="bg-top bg-cover space-y-1">
                    <Link
                      href="/dashboard"
                      className="font-medium text-sm items-left rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                    >
                      <span className="justify-left items-left flex">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </span>
                      <span>Dashboard</span>
                    </Link>
                    <p className=" p-4 px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase mt-5 mb-5 ">
                      Manage
                    </p>
                    <Link
                      to={linkUrl}  // Set the path to your ManageAudios component
                      className="font-medium text-sm items-left rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                    >
                      <span className="justify-center items-center fixed">
                        <svg
                          className="mr-4"
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        />
                        <path
                          d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17"
                          stroke="#4F4F4F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <svg
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="#4F4F4F"
                          stroke-width="2"
                        ></svg>
                      </span>
                      <span>{manage}</span>
                    </Link>
                    <Link
                      to={linkurl2}  // Set the path to your ManageAudios component
                      className="font-medium text-sm items-left rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                    >
                      <span className="justify-center items-center fixed">
                        <svg
                          className="mr-4"
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        />
                        <path
                          d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17"
                          stroke="#4F4F4F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <svg
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="#4F4F4F"
                          stroke-width="2"
                        ></svg>
                      </span>
                      <span>{manage2}</span>
                    </Link>
                    <Link
                      to={linkurl3}  // Set the path to your ManageAudios component
                      className="font-medium text-sm items-left rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                    >
                      <span className="justify-center items-center fixed">
                        <svg
                          className="mr-4"
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        />
                        <path
                          d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17"
                          stroke="#4F4F4F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <svg
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="#4F4F4F"
                          stroke-width="2"
                        ></svg>
                      </span>
                      <span>{manage3}</span>
                    </Link>
                  </div>
                  <div>
                    <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">
                      Patients
                    </p>
                    <div className="mt-4 bg-top bg-cover space-y-1">
                      <a
                        href="#"
                        className="font-medium text-sm rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                      >
                        <span className="relative items-left justify-center">
                          <span>Patients' Data</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">
                      Contact
                    </p>
                    <div className="mt-4 bg-top bg-cover space-y-1">
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center fixed">
                          <svg
                            className="flex-shrink-0 w-5 h-5 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewbox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0
                                      002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0
                                      012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </span>
                        <span>Assistant</span>
                        <span
                          className="px-2 py-0.5 items-center font-semibold text-xs ml-auto bg-gray-500 text-white
                              rounded-full uppercase border border-transparent inline-flex"
                        >
                          15
                        </span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-left rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center fixed">
                          <svg
                            className="mr-4"
                            width="24"
                            height="24"
                            viewbox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#4F4F4F"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <path
                            d="M7.88124 15.7559C8.37391 16.1826
                                      9.02309 16.4909 9.72265 16.6928C10.4301 16.897 11.2142 17 12 17C12.7858 17 13.5699
                                      16.897 14.2774 16.6928C14.9769 16.4909 15.6261 16.1826 16.1188 15.7559"
                            stroke="#4F4F4F"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <circle
                            cx="9"
                            cy="10"
                            r="1.25"
                            fill="#4F4F4F"
                            stroke="#4F4F4F"
                            stroke-width="0.5"
                            stroke-linecap="round"
                          />
                          <circle
                            cx="15"
                            cy="10"
                            r="1.25"
                            fill="#4F4F4F"
                            stroke="#4F4F4F"
                            stroke-width="0.5"
                            stroke-linecap="round"
                          />
                        </span>
                        <span>Doctors</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <span className="fixed flex-col">
                          <span className="text-left">Admin</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pb-4">
                  <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase mb-5">
                    Other
                  </p>
                  <div className="bg-top bg-cover space-y-1">
                    <a
                      href="#"
                      className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                          transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                    >
                      <span className="items-center justify-center fixed">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewbox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0
                                    002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756
                                    2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0
                                    00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0
                                    00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0
                                    00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0
                                    001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016
                                    0z"
                        />
                      </span>
                      <span>Settings</span>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                          transition-all duration-200 hover:bg-blue-200 group cursor-pointer"
                    >
                      <span className="items-center justify-center fixed">
                        <svg
                          className="mr-4"
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        />
                        <path
                          d="M8 18.9282C9.21615 19.6303 10.5957 20 12
                                    20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282
                                    16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385
                                    17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8
                                    5.0718"
                          stroke="#4F4F4F"
                          stroke-width="2"
                        />
                        <path
                          d="M2 12L1.21913 11.3753L0.719375
                                    12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11
                                    11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913
                                    6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2
                                    13H11V11H2V13Z"
                          fill="#4F4F4F"
                        />
                      </span>
                      <span>Logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
