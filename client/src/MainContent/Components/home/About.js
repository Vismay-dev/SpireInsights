import aboutImage from "./about.png";
import aboutImage2 from "./about2.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1600,
    });
  }, []);

  return (
    <section class="pt-20 lg:pt-[100px] mx-auto block pb-8 lg:pb-[0px] xl:pb-[20px] 2xl:pb-[80px] overflow-hidden">
      <hr class="border-t-2 border-blue-700 border-dashed w-[95%] lg:-mt-4 -mt-5  mx-auto block relative lg:bottom-16 bottom-24" />
      <div class="container lg:mt-2 mx-auto block">
        <div class="flex flex-wrap justify-between items-center -mx-4">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            class="w-full xl:right-6 right-10 top-7 relative lg:w-[50%] lg:px-20 px-32"
          >
            <div class="flex items-center -mx-3 sm:-mx-4">
              <div class="w-1/2 sm:px-2">
                <img class="block ml-[50px]" src={aboutImage}></img>
              </div>
              <div class="w-1/2 right-2 top-4 sm:px-4">
                <img
                  class="block relative top-8 ml-[35px]"
                  src={aboutImage2}
                ></img>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            class="w-full lg:w-1/2 xl:w-5/12 px-4"
          >
            <div class="sm:mt-5 mt-3 relative lg:top-[25px] top-[77px] xl:right-[120px] lg:right-[63px] text-center  lg:mt-0">
              <span class="font-semibold text-lg text-primary mb-2 block">
                Why Choose Us
              </span>
              <h2 class="font-bold text-3xl sm:text-4xl sm:px-4 px-8 text-dark mb-8">
                Improve Online Sales & Join the E-Commerce Frontier
              </h2>
              <p class="text-base text-body-color mb-[26px] sm:px-4 px-8">
                It is a long established fact that e-commerce drives a company's
                sales up by 30-40%. Sellers in the Middle East are unable to
                implement such an increase, as otherwise seen in the West.
                <br />
                <br />
                We provide sellers with the digital services & tools necessary
                to perform well in online market-places, be it through Google's
                search engine or Amazon's product listings.
              </p>
              <p class="text-base text-body-color mb-12 sm:px-4 px-8">
                Such services used to drive e-commerce costs drastically high.
                With Spire, you now have access to various digital services at
                minimal costs. Moreover, our free-of-cost e-commerce tools give
                you a bird's eye view over aggregated data from online markets.
                <br />
                <br /> Sign-up now, access our e-commerce tools for free and
                boost your business!
                <strong>
                  {" "}
                  Unleash the power of e-commerce with Spire Insights.
                </strong>
              </p>
              <a
                href="javascript:void(0)"
                class="
                  py-4
                  px-10
                  lg:px-8
                  xl:px-10
                  inline-flex
                  items-center
                  justify-center
                  text-center text-white text-base
                  bg-primary
                  hover:bg-opacity-90
                  font-normal
                  rounded-lg
                  "
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
