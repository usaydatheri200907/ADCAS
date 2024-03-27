import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  LinkIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  patientID,
  patientName,
  patientAge,
  patientGender,
  patientDate,
}) {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <div className="lg:flex lg:items-left lg:justify-left top-16 left-64 ml-10 mt-10 space-y-5">
      <div className="min-w-1 flex-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Patient {patientID}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <strong>{patientName}</strong>{" "}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <strong>Age/Gender:</strong>{patientAge}/{patientGender}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Dated: {patientDate}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0 space-x-3">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-2"
          >
            <PencilIcon
              className=" mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Update
          </button>
        </span>

        

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
          >
            <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Review
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mt-2"
          >
            <TrashIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Delete
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon
              className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
    </div>
  );
}
