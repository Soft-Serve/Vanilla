import React, { FC, SetStateAction } from "react";
import { Transition } from "@headlessui/react";

interface Props {
  isSlideOverOpen: boolean;
  setIsSlideOverOpen: (value: SetStateAction<boolean>) => void;
}

const SlideOver: FC<Props> = ({ isSlideOverOpen, setIsSlideOverOpen }) => {
  if (isSlideOverOpen) {
    return (
      <section
        className="fixed inset-0 overflow-hidden"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute inset-0 overflow-hidden">
          {isSlideOverOpen && (
            <div className="absolute inset-0" aria-hidden="true"></div>
          )}
          {isSlideOverOpen && (
            <Transition
              show={isSlideOverOpen}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                <div className="w-screen max-w-md">
                  <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                    <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <h2
                            className="text-lg font-medium text-gray-900"
                            id="slide-over-title"
                          >
                            Panel title
                          </h2>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              onClick={() => setIsSlideOverOpen(false)}
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              <span className="sr-only">Close panel</span>
                              <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 relative flex-1 px-4 sm:px-6">
                        <div
                          className="h-full border-2 border-dashed border-gray-200"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                      <button
                        onClick={() => setIsSlideOverOpen(false)}
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsSlideOverOpen(false)}
                        className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          )}
        </div>
      </section>
    );
  }
  return null;
};

export { SlideOver };
