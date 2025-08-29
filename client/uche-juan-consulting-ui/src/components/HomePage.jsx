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
            <h1 className="py-2 text-3xl md:text-4xl sm:text-5xl font-bold ms-2 text-blue-900 ml-2 Mont">
              JUAN CONSULTING
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              onClick={toggleMobileMenu}
              className="text-black-600  focus:outline-none w-14 sm:w-20"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-32 h-32"
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
                  className="w-32 h-32 "
                  style={{color:'black'}}
                  fill='black'
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
              <a className="text-gray-600 text-2xl font-semibold hover:text-blue-500 hover:font-bold" href="/About">
                ABOUT
              </a>
            </li>
            <li>
              <a className="text-gray-600 font-semibold text-2xl hover:text-blue-500 hover:font-bold" href="/Services">
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
      
<br /><br />
        {/* Quotes Section */}
        <div className="text-center p-20 lg:my-10  md:my-20 sm:my-20">
          <div className="bgg"></div>
<div className="bgg bgg2"></div>
<div className="bgg bgg3"></div>
<div className="contents">
  <h1 className="text-3xl lg:text-white font-extrabold mb-8 animate-bounce Special-Elite  sm:text-black"> "{Quotes}" </h1>
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
   <hr className="mx-auto  sm:text-black lg:text-white" />
      <h1 className="text-4xl Mont font-bold text-center lg:text-white mx-0 my-0 py-5 sm:text-black">TESTIMNONIALS</h1>
      <hr className="mx-auto lg:text-white  sm:text-black" />
     
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
      <hr className="mx-auto lg:text-white sm:text-black w-1/2" />
      <h1 className="text-4xl font-bold text-center lg:text-white py-2 Mont sm:text-black">OUR PARTNERS</h1>
      <hr className="mx-auto lg:text-white w-1/2 sm:text-black"  />

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
              <div className="flex justify-center items-center rounded-lg shadow-md p-4 transition-opacity duration-1000">
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
    <br /><br />
    
<footer className="bg-black text-gray-300 py-10">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Left side */}
    <ul className="flex flex-col md:flex-row gap-4 text-center md:text-left">
      <li onClick={handleClick} className="hover:text-sky-400 cursor-pointer">Stop The Cycle</li>
      <li><a href="/About" className="hover:text-sky-400">About</a></li>
      <li><a href="/" className="hover:text-sky-400">Contact</a></li>
    </ul>

<br />

    {/* Social links */}
    <div className="flex gap-4">
      <a href="https://linkedin.com/in/uche-juan-augustine" className="hover:text-sky-400"><img src='/images/linkedin.Webp' className='w-11 hover:animate-bounce'/> </a>
      <a href="https://facebook.com/share/15mF4WDbD7" className="hover:text-sky-400"> <img src="images/facebook.Webp" className='w-11 hover:animate-bounce'/></a>
      <a href="https://instagram.com/uchejuan_augustine" className="hover:text-sky-400"> <img src="images/instagram.Webp" className='w-11 hover:animate-bounce'/></a>
    </div>

<br />

    {/* Right side */}
    <div className="text-center md:text-right">
      <p>Impact is Living</p>
      <p> &copy; {new Date().getFullYear()}</p>
    </div>
  </div>
</footer>


    </>
  );
}

export default HomePage