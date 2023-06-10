"use client";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { isSignedIn } = useUser();
  return (
    <nav className=" border-gray-200 bg-gray-900 py-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center justify-center">
          <img
            src="https://www.svgrepo.com/show/484308/white-bear.svg"
            className="h-10 mr-3 pt-2"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            DataCollector
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900 border-gray-700">
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
              <Link
                href="/user"
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 text-white"
              >
                Submit Data
              </Link>
            </li>
            {isSignedIn ? (
              <>
                <li>
                  <Link
                    href="/my-submissions"
                    className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 text-white"
                  >
                    My Submissions
                  </Link>
                </li>
                <li>
                  <UserButton afterSignOutUrl="/" />
                </li>
              </>
            ) : (
              <div className="text-white">
                <SignInButton />
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
