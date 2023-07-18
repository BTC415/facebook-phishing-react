import React, { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white w-screen fixed left-0 top-0">
      <div className="container mx-auto max-w-[1164px] flex justify-between">
        <div className="flex justify-between flex-wrap p-6 pb-0">
          <div className="flex items-center flex-shrink-0 text-white mr-[50px] pb-[25px]">
            <img src="facebook.png" className="w-100 h-10 mr-2" alt="Logo" />
            <h2 className="text-base font-bold leading-6 text-black">
              Facebook
            </h2>
          </div>

          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-sm lg:flex-grow lg:space-x-[50px] space-x-0">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-sm text-[#4338ca] pb-0 lg:pb-[25px] lg:border-b lg:border-[#4338ca] "
              >
                Detection center
              </a>
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-sm hover:text-[#4338ca]"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-sm hover:text-[#4338ca]"
              >
                Developers
              </a>
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-sm hover:text-[#4338ca]"
              >
                Help
              </a>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className="relative hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#f0f2f5] text-[15px] rounded-full w-[284px] h-[36px] mt-6 relative px-12 border-none"
          />
          <img
            src="human.png"
            className="w-[32px] h-[32px] mt-6 ml-2"
            alt="noImg"
          />
          <img
            src="download.png"
            alt="noImg"
            className="absolute left-[15px] bottom-[35px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Nav;
