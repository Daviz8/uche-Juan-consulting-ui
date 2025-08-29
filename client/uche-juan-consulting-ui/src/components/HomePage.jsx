import { useState } from 'react';
import './App.css';
import quotes from './Quotes';
import { TypeAnimation } from 'react-type-animation';
import carousel from './carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
 

function HomePage() {

  // HAMBURGER MENU MOBILE
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

/** CHOOSING A RANDOM QUOTE */
  const randomIndex =  [Math.floor(Math.random()*57)];
  const  Quotes = quotes[randomIndex].quotes;


  // TESTIMONIALS
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

 const partners = [
    { src: "/images/juan consulting.Webp", alt: "Juan Consulting" },
    { src: "/images/chaordic global.Webp", alt: "Chaordic Global" },
    { src: "/images/WOFL Network.Webp", alt: "WOFL Network" },
    { src: "/images/grin.Webp", alt: "Grin" },
    { src: "/images/stop the cycle.Webp", alt: "Stop the Cycle" },
    { src: "/images/the sanctuary missions.Webp", alt: "Sanctuary Missions" },
  ];

// STOP THE CYCLE BROCHURE LINK
const handleClick = () => {
window.location.href = "https://drive.google.com/file/d/1gekdrg4JTXGoJvInyY8HOvixfA6GaDDe/view?usp=drivesdk";
}



  return (
    <>
      <nav className="bg-gray-100 px-4 py-3 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img src="/images/logo.Webp" alt="Logo" className="rounded-lg h-20 w-20" />
            <h1 className="py-2 text-3xl md:text-4xl sm:text-5xl font-bold ms-2 text-blue-900 ml-2">
              JUAN CONSULTING
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              onClick={toggleMobileMenu}
              className="text-gray-600 focus:outline-none w-12"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-12 h-12"
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
                  className="w-12 h-12"
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
              <a className="text-gray-600 text-2xl hover:text-blue-500 hover:font-bold" href="/About">
                ABOUT
              </a>
            </li>
            <li>
              <a className="text-gray-600 text-2xl hover:text-blue-500 hover:font-bold" href="/Services">
                SERVICES
              </a>
            </li>
            {/**<li>
              <a className="text-gray-600 text-2xl hover:text-blue-500" href="/Contact">
                CONTACT
              </a>
            </li>*/}
          </ul>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:block flex flex-col space-y-2 mt-4">
            <a href="/about" className="text-gray-600 text-lg hover:text-blue-500 hover:font-bold">
              ABOUT
            </a>
            <a href="/services" className="text-gray-600 text-lg hover:text-blue-500 hover:font-bold">
              SERVICES
            </a>
           
            {/** <a href="/contact" className="text-gray-600 text-lg hover:text-blue-500">
              CONTACT
            </a> **/}
          </div>

        )}
        
      </nav>

      <div className="container bg-blue-900 mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Left Section */}
          <div className="py-16">
            <h1>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Unlock your potential with expert Consulting and Training in Human Capital Development.',  
       1000,

        'Empower yourself with Leadership and Relationship Management skills.',
     1000,

    
        'Forge fulfilling relationships and happy homes.',
     1000,

        'Discover your purpose and rise to prominence in your chosen domain.',
     1000,

        'Make a significant impact on a global scale.',
     1000,

        'Join us today to become a powerful contributor to society.',
     1000,

        'Juan Consulting - Empowering you to dominate your field.',
        100,


      ]}

      wrapper="span"
      className="text-center my-20 md:my-20 sm:my-20 text-2xl text-white font-bold"
      speed={150}

      repeat={Infinity}
    />
            </h1>
          </div>

          {/* Right Section */}
          <div>
            <img src="/images/1.Webp" alt="Start" className="w-full h-auto " />
          </div>
        </div>

        {/* Get Started Button 
        <div className="flex justify-center my-10">
          <a href="/Survey">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 animate-bounce">
              Get Started
            </button>
          </a>
        </div>
        */}
      </div>
      

        {/* Quotes Section */}
        <div className="text-center p-20 lg:my-10  md:my-20 sm:my-20">
          <div className="bgg"></div>
<div className="bgg bgg2"></div>
<div className="bgg bgg3"></div>
<div className="contents">
  <h1 className="text-3xl text-white font-extrabold mb-8 animate-bounce Special-Elite "> "{Quotes}" </h1>
          <img src="/images/quote-icon.Webp" alt="grow" className="mx-auto h-12 border bg-white animate-pulse" />
</div>
        </div>


      <div className='mx-auto py-28'>  
      <img 
  src='images/The company.Webp' 
  className="bigger object-fill w-full h-auto sm:w-full sm:h-full lg:w-full lg:h-full px-20 mx-auto"
/>

