
import AOS from 'aos';
import "aos/dist/aos.css";
import logo from '../logo.png'
import { useEffect, useState, useRef } from "react";

const PrivacyModal = (props) => {

    const [loading, setLoading] = useState(false)

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [loading]);

  const myRef = useRef()


useEffect(
  () => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!myRef.current || myRef.current.contains(event.target)) {
        return;
      }
      props.close();
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

    return (<div class="fixed z-[100] inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 sm:px-4 px-6 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay, show/hide based on modal state. */}
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
      {/* This element is to trick the browser into centering the modal contents. */}
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
      
        {/* Modal panel, show/hide based on modal state. */}
  
      <div ref = {myRef} data-aos={"fade-up"} data-aos-once='true' class={`lg:pr-6 px-3 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:mt-5 sm:align-middle lg:w-10/12 ${loading?'sm:w-8/12':'sm:w-11/12'} md:w-11/12 w-[98%]`}>
        <div  class="bg-white sm:px-1 px-[2px] pt-5 pb-2 sm:p-6 sm:pb-4">
        <h1 class ='sm:text-4xl text-3xl top-1 relative font-bold mx-auto text-center underline'>Privacy Policy</h1>
        <hr class = 'border-t-2 border-blue-700 border-dotted mx-auto mb-2 mt-8 block w-[70%]'/>

          <div class="mx-auto block ">

            <div class="sm:mt-3 text-center  w-full  mx-auto block">   

  
                    <section class="py-6 lg:-mb-6 mb-0  lg:py-[40px] w-full  lg:pt-0 mx-auto block text-center">
                       <div class="mx-auto    block text-center">
                          <div
                             class="
                             bg-blue-700
                             text-center
                             relative
                             rounded
                             sm:left-0 left-[2px]
                             overflow-hidden
                             py-12
                             md:mt-0
                             -mt-8
                             mx-auto block
                             xl:w-[900px]
                             sm:w-[90%]
                             w-[95%]
                             sm:px-[70px]
                             px-[20px]
                            pt-[50px]
                            lg:pt-[30px]
                            pb-[50px]
                            lg:pb-[30px]
                             z-10
                             "
                             >
                             <div class="flex flex-wrap items-center -mb-16 -mt-3 -mx-4">
                                <div class="w-full sm:px-4 px-1">
                                        <div>
                                            <img class = 'mx-auto block p-1.5 w-14 h-14 mb-6 bg-white rounded-full' src = {logo}></img>
                                        </div>
                                   <span class="text-white text-lg relative bottom-1 right-[1px] uppercase  font-bold mb-3">
                                    Spire Insights
                                   </span>
                                   <h2
                                      class="
                                      text-white
                                      font-bold
                                      sm:text-md text-sm
                                      
                                      leading-tight
                                      text-center
                                      mb-6
                                      mt-4
                                      px-4
                                      sm:mb-8
                                      lg:mb-0
                                      "
                                      >
<p>We respect your privacy and are committed to protecting it through our compliance with this privacy policy (“Policy”). This Policy describes the types of information we may collect from you or that you may provide (“Personal Information”) on the <a target="_blank" rel="nofollow" href="https://www.spire-insights.com">spire-insights.com</a> website (“Website” or “Service”) and any of its related products and services (collectively, “Services”), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information. It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it.</p><br/>
<p>This Policy is a legally binding agreement between you (“User”, “you” or “your”) and this Website operator (“Operator”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Collection of personal information</h2>
<p>You can access and use the Website and Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the features offered on the Website, you may be asked to provide certain Personal Information (for example, your name and e-mail address).</p><br/>
<p>We receive and store any information you knowingly provide to us when you create an account,  or fill any forms on the Website.</p><br/>
<p>You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the Website. Users who are uncertain about what information is mandatory are welcome to contact us.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Privacy of children</h2>
<p>We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Website and Services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Website and Services, please contact us to request that we delete that child’s Personal Information from our Services.</p><br/>
<p>We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Website and Services without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Use and processing of collected information</h2>
<p>We act as a data controller and a data processor when handling Personal Information, unless we have entered into a data processing agreement with you in which case you would be the data controller and we would be the data processor.</p><br/>
<p> Our role may also differ depending on the specific situation involving Personal Information. We act in the capacity of a data controller when we ask you to submit your Personal Information that is necessary to ensure your access and use of the Website and Services. In such instances, we are a data controller because we determine the purposes and means of the processing of Personal Information.</p><br/>
<p>We act in the capacity of a data processor in situations when you submit Personal Information through the Website and Services. We do not own, control, or make decisions about the submitted Personal Information, and such Personal Information is processed only in accordance with your instructions. In such instances, the User providing Personal Information acts as a data controller.</p><br/>
<p>In order to make the Website and Services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Any of the information we collect from you may be used for the following purposes:</p><br/>
<ul>
<li>Create and manage user accounts</li>
<li>Send product and service updates</li>
<li>Respond to inquiries and offer support</li>
<li>Request user feedback</li>
<li>Improve user experience</li>
<li>Protect from abuse and malicious users</li>
<li>Run and operate the Website and Services</li>
</ul>
<p>Processing your Personal Information depends on how you interact with the Website and Services, where you are located in the world and if one of the following applies: (i) you have given your consent for one or more specific purposes; (ii) provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof; (iii) processing is necessary for compliance with a legal obligation to which you are subject; (iv) processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) processing is necessary for the purposes of the legitimate interests pursued by us or by a third party.</p><br/>
<p> Note that under some legislations we may be allowed to process information until you object to such processing by opting out, without having to rely on consent or any other of the legal bases. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Managing information</h2>
<p>You are able to delete certain Personal Information we have about you. The Personal Information you can delete may change as the Website and Services change. When you delete Personal Information, however, we may maintain a copy of the unrevised Personal Information in our records for the duration necessary to comply with our obligations to our affiliates and partners, and for the purposes described below.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Disclosure of information</h2>
<p> Depending on the requested Services or as necessary to complete any transaction or provide any Service you have requested, we may share your information with our affiliates, contracted companies, and service providers (collectively, “Service Providers”) we rely upon to assist in the operation of the Website and Services available to you and whose privacy policies are consistent with ours or who agree to abide by our policies with respect to Personal Information. We will not share any personally identifiable information with third parties and will not share any information with unaffiliated third parties.</p><br/>
<p>Service Providers are not authorized to use or disclose your information except as necessary to perform services on our behalf or comply with legal requirements. Service Providers are given the information they need only in order to perform their designated functions, and we do not authorize them to use or disclose any of the provided information for their own marketing or other purposes.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Retention of information</h2>
<p>We will retain and use your Personal Information for the period necessary to comply with our legal obligations, as long as your user account remains active, to enforce our agreements, resolve disputes, and unless a longer retention period is required or permitted by law.</p><br/>
<p>We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification, and the right to data portability cannot be enforced after the expiration of the retention period.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Cookies</h2>
<p>Our Website and Services use “cookies” to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. You may learn more about cookies and how they work <a target="_blank" href="https://www.websitepolicies.com/blog/cookies" rel="noopener">here</a>.</p><br/>
<p>We may use cookies to collect, store, and track information for security and personalization, and for statistical purposes. Please note that you have the ability to accept or decline cookies. Most web browsers automatically accept cookies by default, but you can modify your browser settings to decline cookies if you prefer.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Data analytics</h2>
<p>Our Website and Services may use third-party analytics tools that use cookies, web beacons, or other similar information-gathering technologies to collect standard internet activity and usage information. The information gathered is used to compile statistical reports on User activity such as how often Users visit our Website and Services, what pages they visit and for how long, etc. We use the information obtained from these analytics tools to monitor the performance and improve our Website and Services. We do not use third-party analytics tools to track or to collect any personally identifiable information of our Users and we will not associate any information gathered from the statistical reports with any individual User.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Do Not Track signals</h2>
<p>Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. The Website and Services do not track its visitors over time and across third-party websites. However, some third-party websites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Social media features</h2>
<p>Our Website and Services may include social media features, such as the Facebook and Twitter buttons, Share This buttons, etc (collectively, “Social Media Features”). These Social Media Features may collect your IP address, what page you are visiting on our Website and Services, and may set a cookie to enable Social Media Features to function properly. Social Media Features are hosted either by their respective providers or directly on our Website and Services. Your interactions with these Social Media Features are governed by the privacy policy of their respective providers.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Links to other resources</h2>
<p>The Website and Services contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties. We encourage you to be aware when you leave the Website and Services and to read the privacy statements of each and every resource that may collect Personal Information.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Information security</h2>
<p>We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.</p><br/>
<p>Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and the Website and Services cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third party, despite best efforts.</p><br/>
<p>As the security of Personal Information depends in part on the security of the device you use to communicate with us and the security you use to protect your credentials, please take appropriate measures to protect this information.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Data breach</h2>
<p>In the event we become aware that the security of the Website and Services has been compromised or Users’ Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the User as a result of the breach or if notice is otherwise required by law. When we do, we will post a notice on the Website, send you an email, get in touch with you over the phone, mail you a letter.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Changes and amendments</h2>
<p>We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page, send you an email to notify you. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.</p><br/>
<p>An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Information in a manner materially different than what was stated at the time your Personal Information was collected.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Acceptance of this policy</h2>
<p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services and submitting your information you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services. This privacy policy was created with the <a target="_blank" href="https://www.websitepolicies.com/privacy-policy-generator" rel="noopener">privacy policy generator</a>.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Contacting us</h2>
<p>If you have any questions, concerns, or complaints regarding this Policy, the information we hold about you, or if you wish to exercise your rights, we encourage you to contact us using the details below:</p><br/>
<p><a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;spir&#101;&#105;&#110;&#115;&#105;ghts1&#64;g&#109;ail.&#99;om" target="_blank" rel="nofollow">s&#112;i&#114;&#101;&#105;&#110;&#115;&#105;g&#104;ts1&#64;gm&#97;i&#108;.&#99;om</a></p><br/>
<p>We will attempt to resolve complaints and disputes and make every reasonable effort to honor your wish to exercise your rights as quickly as possible and in any event, within the timescales provided by applicable data protection laws.</p><br/>
<p>This document was last updated on July 13, 2022</p><br/>
                                   </h2>
                                </div>
                                
                             </div>
                             <div>
                                <span class="absolute top-0 left-0 z-[-1]">
                                   <svg
                                      width="189"
                                      height="162"
                                      viewBox="0 0 189 162"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      >
                                      <ellipse
                                         cx="16"
                                         cy="-16.5"
                                         rx="173"
                                         ry="178.5"
                                         transform="rotate(180 16 -16.5)"
                                         fill="url(#paint0_linear)"
                                         />
                                      <defs>
                                         <linearGradient
                                            id="paint0_linear"
                                            x1="-157"
                                            y1="-107.754"
                                            x2="98.5011"
                                            y2="-106.425"
                                            gradientUnits="userSpaceOnUse"
                                            >
                                            <stop stop-color="white" stop-opacity="0.07" />
                                            <stop offset="1" stop-color="white" stop-opacity="0" />
                                         </linearGradient>
                                      </defs>
                                   </svg>
                                </span>
                                <span class="absolute bottom-0 right-0 z-[-1]">
                                   <svg
                                      width="191"
                                      height="208"
                                      viewBox="0 0 191 208"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      >
                                      <ellipse
                                         cx="173"
                                         cy="178.5"
                                         rx="173"
                                         ry="178.5"
                                         fill="url(#paint0_linear)"
                                         />
                                      <defs>
                                         <linearGradient
                                            id="paint0_linear"
                                            x1="-3.27832e-05"
                                            y1="87.2457"
                                            x2="255.501"
                                            y2="88.5747"
                                            gradientUnits="userSpaceOnUse"
                                            >
                                            <stop stop-color="white" stop-opacity="0.07" />
                                            <stop offset="1" stop-color="white" stop-opacity="0" />
                                         </linearGradient>
                                      </defs>
                                   </svg>
                                </span>
                             </div>
                          </div>
                       </div>
                    </section>
  

            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-3 mt-4 shadow-md border-y-indigo-200 border-2 -mr-6 py-0 sm:px-6 sm:flex sm:flex-row-reverse ">
        
          <button onClick = {props.close} type="button" class="sm:-left-4 relative h-11 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-7 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5 mb-5 sm:w-auto sm:text-md">
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  </div>)
}

export default PrivacyModal