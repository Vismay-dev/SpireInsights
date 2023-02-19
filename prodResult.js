import { MdOutlineStarRate } from "react-icons/md";
import {
  GiPriceTag,
  GiClothes,
  GiLipstick,
  GiForkKnifeSpoon,
} from "react-icons/gi";
// import GaugeChart from 'fillRule-chart'
import { FcRatings, FcMoneyTransfer, FcHome } from "react-icons/fc";
import { SiMarketo } from "react-icons/si";
import { AiOutlineRollback } from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";
import ClipLoader from "react-spinners/ClipLoader";
import logo from "../../../logo.png";
import ReactSvgPieChart from "react-svg-piechart";
import { Chart } from "react-charts";

import { FcAutomotive } from "react-icons/fc";
import { BsCart4 } from "react-icons/bs";

import { useEffect, useState, useMemo } from "react";

const TopProdResult = (props) => {
  useEffect(() => {
    setCategory();
  }, [props.analysis]);

  const [category, setCategory] = useState();
  const returnIcon = (title) => {
    return title.toLowerCase() === "automotive" ? (
      <FcAutomotive class="block mx-auto sm:text-9xl text-8xl my-3 bg-white p-3 rounded-md" />
    ) : title.toLowerCase() === "grocery" ? (
      <BsCart4 class="block mx-auto sm:text-9xl text-8xl text-gray-400 my-3 bg-white p-5 pb-5 rounded-md" />
    ) : title.toLowerCase() === "fashion" ? (
      <GiClothes class="block mx-auto sm:text-9xl text-8xl text-indigo-500 my-3 bg-white p-5 rounded-md" />
    ) : title.toLowerCase() === "computers" ? (
      <GrPersonalComputer class="block mx-auto sm:text-9xl text-8xl my-3 bg-white p-5 rounded-md" />
    ) : title.toLowerCase() === "beauty" ? (
      <GiLipstick class="block mx-auto sm:text-9xl text-8xl my-3 bg-white p-5 rounded-md" />
    ) : title.toLowerCase() === "kitchen" ? (
      <GiForkKnifeSpoon class="block mx-auto text-gray-400 sm:text-9xl text-8xl my-3 bg-white p-5 rounded-md" />
    ) : title.toLowerCase() === "improvement" ? (
      <FcHome class="block mx-auto sm:text-9xl text-8xl my-3 bg-white p-4 rounded-md" />
    ) : (
      ""
    );
  };

  return (
    <>
      {props.loading ? (
        <div class="h-[450px] -mb-4 bg-gradient-to-br mt-6 from-blue-100 to-indigo-200">
          <div class="top-[144px] left-[2.5px] relative mx-auto block text-center">
            <ClipLoader color={"#0A74FE"} loading={props.loading} size={110} />
          </div>
        </div>
      ) : props.analysis ? (
        !category ? (
          <div class="bg-gradient-to-br from-blue-100 py-11 pt-4 to-indigo-100 h-fit w-full  xl:px-72 lg:px-52 md:px-14 px-8 mx-auto grid sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-4">
            <h1 class="mx-auto block font-bold underline text-4xl sm:my-6 sm:mb-6 my-6 mb-9 sm:col-span-3 col-span-2">
              Select Category
            </h1>
            {props.analysis.map((elem, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setCategory(elem.category.toLowerCase());
                  }}
                  class="bg-gradient-to-br from-blue-700 to-indigo-600 hover:from-blue-400 hover:to-blue-400 pt-2 sm:h-52 h-[168px] col-span-1 rounded-md shadow-sm hover:shadow-lg cursor-pointer"
                >
                  {returnIcon(elem.category)}
                  <h2 class="text-white font-bold uppercase sm:text-2xl text-xl text-center">
                    {elem.category.toLowerCase() === "improvement"
                      ? "Home"
                      : elem.category}
                  </h2>
                </div>
              );
            })}
          </div>
        ) : (
          <section class="pt-6 lg:pt-[16px] -mb-5 pb-12 lg:pb-[95px] bg-[#F3F4F6]">
            <h1 class="sm:text-4xl text-3xl px-2 text-center bottom-6 mt-11 font-bold relative underline">
              {props.operation === "best"
                ? "Best-Selling Products"
                : props.operation === "new"
                ? "New Releases"
                : props.operation === "wished"
                ? "Most Wished Products"
                : ""}
            </h1>
            <h3 class="text-xl text-center bottom-4 mb-9 font-semibold relative ">
              Live Insights -{" "}
              {category.charAt(0).toUpperCase() + category.substring(1)}{" "}
              Category
            </h3>

            <button
              onClick={() => {
                setCategory();
              }}
              class="bg-blue-700 text-white text-xl  shadow-sm hover:shadow-lg hover:bg-blue-600 px-4 py-2.5 rounded-md relative bottom-4 mt-2 mb-7 font-semibold mx-auto block"
            >
              <AiOutlineRollback class="inline mr-1.5 relative bottom-[3px]" />
              CATEGORIES
            </button>

            <div class="lg:container lg:w-full w-[95%] lg:mt-0 mt-2 lg:-mb-3 mb-8 mx-auto">
              <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 shadow-lg mx-auto">
                {props.analysis === null ? (
                  <h1 class="text-2xl text-center block pb-[70px] mx-auto font-semibold left-2 mt-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-14 w-14 mb-6 mx-auto block text-center text-red-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>{" "}
                    Unable to Fetch Results..
                  </h1>
                ) : (
                  ""
                )}

                {props.analysis.map(function (categ) {
                  if (categ.category.toLowerCase() === category) {
                    return Object.keys(categ).map(function (property, i) {
                      if (property !== "category") {
                        return (
                          <>
                            <div
                              key={i}
                              class={`w-full py-4  md:w-1/2 xl:w-1/3 px-4`}
                            >
                              <div class="bg-white shadow-sm h-full rounded-lg overflow-hidden mb-1">
                                <img
                                  src={categ[property]["image"]}
                                  alt="image"
                                  class="w-full object-contain p-4 h-[270px]"
                                />
                                <div class="p-8 sm:p-9 border-t-2 border-t-blue-700 border-dotted md:p-7 xl:p-9 xl:p-6 text-center">
                                  <h3 class="">
                                    <a
                                      href="javascript:void(0)"
                                      class="
                                           text-ellipsis overflow-hidden
                                           font-semibold
                               
                                           text-dark text-xl
                                           sm:text-[22px]
                                           mb-5
                                           md:text-xl
                                           lg:text-[22px]
                                           xl:text-xl
                                           2xl:text-[22px]
                                          truncate
                                           block
                                           hover:text-primary
                                           "
                                    >
                                      {categ[property]["title"]}
                                    </a>
                                  </h3>
                                  <p class="text-base text-body-color leading-relaxed mb-6">
                                    "{categ[property]["title"]}"
                                  </p>
                                  <p class="text-lg font-semibold text-body-color leading-relaxed mb-3">
                                    <GiPriceTag class=" bottom-[2.75px] mr-[3px] text-blue-700 relative inline text-2xl" />{" "}
                                    AED{" "}
                                    <span class="text-2xl font-bold right-[0px] -ml-1 relative text-blue-700">
                                      {categ[property]["price"]
                                        ? categ[property]["price"]
                                            .split("AED")[1]
                                            .replace("-", "")
                                        : ""}
                                    </span>
                                  </p>
                                  <p class="text-lg font-semibold text-body-color leading-relaxed mb-7">
                                    <MdOutlineStarRate class=" bottom-[3px] text-yellow-600 left-[1px] relative inline text-2xl" />{" "}
                                    Rated{" "}
                                    <span class="text-2xl font-bold  text-yellow-600">
                                      {categ[property]["stars"]
                                        ? categ[property]["stars"]
                                        : ""}
                                    </span>
                                    /5
                                  </p>
                                  <a
                                    onClick={() => {
                                      window.open(categ[property]["reviews"]);
                                    }}
                                    class="
                                        sm:inline-block
                                        block
                                        py-2
                                        px-5
                                        border border-[#b1b4b9]
                                        rounded-lg
                                       
                                        text-base text-body-color
                                        font-medium
                                        hover:border-primary hover:bg-blue-700 hover:text-white
                                        transition
                                        cursor-pointer
                                        sm:mr-2
                                        sm:mb-0 mb-3
                                        "
                                  >
                                    View Reviews
                                  </a>
                                  <a
                                    onClick={() => {
                                      window.open(categ[property]["link"]);
                                    }}
                                    class="
                                        sm:inline-block
                                        block
                                        py-2
                                        sm:ml-2
                                        px-5
                                        border border-[#b1b4b9]
                                        rounded-lg
                                        text-base text-body-color
                                        font-medium
                                        hover:border-primary hover:bg-blue-700 hover:text-white
                                        transition
                                        cursor-pointer
                                        "
                                  >
                                    View Product
                                  </a>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      }
                    });
                  }
                })}
              </div>
            </div>
          </section>
        )
      ) : (
        <div class="h-[447px] -mb-4 bg-gradient-to-br mt-6 from-blue-100 to-indigo-200">
          <img
            class="w-16 block top-[122px] mt-1 mx-auto relative"
            src={logo}
          ></img>
          <br />

          <h1 class="text-3xl px-3 font-bold text-center top-[122px] relative text-gray-500">
            Live Market Details
            <br /> with <span class="text-blue-700">Spire Insights</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default TopProdResult;
