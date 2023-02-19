import { useState, useRef, useEffect, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.png";

import axios from "axios";
import { ChevronDownIcon } from "@heroicons/react/solid";

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";

import AOS from "aos";
import "aos/dist/aos.css";

import LogModal from "../Modals/LogModal";
import RegModal from "../Modals/RegModal";
import ExitModal from "../Modals/ExitModal";

const NavBar = (props) => {
  const history = useNavigate();
  const location = useLocation();

  const [logModal, setLogModal] = useState();
  const [regModal, setRegModal] = useState();
  const [exitModalShow, setExitModalShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showDropDown, setShowDropDown] = useState(false);

  const myRef = useRef();
  const dropDownRef = useRef();

  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!myRef.current || myRef.current.contains(event.target)) {
          return;
        }
        setShowDropDown(false);
        setIsMenuOpen(false);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because the passed-in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [myRef, () => props.close()]
  );

  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (
          !dropDownRef.current ||
          dropDownRef.current.contains(event.target)
        ) {
          return;
        }
        setShowDropDown(false);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because the passed-in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [dropDownRef, () => props.close()]
  );

  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  const logOutHandle = () => {
    setExitModalShow(true);
  };

  return (
    <>
      {logModal ? (
        <LogModal
          close={() => {
            setLogModal(false);
          }}
        />
      ) : (
        ""
      )}
      {regModal ? (
        <RegModal
          close={() => {
            setRegModal(false);
          }}
        />
      ) : (
        ""
      )}
      {exitModalShow ? (
        <ExitModal
          close={() => {
            setExitModalShow(false);
          }}
        />
      ) : (
        ""
      )}
      <nav class="bg-white border-gray-200 px-2 z-[50] block relative sm:px-4 py-3.5 shadow-md rounded ">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a
            onClick={() => {
              history("/");
            }}
            class="flex sm:ml-2 ml-3 items-center"
          >
            <img
              src={logo}
              class="mr-1 md:h-9 h-9 -top-[1px] relative md:ml-0 sm:ml-3 ml-2"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl relative lg:bottom-0 bottom-[1.5px] font-semibold whitespace-nowrap ">
              Spire Insights
            </span>
          </a>
          {/* <button
  
  data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 mr-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu" aria-expanded="false">
    <span class="sr-only">Open main menu</span>
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  </button> */}
          <div class="block w-auto lg:mr-3" id="mobile-menu">
            {sessionStorage.getItem("token") === null ? (
              <ul class="lg:flex hidden flex-col mt-6 relative md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium">
                <div class="relative mx-auto w-fit bottom-[5px]">
                  <a
                    onClick={() => {
                      history("/home");
                    }}
                    className={`uppercase cursor-pointer items-center justify-center ${
                      location.pathname === "/home" ||
                      location.pathname === "/home/"
                        ? "text-blue-700"
                        : "text-gray-700"
                    } px-3 top-[5px] active:shadow-sm hover:font-semibold relative mr-3.5 py-[9px]  pb-2.5 border border-transparent rounded-md text-md tracking-wide font-semibold hover:text-blue-700  bg-gradient-to-r  `}
                  >
                    Home
                  </a>

                  <a
                    onClick={() => {
                      history("/team");
                    }}
                    className={`uppercase cursor-pointer items-center justify-center ${
                      location.pathname === "/team" ||
                      location.pathname === "/team/"
                        ? "text-blue-700"
                        : "text-gray-700"
                    } px-3 top-[5px] active:shadow-sm hover:font-semibold relative mr-4 py-[9px]  pb-2.5 border border-transparent rounded-md text-md tracking-wide font-semibold hover:text-blue-700   bg-gradient-to-r  `}
                  >
                    Team
                  </a>

                  <a
                    onClick={() => {
                      setLogModal(true);
                    }}
                    className="uppercase cursor-pointer items-center justify-center top-[5px] hover:font-semibold relative mr-4  p-2 border border-transparent rounded-md hover:shadow-lg text-md tracking-wide font-semibold hover:text-white text-gray-700 bg-gradient-to-r  hover:from-blue-600 hover:to-blue-600 active:bg-blue-500"
                  >
                    Log in
                  </a>

                  <a
                    onClick={() => {
                      setRegModal(true);
                    }}
                    className="uppercase cursor-pointer items-center justify-center  top-[5px] hover:font-semibold relative p-2 border border-transparent rounded-md hover:shadow-lg text-md tracking-wide font-semibold hover:text-white text-gray-700 bg-gradient-to-r  hover:from-blue-600 hover:to-blue-600 active:bg-blue-500"
                  >
                    Sign up
                  </a>
                </div>
              </ul>
            ) : (
              <ul class="flex-col mt-6 top-[5px] md:mr-2 md:flex hidden relative md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    class={`block py-2 cursor-pointer pr-4 pl-3  bg-blue-700 rounded md:bg-transparent ${
                      location.pathname === "/profile" ||
                      location.pathname === "/profile/"
                        ? "text-blue-700"
                        : "text-gray-700"
                    } md:p-0 text-sm uppercase `}
                    aria-current="page"
                    onClick={() => {
                      history("/profile");
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    class={`block py-2 cursor-pointer pr-4 pl-3  bg-blue-700 rounded md:bg-transparent ${
                      location.pathname === "/ecommerceservices" ||
                      location.pathname === "/ecommerceservices/" ||
                      location.pathname ===
                        "/ecommerceservices/servicedetails" ||
                      location.pathname === "/ecommerceservices/servicedetails/"
                        ? "text-blue-700"
                        : "text-gray-700"
                    } md:p-0 text-sm uppercase `}
                    aria-current="page"
                    onClick={() => {
                      history("/ecommerceservices");
                    }}
                  >
                    Services
                  </a>
                </li>
                <li
                  ref={dropDownRef}
                  onMouseOver={() => {
                    setShowDropDown(true);
                  }}
                  class=" mb-2 -mr-2 block relative"
                >
                  <a
                    type="button"
                    class={`block py-2 pr-4 cursor-pointer  pl-3 ${
                      location.pathname === "/setupListings" ||
                      location.pathname === "/setupListings/" ||
                      location.pathname === "/manageListings" ||
                      location.pathname === "/manageListings/" ||
                      location.pathname === "/optimiseListings" ||
                      location.pathname === "/optimiseListings/" ||
                      location.pathname === "/liveDetails" ||
                      location.pathname === "/liveDetails/"
                        ? "text-blue-700"
                        : "text-gray-700"
                    }   md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-sm uppercase md:p-0`}
                    aria-expanded="false"
                  >
                    <span>TOOLS</span>

                    <svg
                      class="text-gray-400 ml-2 relative bottom-[2px] h-5 w-5 inline group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>

                  <div
                    onMouseOver={() => {
                      setShowDropDown(true);
                    }}
                    ref={dropDownRef}
                    class={`absolute ${
                      showDropDown ? "visible" : "hidden"
                    } z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2`}
                  >
                    <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {/* <a
                          href="#"
                          class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6 relative top-[1px] flex-shrink-0 text-blue-700"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <div
                            onClick={() => {
                              history("/setupListings");
                              setShowDropDown(false);
                            }}
                            class="ml-4"
                          >
                            <p class="text-base font-medium text-gray-900">
                              SET-UP
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              Create product listings on Amazon
                            </p>
                          </div>
                        </a>

                        <a
                          href="#"
                          class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            class="h-6 w-6 relative top-[1px] flex-shrink-0 text-blue-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                            />
                          </svg>

                          <div
                            onClick={() => {
                              history("/manageListings");
                              setShowDropDown(false);
                            }}
                            class="ml-4"
                          >
                            <p class="text-base font-medium text-gray-900">
                              MANAGE
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              Manage your Amazon product listings: view sales
                              data, revenue projections, fulfillment issues etc.
                            </p>
                          </div>
                        </a> */}

                        <a
                          href="#"
                          class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            class="h-6 w-6 flex-shrink-0 text-blue-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                          </svg>

                          <div
                            onClick={() => {
                              history("/optimiseListings");
                              setShowDropDown(false);
                            }}
                            class="ml-4"
                          >
                            <p class="text-base font-medium text-gray-900">
                              OPTIMIZE
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              Research high-performance keywords, competitor
                              analysis, search metrics - Amazon Listing
                              Optimization.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#"
                          class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            class="h-6 w-6 flex-shrink-0 text-blue-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                            />
                          </svg>

                          <div
                            onClick={() => {
                              history("/liveDetails");
                              setShowDropDown(false);
                            }}
                            class="ml-4"
                          >
                            <p class="text-base font-medium text-gray-900">
                              LIVE TRENDS
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              View live product trends (across categories) on
                              Amazon. Best Sellers. New Releases. Most Wished
                              For etc.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    class={`block  cursor-pointer  -mt-2 -ml-3  border-b border-gray-100  md:hover:bg-transparent md:border-0 hover:text-white text-sm uppercase p-2 border border-transparent rounded-md hover:shadow-lg tracking-wide font-semibold  text-gray-700 bg-gradient-to-r  hover:from-blue-600 hover:to-blue-600 active:bg-blue-500`}
                    onClick={() => {
                      logOutHandle();
                    }}
                  >
                    LOG OUT
                  </a>
                </li>
              </ul>
            )}

            {sessionStorage.getItem("token") === null ? (
              <div class="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  class="p-2 py-1.5 sm:-mr-10 -mr-16 absolute right-24  block bottom-3  transition duration-200 rounded focus:outline-none focus:shadow-outline hover:from-blue-200 hover:to-indigo-300 hover:bg-gradient-to-r focus:bg-blue-400"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg
                    class={`${
                      sessionStorage.getItem("token") === null ? "w-7" : "w-7"
                    } text-gray-600 sm:top-2`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div
                    data-aos="zoom-down"
                    data-aos-once="true"
                    class="absolute  top-0 z-50 w-screen left-0"
                  >
                    <div
                      ref={myRef}
                      class="p-5 bg-white border rounded shadow-xl z-50"
                    >
                      <div class="flex items-center justify-between mb-4">
                        <div>
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center mb-5"
                          >
                            <img
                              src={logo}
                              className="w-16 md:w-20 absolute md:-mt-12 -mt-10 top-16 sm:visible invisible "
                            />
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            class="p-2 -mr-2 top-2 right-[2px]  relative transition before:rotate-90 hover:rotate-90 duration-300 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline -mt-10 mb-3"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg
                              class="w-6 text-gray-600 bottom-1"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <nav class="">
                        <ul class="space-y-4  relative bottom-8 mt-3  sm:bottom-8">
                          <li class="text-center mb-2 block relative">
                            <a
                              onClick={() => {
                                setIsMenuOpen(false);
                                history("/home");
                              }}
                              aria-label="Our product"
                              title="Our product"
                              class="hover:cursor-pointer mb-2 font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-indigo-500"
                            >
                              Home
                            </a>
                          </li>
                          <li class="text-center">
                            <a
                              onClick={() => {
                                setIsMenuOpen(false);
                                history("/team");
                              }}
                              aria-label="Our product"
                              title="Our product"
                              class="hover:cursor-pointer font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-indigo-500"
                            >
                              Team
                            </a>
                          </li>
                        </ul>
                        <div className="align-middle justify-items-center justify-center mt-7 mb-3.5 bottom-[2px] mx-auto relative">
                          <div class="relative mx-auto w-fit bottom-[5px]">
                            <a
                              href="#"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setLogModal(true);
                              }}
                              className="uppercase items-center justify-center whitespace-nowrap px-3 mr-3 py-2 text-md tracking-wide font-semibold text-gray-700 hover:text-gray-900 "
                            >
                              Sign in
                            </a>

                            <a
                              onClick={() => {
                                setIsMenuOpen(false);
                                setRegModal(true);
                              }}
                              href="#"
                              className="uppercase items-center justify-center px-3 py-[9px] pb-2.5 border border-transparent rounded-md shadow-lg text-md tracking-wide font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:from-indigo-400 hover:to-indigo-600 active:bg-blue-500"
                            >
                              Sign up
                            </a>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div class="md:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  class="p-2 py-1.5 sm:-mr-10 -mr-16 absolute right-24  block bottom-3  transition duration-200 rounded focus:outline-none focus:shadow-outline hover:from-blue-200 hover:to-indigo-300 hover:bg-gradient-to-r focus:bg-blue-400"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg
                    class={`${
                      sessionStorage.getItem("token") === null ? "w-7" : "w-7"
                    } text-gray-600 sm:top-2`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div
                    data-aos="zoom-in-down"
                    data-aos-once="true"
                    class="absolute  top-0 z-50 w-screen left-0"
                  >
                    <div
                      ref={myRef}
                      class="p-5 bg-white border rounded shadow-xl z-50"
                    >
                      <div class="flex items-center justify-between mb-4">
                        <div>
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center mb-5"
                          >
                            <img
                              src={logo}
                              className="w-16 md:w-20 absolute md:-mt-12 -mt-10 top-16 sm:visible invisible "
                            />
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            class="p-2 -mr-2 top-2 right-[2px]  relative transition before:rotate-90 hover:rotate-90 duration-300 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline -mt-10 mb-3"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg
                              class="w-6 text-gray-600 bottom-1"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <nav class="">
                        <ul class="space-y-4  relative bottom-8 mt-3  sm:bottom-8">
                          <li class="text-center mb-2 block relative">
                            <a
                              onClick={() => {
                                setIsMenuOpen(false);
                                history("/profile");
                              }}
                              aria-label="Our product"
                              title="Our product"
                              class={`${
                                location.pathname === "/profile" ||
                                location.pathname === "/profile/"
                                  ? "text-blue-700"
                                  : "text-gray-700"
                              } hover:cursor-pointer mb-2 font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-blue-700`}
                            >
                              Profile
                            </a>
                          </li>
                          <li class="text-center mb-2 block relative">
                            <a
                              onClick={() => {
                                setIsMenuOpen(false);
                                history("/ecommerceservices");
                              }}
                              aria-label="Our product"
                              title="Our product"
                              class={`${
                                location.pathname === "/ecommerceservices" ||
                                location.pathname === "/ecommerceservices/" ||
                                location.pathname ===
                                  "/ecommerceservices/servicedetails" ||
                                location.pathname ===
                                  "/ecommerceservices/servicedetails/"
                                  ? "text-blue-700"
                                  : "text-gray-700"
                              } hover:cursor-pointer mb-2 font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-blue-700`}
                            >
                              Services
                            </a>
                          </li>

                          <li class=" align-middle items-center  text-center mb-2 -mr-2 block relative">
                            <a
                              type="button"
                              class={` ${
                                location.pathname === "/setupListings" ||
                                location.pathname === "/setupListings/" ||
                                location.pathname === "/manageListings" ||
                                location.pathname === "/manageListings/" ||
                                location.pathname === "/optimiseListings" ||
                                location.pathname === "/optimiseListings/" ||
                                location.pathname === "/liveDetails" ||
                                location.pathname === "/liveDetails/"
                                  ? "text-blue-700"
                                  : "text-gray-700"
                              } hover:cursor-pointer mb-2 font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-blue-700`}
                              aria-expanded="false"
                            >
                              <span
                                onMouseOver={() => {
                                  setShowDropDown(true);
                                }}
                                ref={dropDownRef}
                              >
                                Tools
                              </span>

                              <svg
                                onMouseOver={() => {
                                  setShowDropDown(true);
                                }}
                                ref={dropDownRef}
                                class="text-gray-400 ml-2 relative bottom-[2px] h-5 w-5 inline group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </a>

                            <div
                              onMouseOver={() => {
                                setShowDropDown(true);
                              }}
                              ref={dropDownRef}
                              class={`absolute ${
                                showDropDown ? "visible" : "hidden"
                              } z-10 ml-6 mt-3 text-left  w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2`}
                            >
                              <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {/* <a
                                    href="#"
                                    class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="h-6 w-6 relative top-[1px] flex-shrink-0 text-blue-700"
                                      aria-hidden="true"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>

                                    <div
                                      onClick={() => {
                                        history("/setupListings");
                                        setShowDropDown(false);
                                      }}
                                      class="ml-4"
                                    >
                                      <p class="text-base font-medium text-gray-900">
                                        Set-Up
                                      </p>
                                      <p class="mt-1 text-sm text-gray-500">
                                        Create product listings on Amazon
                                      </p>
                                    </div>
                                  </a>

                                  <a
                                    href="#"
                                    class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <svg
                                      class="h-6 w-6 relative top-[1px] flex-shrink-0 text-blue-700"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                                      />
                                    </svg>

                                    <div
                                      onClick={() => {
                                        history("/manageListings");
                                        setShowDropDown(false);
                                      }}
                                      class="ml-4"
                                    >
                                      <p class="text-base font-medium text-gray-900">
                                        Manage
                                      </p>
                                      <p class="mt-1 text-sm text-gray-500">
                                        Manage your Amazon product listings:
                                        view sales data, revenue projections,
                                        fulfillment issues etc.
                                      </p>
                                    </div>
                                  </a> */}

                                  <a
                                    href="#"
                                    class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <svg
                                      class="h-6 w-6 flex-shrink-0 text-blue-700"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                      />
                                    </svg>

                                    <div
                                      onClick={() => {
                                        history("/optimiseListings");
                                        setShowDropDown(false);
                                      }}
                                      class="ml-4"
                                    >
                                      <p class="text-base font-medium text-gray-900">
                                        Optimize
                                      </p>
                                      <p class="mt-1 text-sm text-gray-500">
                                        Research high-performance keywords,
                                        competitor analysis, search metrics -
                                        Amazon Listing Optimization.
                                      </p>
                                    </div>
                                  </a>

                                  <a
                                    href="#"
                                    class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <svg
                                      class="h-6 w-6 flex-shrink-0 text-blue-700"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                      />
                                    </svg>

                                    <div
                                      onClick={() => {
                                        history("/liveDetails");
                                        setShowDropDown(false);
                                      }}
                                      class="ml-4"
                                    >
                                      <p class="text-base font-medium text-gray-900">
                                        Live Trends
                                      </p>
                                      <p class="mt-1 text-sm text-gray-500">
                                        View live product trends (across
                                        categories) on Amazon. Best Sellers. New
                                        Releases. Most Wished For etc.
                                      </p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="align-middle justify-items-center justify-center mt-1 mb-4 bottom-[2px] mx-auto relative">
                          <div class="relative right-[5px] block mx-auto w-fit">
                            <a
                              onClick={() => {
                                setIsMenuOpen(false);
                                sessionStorage.removeItem("token");
                                localStorage.removeItem("tempToken");
                                history("/home");
                              }}
                              className="whitespace-nowrap bottom-1 relative uppercase items-center justify-center px-3 py-2 border border-transparent rounded-sm shadow-sm text-sm  font-semibold hover:cursor-pointer  text-white bg-blue-600 hover:bg-blue-700"
                            >
                              Log Out
                            </a>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
