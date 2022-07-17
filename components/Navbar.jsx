import React from "react";
import { FaBlogger } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai"
import Link from "next/link";

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      {/* <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <FaBlogger size={50} />

          
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 hover:bg-slate-800 hover:rounded hover:p-5 hover:text-white">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 hover:bg-slate-800 hover:rounded hover:p-5 hover:text-white">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 hover:bg-slate-800 hover:rounded hover:p-5 hover:text-white">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 hover:bg-slate-800 hover:rounded hover:p-5 hover:text-white">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 hover:bg-slate-800 hover:rounded hover:p-5 hover:text-white">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/*<Outlet />*/}

      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href='/'>
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                <FaBlogger size={50} />
              </a>
            </Link>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenu size={25} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href='/blogs'>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    Blogs
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='contacts'>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    Contacts
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='write'>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    Write a Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
