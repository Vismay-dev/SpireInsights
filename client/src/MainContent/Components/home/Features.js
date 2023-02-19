import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1600,
    });
  }, []);
  return (
    <section class="pt-[90px] lg:pt-[100px] px-16 lg:px-0 pb-[45px] lg:pb-[52px]">
      <div class="xl:container xl:px-0 sm:px-12 px-0 block mx-auto">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-14 lg:mb-20 max-w-[680px]">
              <span class="font-semibold text-blue-700 text-lg text-primary mb-2 block">
                Our Services
              </span>
              <h2
                class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                What We Offer
              </h2>
              <p class="sm:text-base text-sm lg:top-5 top-3 -mb-1.5 mt-1  relative text-body-color">
                Our features & services are oriented around the objective of
                helping businesses thrive and compete in online marketplaces
                without having to conduct their own market research or undergo
                technical training for setting up their online stores.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap bg-gradient-to-br from-blue-100 to-indigo-100 pt-7 sm:px-6 px-3  relative   lg:-mt-1 mt-2 lg:mb-0 mb-2 rounded-xl -mx-4">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            class="w-full  lg:w-1/3 px-2"
          >
            <div
              class="
               sm:p-10 py-7 px-5
               md:px-7
               xl:px-7
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
            >
              <div
                class="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-blue-50
                  to-indigo-200
                  mx-auto
                 top-1 relative
                  text-blue-700
                  rounded-2xl
                  mb-8
                  text-center
                  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-8 w-8 block mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h4 class="font-semibold text-center text-xl xl:px-10 text-dark mb-4">
                Digital Services to Facilitate Online Business
              </h4>
              <p class="text-body-color text-center sm:text-base text-sm">
                Supported by a global freelancer partner network, we meet all
                your digital commerce needs : web support, ads, SEO, and much
                more!
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
            class="w-full  md:top-0 -top-2 relative lg:w-1/3 px-2"
          >
            <div
              class="
               sm:p-10 py-7 px-5
               md:px-7
               xl:px-7
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
            >
              <div
                class="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
        
                  justify-center
                  bg-gradient-to-br
                  from-blue-50
                  to-indigo-200
                  mx-auto
                 top-1 relative
                  text-blue-700
                  rounded-2xl
                  mb-8
                  text-center
                  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-8 w-8 block mx-auto font-light"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
              <h4 class="font-semibold xl:block hidden xl:px-10 text-xl text-center text-dark mb-4">
                Set-up & Management of Product Listings
              </h4>

              <p class="text-body-color text-center sm:text-base text-sm ">
                Insights for products that have been listed on platforms like
                Amazon. A bird's eye view of your products, inventory and
                performance.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
            class="w-full lg:mx-0 lg:top-0 -top-3.5 relative lg:mb-0 -mb-5 mx-auto block lg:w-1/3 px-2"
          >
            <div
              class="
               sm:p-10 py-7 px-5
               md:px-7
               xl:px-7
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
            >
              <div
                class="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-blue-50
                  to-indigo-200
                  mx-auto
                 top-1 relative
                  text-blue-700
                  rounded-2xl
                  mb-8
                  text-center
                  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h4 class="font-semibold text-xl text-center xl:px-10 text-dark mb-4">
                E-Commerce Analytics & Optimization
              </h4>
              <p class="text-body-color text-center sm:text-base text-sm">
                We analyze top product listings, market trends and specific
                keywords to help improve your product's consumer exposure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr class="lg:hidden block mx-auto border-t-2 border-blue-700 border-dashed w-[95%] relative top-[60px]" />
    </section>
  );
};

export default Features;
