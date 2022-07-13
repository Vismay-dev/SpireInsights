
import AOS from 'aos';
import "aos/dist/aos.css";
import logo from '../logo.png'
import { useEffect, useState, useRef } from "react";

const TermsModal = (props) => {

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
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay, show/hide based on modal state. */}
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
      {/* This element is to trick the browser into centering the modal contents. */}
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
      
        {/* Modal panel, show/hide based on modal state. */}
  
      <div ref = {myRef} data-aos={"fade-up"} data-aos-once='true' class={`lg:pr-6 px-3 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:mt-5 sm:align-middle lg:w-10/12 ${loading?'sm:w-8/12':'sm:w-11/12'} md:w-11/12 w-[98%]`}>
      <div  class="bg-white px-1 pt-3 pb-2 sm:p-6 sm:pb-4">
        <h1 class ='text-4xl top-1 relative font-bold mx-auto text-center underline'>Terms & conditions</h1>
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
                             overflow-hidden
                             py-12
                             md:mt-0
                             -mt-14
                             mx-auto block
                             px-8
                             xl:w-[900px]
                             w-[90%]
                             p-[70px]
                            pt-[50px]
                            lg:pt-[30px]
                            pb-[50px]
                            lg:pb-[30px]
                             z-10
                             "
                             >
                             <div class="flex flex-wrap items-center -mb-16 -mt-3 -mx-4">
                                <div class="w-full px-4">
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
<h1>Terms and conditions</h1>
<p>These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the <a target="_blank" rel="nofollow" href="https://www.spire-insights.com">spire-insights.com</a> website (“Website” or “Service”) and any of its related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and this Website operator (“Operator”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Accounts and membership</h2>
<p>If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Links to other resources</h2>
<p>Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website. Your linking to any other off-site resources is at your own risk.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Prohibited uses</h2>
<p>In addition to other terms as set forth in the Agreement, you are prohibited from using the Website and Services or Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Website and Services, third party products and services, or the Internet; (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; (i) for any obscene or immoral purpose; or (j) to interfere with or circumvent the security features of the Website and Services, third party products and services, or the Internet. We reserve the right to terminate your use of the Website and Services for violating any of the prohibited uses.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Intellectual property rights</h2>
<p>“Intellectual Property Rights” means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by the Operator or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with the Operator. All trademarks, service marks, graphics and logos used in connection with the Website and Services, are trademarks or registered trademarks of the Operator or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Website and Services may be the trademarks of other third parties. Your use of the Website and Services grants you no right or license to reproduce or otherwise use any of the Operator or third party trademarks.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Limitation of liability</h2>
<p>To the fullest extent permitted by applicable law, in no event will the Operator, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of the Operator and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount no greater than one dollar or any amounts actually paid in cash by you to the Operator for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Indemnification</h2>
<p>You agree to indemnify and hold the Operator and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys’ fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website and Services or any willful misconduct on your part.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Severability</h2>
<p>All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Dispute resolution</h2>
<p>The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of United Arab Emirates without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of United Arab Emirates. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in United Arab Emirates, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Changes and amendments</h2>
<p>We reserve the right to modify this Agreement or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page, send you an email to notify you. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.</p><br/>
<p>An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Acceptance of these terms</h2>
<p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services. This terms and conditions policy was created with the <a target="_blank" href="https://www.websitepolicies.com/terms-and-conditions-generator" rel="noopener">terms and conditions generator</a>.</p><br/>
<h2 class = 'underline mb-1 sm:text-lg text-md'>Contacting us</h2>
<p>If you have any questions, concerns, or complaints regarding this Agreement, we encourage you to contact us using the details below:</p><br/>
<p>sp&#105;re&#105;nsi&#103;h&#116;s&#49;&#64;gm&#97;il&#46;&#99;o&#109;</p><br/>
<p>This document was last updated on July 13, 2022</p><br/></h2>
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
  </div>
  </div></div>
  )
}

export default TermsModal