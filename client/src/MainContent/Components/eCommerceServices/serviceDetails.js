import { GrCircleAlert } from "react-icons/gr";
import RequestOrder from "../../../Modals/RequestOrder";
import { useState, useContext, useEffect } from "react";
import userContext from "../../../context/userContext";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const ServiceDetails = (props) => {
  const [showRequestOrder, setShowRequestOrder] = useState(false);
  const [currentReqState, setCurrentReqState] = useState({});
  const userCon = useContext(userContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        process.env.NODE_ENV === "production"
          ? "https://spire-insights.herokuapp.com/api/user/getServiceRequests"
          : "http://localhost:4000/api/user/getServiceRequests",
        { token: sessionStorage.getItem("token") }
      )
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (props.service.name == res.data[i].serviceName) {
            setCurrentReqState({
              requested: true,
              resolved: res.data[i].resolved,
            });
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [props.service, showRequestOrder]);

  return (
    <>
      {showRequestOrder ? (
        <RequestOrder
          service={props.service}
          close={() => {
            setShowRequestOrder(false);
          }}
        />
      ) : (
        ""
      )}
      <div class="w-full bg-gradient-to-br from-blue-100 to-blue-300 border-t-2 border-dashed border-blue-700 py-8 lg:pb-8 md:pb-24 pb-24 lg:px-0 sm:px-5 px-4">
        <button
          onClick={() => {
            props.switchBack();
          }}
          class="bg-white lg:px-10 md:px-5 px-10 lg:pl-[34px] md:pl-[16px] pl-[34px] md:mt-3 lg:ml-32 md:ml-6 ml-auto md:mr-0 mr-auto top-3 md:normal-case uppercase relative md:-mb-[90px] mb-[20px]  rounded-md shadow-md hover:shadow-lg py-2  block  text-lg font-bold "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-[18px] mr-3 relative bottom-[2px] h-[18px] inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          Go Back
        </button>
        <>
          <div class=" mt-3 -mb-20">
            <div class="lg:pt-6 pt-8">
              <div class=" lg:-mb-[26px] -mb-[33px] lg:w-[450px] md:w-[390px] sm:w-[370px] w-[325px] block mx-auto bg-white p-4 shadow-md col-start-2 overflow-hidden rounded-md">
                <img
                  src={props.service.img}
                  alt="Two each of gray, white, and black shirts laying flat."
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <div class="mx-auto  max-w-2xl px-4 pt-4 pb-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div class="lg:col-span-2 p-5 pt-[22px] lg:pb-0 pb-3  lg:mt-0 md:mt-7 mt-7 lg:mb-0 md:mb-2 sm:-mb-1 -mb-2 block lg:shadow-md lg:bg-white lg:border-r rounded-t-md lg:pr-8">
                  <h1 class="lg:text-3xl sm:text-3xl text-[27px] lg:text-left text-center font-bold tracking-tight text-gray-900 ">
                    {props.service.name}
                  </h1>
                </div>

                <div class="mt-6 bg-white p-5 lg:mb-0 mb-8 lg:pt-3  rounded-md shadow-md lg:row-span-3 lg:mt-0">
                  <h2 class="sr-only ">Product information</h2>
                  <p class="block lg:mt-1 -mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-blue-700 inline"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                    <span class="font-bold ml-2 text-xl relative top-[3px]">
                      Please Note:{" "}
                    </span>
                    <br />
                    <span class=" mt-5 block">
                      {" "}
                      Direct Purchase is not yet enabled. We want to understand
                      your business requirements before we accept your order.{" "}
                    </span>

                    <span class="font-semibold mt-4 mb-2 block">
                      Please request this service below so that we can revert
                      back to you (by email) with an official order invoice.
                      Thank you!
                    </span>
                  </p>

                  <hr class="border-t-2 border-blue-700 border-dashed mt-6 mb-[22px] block" />

                  <p class="text-2xl mt-[10px] tracking-tight text-gray-900">
                    Estimated Price -{" "}
                    <span class="font-semibold">
                      ${props.service.estimatedQuote}
                    </span>
                  </p>
                  <p class="text-xl mt-[2px] block font-bold tracking-tight text-blue-700">
                    {props.service.estimatedBillingPeriod === " one-time cost"
                      ? "One-time purchase"
                      : "Billed every " + props.service.estimatedBillingPeriod}
                  </p>

                  <button
                    disabled={
                      currentReqState &&
                      currentReqState.requested &&
                      !currentReqState.completed
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setShowRequestOrder(true);
                    }}
                    class={`${
                      currentReqState &&
                      currentReqState.requested &&
                      !currentReqState.completed
                        ? "bg-green-600 hover:bg-opacity-90"
                        : "bg-blue-700 hover:bg-blue-800 hover:cursor-pointer"
                    }  inline-flex items-center justify-center rounded-md py-3 sm:px-10 px-6 font-semibold text-center text-base  mt-[18px] w-full uppercase  text-white  lg:px-8 xl:px-10`}
                  >
                    {loading ? (
                      <ClipLoader
                        color={"#ffffff"}
                        loading={loading}
                        size={30}
                      />
                    ) : (
                      <>
                        {currentReqState &&
                        currentReqState.requested &&
                        !currentReqState.completed ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 mr-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        ) : (
                          ""
                        )}
                        {currentReqState &&
                        currentReqState.requested &&
                        currentReqState.resolved &&
                        !currentReqState.completed
                          ? "Service Purchased"
                          : currentReqState &&
                            currentReqState.requested &&
                            !currentReqState.resolved &&
                            !currentReqState.completed
                          ? "Service Requested"
                          : "REQUEST SERVICE"}
                      </>
                    )}
                  </button>
                  <p class="font-semibold text-center text-sm mt-[17px]">
                    <GrCircleAlert class="mr-1 relative bottom-[1px] inline"></GrCircleAlert>
                    {currentReqState.requested && !currentReqState.resolved
                      ? "Request will be acknowledged soon"
                      : currentReqState.requested && currentReqState.resolved
                      ? "Purchase was confirmed"
                      : "Service request will be acknowledged"}{" "}
                    via mail.
                  </p>
                </div>

                <div class="pb-5 bg-white rounded-b-md shadow-md p-5 pt-4 lg:col-span-2  lg:col-start-1 lg:border-r  lg:pt-6 lg:pb-10 lg:pr-8">
                  <div>
                    <h3 class="sr-only">Description</h3>

                    <div class="space-y-6">
                      <p class="text-base text-gray-900">
                        {props.service.description}
                      </p>
                    </div>
                  </div>

                  <div class="mt-7">
                    <h3 class="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>

                    <div class="mt-4">
                      <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                        {props.service.highlights.map((highlight) => {
                          return (
                            <li class="text-gray-400">
                              <span class="text-gray-600">{highlight}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div class="mt-7">
                    <h2 class="text-sm font-medium text-gray-900">Details</h2>

                    <div class="mt-4 space-y-6">
                      <p class="text-sm text-gray-600">
                        {props.service.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default ServiceDetails;
