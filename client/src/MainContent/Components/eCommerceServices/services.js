import { useState } from "react";
const Services = (props) => {
  let origServices = [
    {
      name: "Search Engine Optimization (SEO)",
      img: "https://vtldesign.com/wp-content/uploads/2021/06/vital-design-image-optimization-seo.jpg",
      description:
        "Our SEO service helps make your site easier to discover, drives more traffic and ensures conversions. We build brand awareness, visibility, and quality leads.",
      estimatedQuote: 99.99,
      highlights: [
        "All websites are indexed on Google",
        "Dripfeed 30 Days (We Release The Backlinks Slowly Over 30 Days For Your Safety)",
        "Contextual SEO Backlinks that will help boost your website's Google Rankings starting in 3 weeks.",
      ],
      details:
        "We use Drip Feed and Syncopation as our primary strategies to build SEO links. With fast delivery, comprehensive reports and a completely manual process, we guarantee tangible results in 2-3 weeks of operations.",
      estimatedBillingPeriod: " month",
      minusPadding: 0,
      recurring: false,
    },
    {
      name: "Social Media Marketing",
      img: "https://www.searlesgraphics.com/Images/social-media-top.png",
      description:
        "Our Social Media Managers rapidly execute marketing strategies to achieve online business growth through platforms like Facebook, Instagram, and LinkedIn.",
      estimatedQuote: 64.99,
      highlights: [
        "Social Media profile optimization and management across all the platforms",
        "Organic outreach strategies",
        "Audience targeted posts aimed at higher lead conversions and click-through rate",
      ],
      details:
        "We design posts, offer business page optimization, and schedule your posts to drive traffic. With experience in high management positions, our social media managers guarantee fast-tracked progress within 2 weeks of operations. More effective than simply purchasing ads!",
      estimatedBillingPeriod: " 2 weeks",
      minusPadding: 0,
      recurring: true,
    },
    {
      name: "Email Marketing (Automated)",
      img: "https://www.solutions.kompass.com/blog/media/kompass_why_email_marketing_still_works.jpg",
      description:
        "We design appealing pop-ups, segment subscribers & automate 6 different types of email campaigns that run on their own to nurture and capture prospective leads.",
      estimatedQuote: 64.99,
      highlights: [
        "Engage interested prospects",
        "Nurture and convert new leads",
        "Increase CLV or customer lifetime-value",
        "Recover lost sales",
        "Automate customer-appreciation to maintain a long-term customer relationship",
      ],
      details:
        "We can automate email flows to achieve the above highlighted objectives. Our experts use their experience to set-up a Klaviyo campaign that will continue running even after service-delivery. Delivered in upto a week + 1 Revision.",
      estimatedBillingPeriod: " one-time cost",
      minusPadding: 2,
      recurring: false,
    },
    {
      name: "Google Ads Manager (PPC)",
      img: "https://displayadsdeepdive.com/wp-content/uploads/2021/08/displayadsdeepdive.com-creative-studio.png",
      description:
        "Our experts optimize google ad accounts and run effective PPC campaigns that increase chances of a boost in return-on-investment (ROI), and click-through-rate.",
      estimatedQuote: 99.99,
      highlights: [
        "Structuring your Google Ad Account based on custom needs",
        "Keyword Research for target audiences",
        "Optimal ads group creation",
        "Full competitor analysis",
        "Custom bid strategy and position management",
        "SEM Campaigns for Positive ROI",
      ],
      details:
        "Our Google Ads Management service does not guarantee progress. Results also depend on other factors like landing page experience, your product/service quality and price etc. Our ads service drives traffic and ensures competent ad management by experts. Delivered in 10 days.",
      estimatedBillingPeriod: " one-time cost",
      minusPadding: -3,
      recurring: true,
    },
    {
      name: "Website Maintenance & Support",
      img: "https://www.csquaretech.com/wp-content/uploads/2021/08/Website-Maintenance-Policy-2.jpg",
      description:
        "User-interface modifications relevant to current e-commerce trends. Daily cloud back-ups, security monitoring and 24/7 uplink monitoring.",
      estimatedQuote: 199.99,
      highlights: [
        "Priority support",
        "Edits to page contents and front-end code files to adapt to current e-commerce trends",
        "24/7 Broken link monitoring",
        "Security suggestions and cloud backups",
      ],
      details:
        "Our Website Maintenance & Support service caters to business requirements (startups to mid-sized enterprises). React.js, HTML, PHP and Wordpress sites can be custom-modified to adapt to requirements. This service is undertaken over a month's period",
      estimatedBillingPeriod: " month",
      minusPadding: -3,
      recurring: true,
    },
    {
      name: "Amazon FBA Product Research",
      img: "https://empowery.com/wp-content/uploads/2022/08/Secret-to-Successful-Amazon-FBA-Selling-scaled.jpg",
      description:
        "We research high-demand & low-competition products that fit custom needs; 30-page report with 20 high-grossing keywords and verified suppliers' info.",
      estimatedQuote: 109.99,
      highlights: [
        "We search products with average selling price $10-$75 and rating 4.5+",
        "Searches are tailored to custom business objectives: targeted profit margin of 30%-55% with ROI 100%-150%",
        "Our research aims at finding a product with prospective monthly revenue of $8000-$30,000+ & no seasonality",
      ],
      details:
        "Our product research is oriented around Amazon private labels looking to adopt new products their own brand name. Kindly conduct research on Amazon Private Labels (or reach out to us @ spireinsights@gmail.com) before purchasing this service. Delivered in 3 days.",
      estimatedBillingPeriod: " one-time cost",
      minusPadding: 3,
      recurring: false,
    },
  ];
  const [services, setServices] = useState(origServices);

  const textFilter = (text) => {
    let arr = [];
    let arrPrior = [];
    let array = origServices;
    const wordFilterArr = String(text)
      .toLowerCase()
      .split(/(?:,| )+/); //Words to be searched for in task names
    for (let i = 0; i < Array(...array).length; i++) {
      arrPrior.push(0);
      var serviceName = array[i]["name"].toLowerCase();
      var wordsContained = serviceName.split(/(?:,| )+/);
      var boolean = false;
      for (let j = 0; j < wordFilterArr.length; j++) {
        for (let k = 0; k < wordsContained.length; k++) {
          if (wordsContained[k].indexOf(wordFilterArr[j]) > -1) {
            arrPrior[i]++;
            boolean = true;
          }
        }
      }
      if (boolean === true) {
        arr.push(array[i]);
      }
    }
    arrPrior = arrPrior.filter((e) => e !== 0);

    let x, y, tmp;
    x = y = 0;
    for (let x = 0; x < arr.length - 1; x++) {
      var check = false;
      for (let y = 0; y < arr.length - 1 - x; y++) {
        if (arrPrior[y + 1] > arrPrior[y]) {
          tmp = arr[y];
          arr[y] = arr[y + 1];
          arr[y + 1] = tmp;
          check = true;
        }
      }
      if (check === false) {
        break;
      }
    }
    setServices(arr);
  };

  const [text, setText] = useState("");
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const filterByText = () => {
    if (text !== "") {
      textFilter(text);
    } else {
      setServices(origServices);
    }
  };

  return (
    <>
      <div class="w-full bg-gradient-to-br from-blue-100 to-blue-300 border-t-2 border-dashed border-blue-700 py-8">
        <section class=" sm:pt-8 pt-6 -mb-3 ">
          <form class="mb-10 block lg:w-[500px] shadow md:w-[400px] sm:w-[300px] w-[250px] mx-auto -mt-2">
            <label
              for="default-search"
              class="mb-2 text-sm block mx-auto  font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                onChange={textChangeHandler}
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Services..."
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  filterByText();
                }}
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
          <div class="container mx-auto px-8">
            <div class="-mx-4 flex flex-wrap">
              {services.map((service, i) => {
                return (
                  <>
                    <div class="w-full px-4 mb-6 md:w-1/2 xl:w-1/3">
                      <div class="mb-4 overflow-hidden rounded-md shadow-lg bg-white">
                        <div
                          class={` block  sm:h-[280px] h-[240px] w-auto border-b-[2px]   border-blue-700 border-dotted pt-${
                            5 - service.minusPadding
                          } pb-${4 - service.minusPadding} p-${
                            3 - service.minusPadding
                          }`}
                        >
                          <img
                            src={service.img}
                            alt="image"
                            class=" h-full mx-auto block w-auto"
                          />
                        </div>
                        <div class="p-8 xl:pt-5 md:pt-5 sm:pt-6 pt-6 text-left sm:py-7 md:py-5 xl:py-7">
                          <h3>
                            <a
                              href="javascript:void(0)"
                              class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                            >
                              {service.name}
                              <br />
                              <span class="text-blue-700 text-lg">
                                [
                                {" $" +
                                  service.estimatedQuote +
                                  " / " +
                                  service.estimatedBillingPeriod +
                                  " "}
                                ]
                              </span>
                            </a>
                          </h3>
                          <p class="text-body-color mb-[22px] mt-4 text-base leading-relaxed">
                            {service.description}
                          </p>
                          <a
                            onClick={() => {
                              props.showServiceDetails(services[i]);
                            }}
                            class="text-body-color hover:cursor-pointer hover:border-primary hover:bg-primary inline-block w-full text-center rounded-md  hover:bg-blue-700 hover:shadow-lg shadow-md border border-[#cfd1d5] py-2 px-7 text-base font-medium transition hover:text-white"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
