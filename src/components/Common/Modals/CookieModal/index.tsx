import { Dialog, Transition } from '@headlessui/react';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';

const CookieModal = () => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(true);
  const handleSaveCookie = () => {
    setCookie('ac', true, { maxAge: 3600 * 24 * 7 });
    setIsOpen(false);
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => null}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white sm:w-full md:min-w-[750px] max-w-md transform overflow-hidden rounded-2xl sm:px-[2rem] md:px-[5.5rem] py-[3.7rem] text-left align-middle shadow-xl transition-all]">
                <div className="mt-2 text-center">
                  <p className="mb-8 text-h3 md:leading-[26px] font-semibold text-white">
                    This website uses cookies. By continuing to use our website, you are agreeing to the use of cookies.
                  </p>
                </div>
                <div className="mt-8 sm:text-center md:text-right">
                  <Link href={'/about-us/privacy-policy'}>
                    <a className="text-center outline-0 text-base text-blue font-semibold">Find out more</a>
                  </Link>
                  <button
                    type="button"
                    className="md:ml-8 sm:mt-8 md:mt-0 cursor-pointer outline-0 cta text-black border-2 border-black hover:border-white hover:bg-black hover:text-white transition ease-in duration-200 text-[16px] lg:mt-0 font-medium"
                    onClick={() => handleSaveCookie()}
                  >
                    Accept and Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default CookieModal;
