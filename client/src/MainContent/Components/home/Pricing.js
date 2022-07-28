import { useState, useEffect } from "react";
import Tooltip from "react-power-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";
import RegModal from "../../../Modals/RegModal";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [showToolTip, setShowToolTip] = useState(false);
  const [showToolTip2, setShowToolTip2] = useState(false);
  const [showReg, setShowReg] = useState(false);

  return (
    <>
      {showReg ? (
        <RegModal
          close={() => {
            setShowReg(false);
          }}
        />
      ) : (
        ""
      )}

      <section
        class="
   bg-gradient-to-br from-blue-50 to-indigo-50
   pt-[85px]
   lg:pt-[66px]
   pb-10
   lg:pb-[50px]
   relative
   z-20
   overflow-hidden
   "
      >
        <div class="lg:container block mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="text-center mx-auto lg:bottom-0 bottom-4 relative mb-[60px] lg:mb-20 max-w-[510px]">
                <span class="font-semibold relative bottom-2 text-lg text-primary mb-2 block">
                  Pricing Table
                </span>
                <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  relative
                  bottom-2
                  "
                >
                  Our Pricing Plan
                </h2>
                <p class="text-base px-3 lg:top-4 lg:-mb-2 block top-3 relative text-body-color">
                  Have a look at our subscription packages and choose what works
                  the best for you! Join our user-base and advance your
                  e-commerce sales to the next level.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center lg:w-[98%] md:w-[97%] sm:w-[80%] w-[90%] mx-auto relative ">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="400"
              class="w-full lg:w-1/3 md:w-1/2 md:px-4 px-1"
            >
              <div
                class="
               bg-white
               rounded-xl
               shadow-lg
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
              >
                <span class="text-primary font-semibold text-lg block mb-4">
                  Personal
                </span>
                <h2 class="font-bold text-dark mb-5  text-[42px]">
                  Free Trial
                  <span class="text-base m-1 text-body-color font-medium">
                    / 48 <span class="lg:inline hidden">hrs</span>{" "}
                    <span class="lg:hidden inline">hrs</span>
                  </span>
                </h2>
                <p
                  class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  lg:block hidden

                  "
                >
                  Test out our services.{" "}
                </p>
                <p
                  class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  block lg:hidden
                  "
                >
                  For testing services.
                </p>
                <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                    48 Hours
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Limited Features & Services
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Limited Access
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Listings will not be synchronized{" "}
                    <span class="lg:inline hidden">to Amazon.</span>
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Test out Optimization Algorithms
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    No Live Queries
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Customer Support
                  </p>
                </div>
                <a
                  onClick={() => {
                    setShowReg(true);
                  }}
                  class="
                  cursor-pointer
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  -mt-[3px]
                  -mb-[1px]
                  hover:bg-blue-700 hover:text-white hover:shadow-md
                  transition
                  "
                >
                  Choose Personal
                </a>
                <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
              class="w-full lg:w-1/3 md:w-1/2 md:px-4 px-1"
            >
              <div
                class="
               bg-white
               shadow-lg

               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
              >
                <span class="text-primary font-semibold text-lg block mb-4">
                  Business
                </span>
                <h2 class="font-bold text-dark mb-5 text-[42px]">
                  $19.99
                  <span class="text-base text-body-color font-medium">
                    / month
                  </span>
                </h2>
                <p
                  class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  lg:block hidden
                  border-b border-[#F2F2F2]
                  "
                >
                  Paid Features & Unlimited Access.
                </p>

                <p
                  class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  block lg:hidden
                  "
                >
                  For use in a business setting.
                </p>
                <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                    Unlimited Access
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    All Features & Services
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Real-time Insights{" "}
                    <span class="inline">on Marketplace trends.</span>
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Synchronized with Your{" "}
                    <span class="hidden lg:inline">Marketplace</span> Listing
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Unrestricted Usage of Analytics.
                  </p>
                  <p class="text-base lg:hidden block text-body-color leading-loose mb-1">
                    Live Queries
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Customer Support
                  </p>
                </div>

                <a
                  onMouseOver={() => {
                    setShowToolTip2(true);
                  }}
                  onMouseLeave={() => setShowToolTip2(false)}
                  class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-gray-700
                  bg-primary
                  border border-primary
                  rounded-md
                  text-center
                  p-4
                  transition
                  bg-gray-200
                  "
                >
                  Choose Business
                </a>

                <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div class="block relative right-[55%] bottom-16">
                <Tooltip
                  show={showToolTip2}
                  position="bottom"
                  fontSize="16px"
                  padding="3px 5px"
                >
                  <span class="font-semibold text-center font-sans bottom-0.5">
                    Paid version will be available soon...
                  </span>
                </Tooltip>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-once="true"
              class="w-full lg:w-1/3 md:w-1/2 md:px-4 px-1"
            >
              <div
                class="
               bg-white
               shadow-lg

               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
              >
                <span class="text-primary font-semibold text-lg block mb-4">
                  Business
                </span>
                <h2 class="font-bold text-dark mb-5 text-[42px]">
                  $47.99
                  <span class="text-base text-body-color font-medium">
                    / 3 months
                  </span>
                </h2>
                <p
                  class="
                  text-base text-body-color
                  pb-8
                  mb-6
                  lg:block hidden
                  border-b border-[#F2F2F2]
                  "
                >
                  <span class="font-bold text-indigo-600 mr-[2px] text-2xl">
                    20% Discount.
                  </span>
                </p>

                <p
                  class="
                  text-xl
                  pb-8
                  mb-8
                  font-bold text-indigo-600
                  border-b border-[#F2F2F2]
                  block lg:hidden
                  "
                >
                  20% Discount.
                </p>
                <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                    Unlimited Access
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    All Features & Services
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Real-time Insights on Marketplace trends.
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Synchronized with Your{" "}
                    <span class="hidden lg:inline">Marketplace</span> Listing
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Unrestricted Usage of Analytics.
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Customer Support
                  </p>
                </div>

                <a
                  onMouseOver={() => {
                    setShowToolTip(true);
                  }}
                  onMouseLeave={() => setShowToolTip(false)}
                  class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-gray-700
                  bg-primary
                  border border-primary
                  rounded-md
                  text-center
                  p-4
                  transition
                  bg-gray-200
                  "
                >
                  Choose Business
                </a>

                <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3056D3" stop-opacity="0.09" />
                          <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div class="block relative right-[55%] bottom-16">
                <Tooltip
                  show={showToolTip}
                  position="bottom"
                  fontSize="16px"
                  padding="3px 5px"
                >
                  <span class="font-semibold text-center font-sans bottom-0.5">
                    Paid version will be available soon...
                  </span>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