<section>  
  <br /> <br />
   <hr className="mx-auto text-white" />
      <h1 className="text-4xl font-bold text-center text-white mx-0 my-0 py-5">TESTIMNONIALS</h1>
      <hr className="mx-auto text-white" />
     
     <br /><br />
       <Carousel className='mx-11' swipeable={true}  customTransition="all .5"
  transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}    infinite={true}
  autoPlaySpeed={3000}  containerClass="carousel-container"  responsive={responsive}>
   {carousel.map((item) => (
    <Product
      key={item.id}
      name={item.name }
      imageUrl = {item.imageUrl}
      text={item.text}
      
    />
  ))}
 </Carousel>

 
 {<div className='lg:hidden md:hidden   '>
  <svg id="swipe-right-gesture" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
	<path d="M 20 7 C 20 15 8 15 8 7 C 8 -1 20 -1 20 7"  fill="rgba(255,255,255,0.7)">
		<animate attributeName="d" values="M 20 7 C 20 15 8 15 8 7 C 8 -1 20 -1 20 7; M 53 7 C 53 15 45 12 20 7 C 45 2 53 -1 53 7; M 53 7 C 53 15 45 12 26 7 C 45 2 53 -1 53 7" dur="2s" repeatCount="indefinite" />
		<animate attributeName="opacity" values="1; 0.3; 0" dur="2s" repeatCount="indefinite"/>
	</path>
	<path d="M 20 7 C 20 15 8 15 8 7 C 8 -1 20 -1 20 7"  fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="0.5">
		<animate attributeName="d" values="M 20 7 C 20 15 8 15 8 7 C 8 -1 20 -1 20 7; M 54 7 C 54 16 45 14 17 7 C 45 0 54 -2 54 7; M 54 7 C 54 16 45 13 25 7 C 45 1 54 -2 54 7" dur="2s" repeatCount="indefinite" />
		<animate attributeName="opacity" values="1; 0.3; 0" dur="2s" repeatCount="indefinite"/>
	</path>
    <path className="hand" fill="#000" d="M 8 7 L 8 33 C 1 36 0 49 5 57 C 11 65 17 69 27 69 C 49 69 46 34 46 33 C 46 30 43 28 41 28 C 40 28 40 28 39 28 C 39 25 37 23 33 23 C 32 23 30 23 29 25 C 29 22 27 21 24 21 C 23 21 21 21 20 23 L 20 7 C 20 4 17 1 14 1 S 8 4 8 7 Z M 24 50">
    <animateTransform attributeName="transform" type="translate" values="0, 0; 40, -7; 0, 0" dur="2s" repeatCount="indefinite"/>
		<animateTransform attributeName="transform" type="rotate" values="0; 40; 0" dur="2s" repeatCount="indefinite" additive="sum" />
		<animateTransform attributeName="transform" type="scale" values="1; 0.93; 1" dur="2s" repeatCount="indefinite" additive="sum" />
    </path>
  </svg>
   </div>}
       </section>
 

      </div>
        <div className=" py-2">
      {/* Heading */}
      <hr className="mx-auto text-white w-1/2" />
      <h1 className="text-4xl font-bold text-center text-white py-2">OUR PARTNERS</h1>
      <hr className="mx-auto text-white w-1/2" />

      {/* Carousel */}
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000, // 3s per slide
            disableOnInteraction: false,
          }}
          speed={2000} // 2s smooth transition
          className="rounded-2xl shadow-lg"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center bg-white rounded-lg shadow-md p-4 transition-opacity duration-1000">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="w-40  bg-white  sm:w-48 md:w-56 lg:w-64 object-contain opacity-90 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

      <footer className="relative py-20 flex flex-col items-center bg-blue-900 overflow-hidden md:py-40">
    <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                    <ul className="list-disc list-inside space-y-8">
                        <li onClick={handleClick} className="hover:text-sky-400 transition">Stop The Cycle</li>

                        <li><a href="/About" className="hover:text-sky-400 transition">About</a></li>
                
                
                    </ul>

                    <ul role="list" className="space-y-8">
                     
                        <li>
                            <a href="https://www.linkedin.com/in/uche-juan-augustine-1b07b321a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <img src='/images/linkedin.Webp'  className="w-5">
                                </img>
                                <span>linkedln</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/share/15mF4WDbD7/?mibextid=wwXIfr" className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                                    <img src='/images/facebook.Webp'  className="w-5"></img>
                                <span>Facebook</span>
                            </a>
                        </li>
                      
                        <li>
                            <a href="https://www.instagram.com/uchejuan_augustine?igsh=MXBzbzhicDd0Nmpveg==" className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                                    <img src='/images/instagram.Webp'  className="w-5"></img>
                                <span>Instagram</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                    <span className="block text-gray-300">Impact is Living</span>

                    <span className="block text-gray-300">Daviz  &copy; 2024</span>

                    <span className="flex justify-between text-white">
                        <p className="font-semibold"> Partner with Stop the cycle initiative today </p> 
                    </span>

                    <span className="block text-gray-300">Need help? <a href="/" className="font-semibold text-white"> Contact Us</a></span>
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