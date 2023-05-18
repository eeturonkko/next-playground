import React from "react";
import Link from "next/link";
function Header() {
  return (
    <nav className=" border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Flowbite
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/get-started"
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 text-white"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
