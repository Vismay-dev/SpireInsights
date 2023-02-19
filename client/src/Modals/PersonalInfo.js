import { useEffect, useState, useMemo, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import ClipLoader from "react-spinners/ClipLoader";
import ReactGA from "react-ga";

const PersonalInfo = (props) => {
  const currentUser = useContext(userContext);

  const [User, setUser] = useState({
    repFirstName: "",
    repLastName: "",
    email: "",
    password: "",
    country: "",
    businessName: "",
    city: "",
  });

  const history = useNavigate();

  const useAnalyticsEventTracker = (category = "Authentication Actions") => {
    const eventTracker = (
      action = "Registered",
      label = "Registration Modal"
    ) => {
      ReactGA.event({ category, action, label });
    };
    return eventTracker;
  };

  const gaEventTracker = useAnalyticsEventTracker("Register");

  const handleChange = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
  };
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();
    props.isLoading();
    setLoading(true);
    console.log(User);
    axios
      .post(
        process.env.NODE_ENV === "production"
          ? "https://spire-insights.herokuapp.com/api/user/register"
          : "http://localhost:4000/api/user/register",
        User
      )
      .then((res) => {
        sessionStorage.setItem("token", res.data.userToken);
        currentUser.setUser(res.data.user);
        gaEventTracker("Registered");
        history("/profile");
        props.close();
        setLoading(false);
        props.isNotLoading();
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response ? err.response.data : null);
        setLoading(false);
        props.isNotLoading();
      });
  };

  return (
    <div class="mt-10 sm:mt-0 relative mx-auto block justify-center">
      <div class={`md:grid md:grid-cols-3    md:gap-6`}>
        <div class="md:col-span-1 ">
          <div class="px-8 sm:px-3 md:left-0 sm:left-3 -mt-[43px] left-4 relative mr-3">
            <h3
              class={`  ${
                loading
                  ? "xl:mt-28 md:mt-24 sm:-mt-3 -mt-10 "
                  : "-mt-16 sm:mt-4 md:mt-40"
              } md:mb-0 mb-4 relative  md:left-0 sm:left-1.5 left-1   lg:text-3xl md:text-2xl text-3xl font-bold text-gray-900 text-center`}
            >
              Sign Up for Spire
            </h3>
            <p class="text-xs font-medium leading-6 mt-2 text-gray-400 uppercase text-center">
              Join The Movement
            </p>
            <p class="xl:mt-8 mt-6 md:mb-0 mb-7 text-sm text-gray-600 xl:px-14 lg:px-6 sm:px-2 px-0.5 text-center">
              Safe and Secure.
              <br />
              <br /> We value the protection of your personal data above all
              else.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:left-0 sm:left-1.5 left-3 relative md:col-span-2">
          <form id="regForm" onSubmit={handleSubmit}>
            <div class="shadow overflow-hidden sm:rounded-md">
              <div
                class={`px-3  py-2 pb-9 bg-gradient-to-r from-indigo-200 to-blue-200  sm:p-6`}
              >
                {loading ? (
                  <div class="relative mx-auto my-8 mb-14  mt-40 sm:pb-3 pb-0 sm:mr-0 md:mr-0.5 pt-1.5 sm:left-0  text-center sm:top-[50%] top-[65%] translate-y-[-50%] block justify-center">
                    <ClipLoader color={"#0b0bbf"} loading={loading} size={70} />
                  </div>
                ) : (
                  <>
                    {error !== null && error ? (
                      <p class="xl:text-center lg:text-base text-sm font-semibold lg:font-normal xl:mb-4 mb-6 text-red-500">
                        <span class="black underline text-black font-semibold">
                          Error:
                        </span>{" "}
                        {error ? error : ""}
                      </p>
                    ) : (
                      ""
                    )}

                    <div class="grid grid-cols-6 gap-6 pb-1.5">
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="repFirstName"
                          class="block text-sm font-semibold left-0.5 text-gray-700"
                        >
                          First name of Representative
                        </label>
                        <input
                          type="text"
                          required
                          onChange={handleChange}
                          name="repFirstName"
                          min={2}
                          id="first-name"
                          value={User.firstName}
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2   shadow-md sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-semibold left-0.5 text-gray-700"
                        >
                          Last name of Representative
                        </label>
                        <input
                          type="text"
                          required
                          onChange={handleChange}
                          name="repLastName"
                          id="last-name"
                          min={2}
                          value={User.lastName}
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2   shadow-md sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="email-address"
                          class="block text-sm font-semibold left-0.5 text-gray-700"
                        >
                          Business Name
                        </label>
                        <input
                          type="text"
                          required
                          onChange={handleChange}
                          name="businessName"
                          id="businessName"
                          value={User.businessName}
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 bg-white   shadow-md sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="country"
                          class="block text-sm font-semibold left-0.5 relative text-gray-700"
                        >
                          Country
                        </label>
                        <select
                          id="country"
                          required
                          onChange={handleChange}
                          name="country"
                          autocomplete="country-name"
                          value={User.country}
                          class="mt-1 block w-full py-2 px-3 border text-black border-gray-300 bg-white rounded-md p-2   shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="Afganistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antigua & Barbuda">
                            Antigua & Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bonaire">Bonaire</option>
                          <option value="Bosnia & Herzegovina">
                            Bosnia & Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Ter">
                            British Indian Ocean Ter
                          </option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Canary Islands">Canary Islands</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Channel Islands">
                            Channel Islands
                          </option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">
                            Christmas Island
                          </option>
                          <option value="Cocos Island">Cocos Island</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote DIvoire">Cote DIvoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Curaco">Curacao</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="East Timor">East Timor</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">
                            Falkland Islands
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">
                            French Polynesia
                          </option>
                          <option value="French Southern Ter">
                            French Southern Ter
                          </option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Great Britain">Great Britain</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Hawaii">Hawaii</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="India">India</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Isle of Man">Isle of Man</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Korea North">Korea North</option>
                          <option value="Korea Sout">Korea South</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macau">Macau</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Midway Islands">Midway Islands</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Nambia">Nambia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherland Antilles">
                            Netherland Antilles
                          </option>
                          <option value="Netherlands">
                            Netherlands (Holland, Europe)
                          </option>
                          <option value="Nevis">Nevis</option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau Island">Palau Island</option>
                          <option value="Palestine">Palestine</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Phillipines">Philippines</option>
                          <option value="Pitcairn Island">
                            Pitcairn Island
                          </option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Republic of Montenegro">
                            Republic of Montenegro
                          </option>
                          <option value="Republic of Serbia">
                            Republic of Serbia
                          </option>
                          <option value="Reunion">Reunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russia</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="St Barthelemy">St Barthelemy</option>
                          <option value="St Eustatius">St Eustatius</option>
                          <option value="St Helena">St Helena</option>
                          <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                          <option value="St Lucia">St Lucia</option>
                          <option value="St Maarten">St Maarten</option>
                          <option value="St Pierre & Miquelon">
                            St Pierre & Miquelon
                          </option>
                          <option value="St Vincent & Grenadines">
                            St Vincent & Grenadines
                          </option>
                          <option value="Saipan">Saipan</option>
                          <option value="Samoa">Samoa</option>
                          <option value="Samoa American">Samoa American</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome & Principe">
                            Sao Tome & Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syria</option>
                          <option value="Tahiti">Tahiti</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad & Tobago">
                            Trinidad & Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks & Caicos Is">
                            Turks & Caicos Is
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Erimates">
                            United Arab Emirates
                          </option>
                          <option value="United States of America">
                            United States of America
                          </option>
                          <option value="Uraguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City State">
                            Vatican City State
                          </option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Virgin Islands (Brit)">
                            Virgin Islands (Brit)
                          </option>
                          <option value="Virgin Islands (USA)">
                            Virgin Islands (USA)
                          </option>
                          <option value="Wake Island">Wake Island</option>
                          <option value="Wallis & Futana Is">
                            Wallis & Futana Is
                          </option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zaire">Zaire</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label
                          for="city"
                          class="block text-sm font-semibold left-0.5 text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          required
                          onChange={handleChange}
                          name="city"
                          id="city"
                          value={User.city}
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2   shadow-md sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label
                          for="region"
                          class="block text-sm font-semibold left-0.5 text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          required={true}
                          onChange={handleChange}
                          name="email"
                          type="email"
                          value={User.email}
                          id="region"
                          min={3}
                          autocomplete="School"
                          class="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2   shadow-md sm:text-sm text-black border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-8 lg:col-span-3">
                        <label
                          for="city"
                          class="block text-sm font-semibold left-0.5 text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          required={true}
                          onChange={handleChange}
                          name="password"
                          id="city"
                          value={User.password}
                          autocomplete="password"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2   shadow-md sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div class="px-4 py-1 bg-gray-50 sm:px-6 text-center">
                <button
                  type="submit"
                  class="md:mr-2.5 mx-auto px-16 relative h-12 w-full justify-center rounded-md border border-gray-300 shadow-sm py-1 bg-white text-lg font-semibold text-gray-700 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  mt-3 mb-3 sm:w-auto sm:text-md"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
