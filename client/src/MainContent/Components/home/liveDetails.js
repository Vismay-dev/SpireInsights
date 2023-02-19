import ButtonGroup from "./buttonGroup";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillAmazonCircle } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import axios from "axios";
import TopProdResult from "./prodResult";
import { useState, useEffect } from "react";
import Tooltip from "fillRule-tooltip-hook";

const LiveDetails = () => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [analysis, setAnalysis] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState("Amazon");

  const [operation, setOperation] = useState("best");
  useEffect(() => {
    if (sessionStorage.getItem("redirect") === "toMarket") {
      setOperation("marketplace-overview");
    }
  }, []);

  let operationDummy = operation;

  const changeOp = async (op) => {
    setOperation(op);
    operationDummy = op;
    setAnalysis();
    if (initialSearched) {
      await subMethod();
    }
  };

  const subMethod = async () => {
    setLoading(true);
    console.log(operation);
    console.log(operationDummy);
    if (operationDummy === "best") {
      await axios
        .post(
          process.env.NODE_ENV === "production"
            ? "https://spire-insights.herokuapp.com/api/user/bestSellers"
            : "http://localhost:4000/api/user/bestSellers",
          { platform: currentPlatform, token: sessionStorage.getItem("token") }
        )
        .then((res) => {
          setAnalysis(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response.message);
          setLoading(false);
          setAnalysis([]);
        });
    } else if (operationDummy === "new") {
      await axios
        .post(
          process.env.NODE_ENV === "production"
            ? "https://spire-insights.herokuapp.com/api/user/newProductEntries"
            : "http://localhost:4000/api/user/newProductEntries",
          { platform: currentPlatform, token: sessionStorage.getItem("token") }
        )
        .then((res) => {
          setAnalysis(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setAnalysis([]);
        });
    } else if (operationDummy === "wished") {
      await axios
        .post(
          process.env.NODE_ENV === "production"
            ? "https://spire-insights.herokuapp.com/api/user/mostWished"
            : "http://localhost:4000/api/user/mostWished",
          { platform: currentPlatform, token: sessionStorage.getItem("token") }
        )
        .then((res) => {
          setAnalysis(res.data);
          console.log(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setAnalysis([]);
        });
    }
  };

  const subHandle = async (e) => {
    e.preventDefault();
    setInitialSearched(true);
    await subMethod();
  };

  const [showToolTip2, setShowToolTip2] = useState(false);
  const [initialSearched, setInitialSearched] = useState(false);

  return (
    <>
      <div class="relative mx-auto  z-[40]  w-fit">
        <h1 class="sm:text-4xl text-3xl font-bold mt-[40px] mb-4 px-4 bottom-2 relative text-center">
          Live Details
        </h1>
        <hr class="relative top-1 w-[150%] mt-1 right-[25%]" />
        <div class="md:px-2.5 sm:px-12 px-6">
          <ButtonGroup operation={operation} changeOp={changeOp} />
        </div>
        <hr class="relative top-1 w-[150%] my-1 right-[25%]" />
        <form onSubmit={subHandle}>
          <div class="flex flex-wrap md:pb-0 pb-1 md:mb-0 -mb-[60px]  -mx-4 relative lg:w-[120%] w-[96%] right-[-3.8%] lg:right-[8%] md:mt-8 mt-10">
            <div class="w-[95%] md:left-[7px] sm:left-[2.9%] left-[4%] md:mt-0 -mt-5 mb-[54px] md:w-full px-2   relative">
              <label
                for=""
                class="font-semibold text-base text-black block mb-3"
              >
                Select E-Commerce Platform
              </label>
              <a
                onClick={() => {
                  setCurrentPlatform("Amazon");
                }}
                class={`
      py-[10px]
      sm:py-3
       rounded-l-md
       shadow-t-md
       shadow-l-md
       shadow-b-md
       ${
         currentPlatform === "Amazon"
           ? "bg-blue-700 text-white"
           : "text-black bg-white"
       }
      w-[50%]
      sm:px-20
      inline-flex
      items-center
      justify-center
      font-semibold
      cursor-pointer
      border border-primary
      text-center  text-base
      bg-white
      hover:bg-blue-700 hover:text-white hover:border-primary
      `}
              >
                <AiFillAmazonCircle class="mr-2 text-xl top-[0.5px] font-bold relative" />{" "}
                Amazon
              </a>

              <a
                onMouseOver={() => setShowToolTip2(true)}
                onMouseLeave={() => setShowToolTip2(false)}
                class={`
      py-[11.5px]
      sm:py-3
      w-[50%]
      cursor-default

      sm:px-6 px-5
      sm:top-0
      -top-[4.9px] relative
      lg:px-16
      inline-flex
      items-center
      rounded-r-md
      shadow-t-md
      shadow-r-md
      shadow-b-md
      justify-center
      font-semibold
      border border-light
      text-center  text-sm
      sm:text-base
     bg-gray-200
     text-gray-700
      `}
              >
                <FiShoppingCart class="mr-2 text-xl sm:inline hidden top-[0.5px] font-bold relative" />{" "}
                Al Anees (Qatar)
              </a>

              <Tooltip
                show={showToolTip2}
                position="right"
                fontSize="16px"
                padding="3px 5px"
              >
                <span class="font-semibold text-center font-sans bottom-0.5">
                  Currently unavailable for this region.
                </span>
              </Tooltip>
            </div>
          </div>

          <button
            type="submit"
            href="javascript:void(0)"
            class="
   py-3
   px-6
   lg:px-8
   xl:px-10
   lg:w-full
   sm:w-[92%] w-[88%]
  lg:left-0
  sm:left-[4.2%] left-[6.3%]
  md:bottom-2 -bottom-8
   md:-mt-7 sm:-mt-2 -mt-40
   shadow-lg
   relative
   inline-flex
 
   items-center
    md:mb-0 mb-5
   justify-center
   text-center text-white text-base
   bg-blue-700
   hover:bg-opacity-90
   font-semibold
    mx-auto
   rounded-md
   "
          >
            <TbReportSearch class="mr-2 text-xl font-bold relative" /> Show
            Insights
          </button>
        </form>
      </div>
      <hr class="relative md:mt-6 mt-10 w-[90%] mx-auto" />
      <TopProdResult
        loading={loading}
        operation={operation}
        analysis={analysis}
      />
    </>
  );
};

export default LiveDetails;
