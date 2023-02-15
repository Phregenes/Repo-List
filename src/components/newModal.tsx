import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineStar,
  AiOutlineFork,
  AiOutlineBook,
  AiFillStar,
} from "react-icons/ai";

export default function Modal({ data }) {
  const [open, setOpen] = useState(false);

  function modalBoolean() {
    setOpen(!open);
  }

  const cancelButtonRef = useRef(null);

  return (
    <button
      onClick={async () => await modalBoolean()}
      className="flex justify-between p-2 mb-3 text-gray-100 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600 outline-none"
    >
      <div>{data.name}</div>
      <div className="flex inline-flex items-center">
        <AiFillStar className="w-3 h-4 mr-1" />
        <p className="mr-1">star</p>
        {data.stargazers_count}
      </div>
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
                    <div className="sm:flex sm:items-start justify-between">
                      <div className="flex m-2">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                          <AiFillGithub
                            className="h-6 w-6 text-gray-900"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900 mt-2"
                          >
                            {data.name}
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Description:
                              {data.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-nowrap whitespace-nowrap m-2">
                        <div className="flex items-center">
                          <AiOutlineStar /> {data.stargazers_count} Stars
                        </div>
                        <div className="flex items-center">
                          <AiOutlineEye />
                          {data.watchers_count} Watching
                        </div>
                        <div className="flex items-center">
                          <AiOutlineFork />
                          {data.forks_count} Forks
                        </div>
                        <div className="flex items-center">
                          <AiOutlineBook />
                          {data.language} Language
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex outline-none w-full justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                    <a
                      href={data.svn_url}
                      className="mt-3 outline-none inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Access repo
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </button>
  );
}
