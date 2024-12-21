import { useState } from 'react';
import './App.css';
import quotes from './Quotes';



function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const randomIndex =  [Math.floor(Math.random()*57)];

  const  Quotes = quotes[randomIndex].quotes;




  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-gray-100 px-4 py-3 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="rounded-lg h-20 w-20" />
            <h1 className="py-2 text-3xl md:text-4xl sm:text-5xl font-bold ms-2 text-blue-900 ml-2">
              JUAN CONSULTING
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              onClick={toggleMobileMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <a className="text-gray-600 text-2xl hover:text-blue-500" href="/About">
                ABOUT
              </a>
            </li>
            <li>
              <a className="text-gray-600 text-2xl hover:text-blue-500" href="/Services">
                SERVICES
              </a>
            </li>
            <li>
              <a className="text-gray-600 text-2xl hover:text-blue-500" href="/Contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:block flex flex-col space-y-2 mt-4">
            <a href="/about" className="text-gray-600 text-lg hover:text-blue-500">
              ABOUT
            </a>
            <a href="/services" className="text-gray-600 text-lg hover:text-blue-500">
              SERVICES
            </a>
            <a href="/contact" className="text-gray-600 text-lg hover:text-blue-500">
              CONTACT
            </a>
          </div>

        )}
        
      </nav>

      <div className="container bg-blue-900 mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h1 className="text-center my-20 md:my-20 sm:my-20 text-2xl text-white font-bold">
              Unlock your potential with expert Consulting & Training in Human Capital
              Development.
            </h1>
          </div>

          {/* Right Section */}
          <div>
            <img src="/images/home page vector.png" alt="Start" className="w-full h-auto" />
          </div>
        </div>

        {/* Quotes Section */}
        <div className="text-center my-40 md:my-40 sm:my-56">
          <h1 className="text-2xl text-white font-bold mb-8 animate-bounce"> {Quotes} </h1>
          <img src="/images/plant.png" alt="grow" className="mx-auto h-32" />
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center my-10">
          <a href="/Survey">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 animate-bounce">
              Get Started
            </button>
          </a>
        </div>
      </div>
      


      <div className='mx-auto py-28'>  

<img src='images/The company.png' className='object-fill lg:h-full w-full px-20 mx-auto'/>


      </div>
      {/* Sponsors Section */}
      <br />
      <hr className="mx-auto text-blue-700" />

      <h1 className="text-4xl font-bold text-center text-blue-700 mx-0 my-0 py-5">OUR PARTNERS</h1>
      <hr className="mx-auto text-blue-700" />
      <br />
      <div className="my-20 md:my-20 sm:my-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/juan consulting.png" alt="Product 1 Image" className="w-full mb-4" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/chaordic global.png" alt="Product 2 Image" className="rounded-lg w-full mb-4" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/WOFL Network.png" alt="Product 3 Image" className="rounded-lg w-full mb-4" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/clarity.png" alt="sponsors" className="w-full rounded-lg bg-black mb-4" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/grin.png" alt="sponsors" className="rounded-lg w-full mb-4" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/stop the cycle.png" alt="sponsors" className="rounded-lg w-full mb-4" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/the sanctuary missions.png" alt="sponsors" className="rounded-lg w-full mb-4" />
        </div>
      </div>
      
      <footer className="relative py-20 flex flex-col items-center bg-blue-900 overflow-hidden md:py-40">
    <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                    <ul className="list-disc list-inside space-y-8">
                        <li><a href="/Services" className="hover:text-sky-400 transition">Services</a></li>

                        <li><a href="/About" className="hover:text-sky-400 transition">About</a></li>
                
                
                    </ul>

                    <ul role="list" className="space-y-8">
                     
                        <li>
                            <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <img src='/images/linkedin.png'  className="w-5">
                                </img>
                                <span>linkedln</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                                <span>Facebook</span>
                            </a>
                        </li>
                      
                        <li>
                            <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                                <span>Instagram</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                    <span className="block text-gray-300">Impact is Living</span>

                    <span className="block text-gray-300">Tailus Blocks &copy; 2024</span>

                    <span className="flex justify-between text-white">
                        <a href="#" className="font-semibold"> Partner with Stop the cycle initiative today </a> 
                    </span>

                    <span className="block text-gray-300">Need help? <a href="/Contact" className="font-semibold text-white"> Contact Us</a></span>
                </div>
            </div>
        </div>
    </div>
    <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
    </div>
    <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
</footer>
    </>
  );
}

export default HomePage