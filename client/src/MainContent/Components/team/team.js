import Vismay from './images/vismay.jpg'
import Hunar from './images/hunar.jpg'
import Aditya from './images/aditya.jpg'
import Tina from './images/tina.jpg'


const Team = () => {

    return (
        <div class = 'bg-gradient-to-br px-3 from-blue-100 to-indigo-100 h-full w-screen'>
      <div className="px-4  -mb-4 sm:-mt-1 mt-1.5 block py-16 mx-auto sm:max-w-xl max-w-[500px] md:max-w-full lg:max-w-[1300px] md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 relative bottom-8">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-blue-300">
              Core Team
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="#00008b"
                className="absolute top-0 text-blue-800 -left-28 z-0 hidden w-32 -mt-8 -ml-28 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Welcome</span>
            </span>{' '}
            our talented team of student entrepreneurs
          </h2>
          <p className="text-base relative top-3.5 text-gray-700 md:text-lg">
            Motivated by the objective of providing SMEs with opportunities to sell on online marketplaces, we're building and scaling this service to help sellers build, manage and optimize their product listings- and advance themselves in the plane of e-commerce.
          </p>
        </div>
        <div className="grid md:max-w-[550px] sm:max-w-full max-w-[260px] lg:max-w-[1000px] mx-auto xl:max-w-full gap-10 relative sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover p-1.5 bg-blue-700 grayscale w-full sm:h-56 h-[250px] md:h-64 xl:h-80"
                src={Hunar}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Hunar Miglani
                </p>
                <p className="mb-7 text-xs text-gray-100">Executive Head (CEO)</p>
                <p className="mb-10 text-xs font-semibold tracking-wide text-gray-200">
                  "We help local businesses gain insights they wouldn't elsewhere, and at sustainable costs. The catch is: we help them realize the potential of modern e-commerce."
                </p>
                <div className="flex items-center justify-center space-x-3">
              
                    <a
                    target="_blank"
                    href="mailto: hunarmiglani@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  <svg class="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>

                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover p-1.5 bg-blue-700 grayscale w-full sm:h-56 h-[250px] md:h-64 xl:h-80"
                src={Vismay}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Vismay Suramwar
                </p>
                <p className="mb-7 text-xs text-gray-100">Technology Lead (CTO)</p>
                <p className="mb-10 text-xs font-semibold tracking-wide text-gray-200">
                  "Spire's biggest advantage is its deep-level data fetching capability - we're able to provide our users data analytics that are generally unavailable and uncommon."
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                  target="_blank"
                    href="https://www.linkedin.com/in/vismay-suramwar-08513718b/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
  class="w-6 h-6 text-white fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  ></path>
</svg>
                  </a>


                  <a
                  target="_blank"
                    href="mailto: vismaysurawmwar@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  <svg class="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>

                  </a>
                
                 
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover sm:object-center  p-1.5 bg-blue-700 grayscale w-full sm:sm:h-56 h-[250px] md:h-64 xl:h-80"
                src={Aditya}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Aditya Kathane
                </p>
                <p className="mb-7 text-xs text-gray-100">Financial Head (CFO)</p>
                <p className="mb-10 text-xs font-semibold tracking-wide text-gray-200">
                  "I visualize our offering as an opportunity for businesses to not only increase consumer exposure, but also double down on conversion rates."
                </p>
                <div className="flex items-center justify-center space-x-3">
                


                  <a
                    target="_blank"
                    href="mailto: kathaneaditya@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  <svg class="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>

                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover p-1.5 bg-blue-700 grayscale w-full sm:h-56 h-[250px] md:h-64 xl:h-80"
                src={Tina}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ziran Sun
                </p>
                <p className="mb-7 text-xs text-gray-100">Marketing Head (CMO)</p>
                <p className="mb-10 text-xs font-semibold tracking-wide text-gray-200">
                 "Striving for Excellence, Reliability & Credibility."
                </p>
                <div className="flex items-center justify-center space-x-3">
                
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
      </div>
    );
  };

  export default Team