import React, { FC, SetStateAction } from "react";
import { Transition } from "@headlessui/react";
import { Button } from "../BaseComponents/Button/Button";
import { Toggle } from "../Toggle/Toggle";
import { useAllergyContext } from "../../contexts/AllergyContext";

interface Props {
  isSlideOverOpen: boolean;
  setIsSlideOverOpen: (value: SetStateAction<boolean>) => void;
}

const SlideOver: FC<Props> = ({ isSlideOverOpen, setIsSlideOverOpen }) => {
  const { dispatch, allergies, isAllergyActive } = useAllergyContext();

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
                    <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll ">
                      <div className="flex items-start justify-between px-4 sm:px-6">
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {allergies?.allergies && (
                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                          {allergies?.allergies.map((allergy) => (
                            <div key={allergy.id}>
                              <Toggle
                                allergy={allergy}
                                isEnabled={isAllergyActive(allergy)}
                                dispatch={dispatch}
                              />
                              <span>{allergy.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                      <Button
                        type="button"
                        colour="PRIMARY"
                        size="M"
                        onClick={() => setIsSlideOverOpen(false)}
                      >
                        save
                      </Button>
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
