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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const randomIndex = Math.floor(Math.random() * 57);
  const Quotes = quotes[randomIndex].quotes;

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const partners = [
    { src: "/images/juan consulting.Webp", alt: "Juan Consulting" },
    { src: "/images/chaordic global.Webp", alt: "Chaordic Global" },
    { src: "/images/WOFL Network.Webp", alt: "WOFL Network" },
    { src: "/images/grin.Webp", alt: "Grin" },
    { src: "/images/stop the cycle.Webp", alt: "Stop the Cycle" },
    { src: "/images/the sanctuary missions.Webp", alt: "Sanctuary Missions" },
  ];

  const handleClick = () => {
    window.location.href = "https://drive.google.com/file/d/1gekdrg4JTXGoJvInyY8HOvixfA6GaDDe/view?usp=drivesdk";
  };

  return (
    <>
      <nav className="bg-gray-100 px-4 py-3 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/logo.Webp" alt="Logo" className="rounded-lg h-20 w-20" />
            <h1 className="py-2 text-3xl md:text-4xl sm:text-5xl font-bold ms-2 text-blue-900 ml-2 Mont">
              JUAN CONSULTING
            </h1>
          </div>

          <div className="md:hidden">
            <button
              id="menu-btn"
              onClick={toggleMobileMenu}
              className="text-black-600 focus:outline-none w-14 sm:w-20"
            >
              {isMobileMenuOpen ? (
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-32 h-32" style={{ color: 'black' }} fill="black" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
              )}
            </button>
          </div>

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
            
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:block flex flex-col space-y-2 mt-4">
            <a href="/about" className="text-gray-600 text-lg hover:text-blue-500 hover:font-bold">ABOUT</a>
            <a href="/services" className="text-gray-600 text-lg hover:text-blue-500 hover:font-bold">SERVICES</a>
            <a href="/contact" className="text-gray-600 text-lg hover:text-blue-500">CONTACT</a>
          </div>
        )}
      </nav>

      <div className="container bg-blue-900 mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="py-12">
            <h1>
              <TypeAnimation
                sequence={[
                  'Unlock your potential with expert Consulting and Training in Human Capital Development.', 1000,
                  'Empower yourself with Leadership and Relationship Management skills.', 1000,
                  'Forge fulfilling relationships and happy homes.', 1000,
                  'Discover your purpose and rise to prominence in your chosen domain.', 1000,
                  'Make a significant impact on a global scale.', 1000,
                  'Join us today to become a powerful contributor to society.', 1000,
                  'Juan Consulting - Empowering you to dominate your field.', 100,
                ]}
                wrapper="span"
                className="text-center my-12 text-2xl text-white font-bold"
                speed={150}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div>
            <img src="/images/1.Webp" alt="Start" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="text-center py-16">
        <h1 className="text-3xl font-extrabold mb-8 animate-bounce Special-Elite sm:text-black py-20">
          "{Quotes}"
        </h1>
        <img src="/images/quote-icon.Webp" alt="grow" className="mx-auto h-12 border bg-white animate-pulse" />
      </div>

      {/* Company Section */}
      <div className="mx-auto py-16">
        <img src="images/The company.Webp" className="object-fill w-full h-auto px-20 mx-auto" />

        <section className="py-16">
          <hr className="mx-auto text-blue-700" />
          <h1 className="text-4xl Mont font-bold text-center  py-5 text-blue-800">TESTIMONIALS</h1>
          <hr className="mx-auto text-blue-700" />

          <Carousel
            className="mx-11 mt-12"
            swipeable
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            responsive={responsive}
          >
            {carousel.map((item) => (
              <Product key={item.id} name={item.name} imageUrl={item.imageUrl} text={item.text} />
            ))}
          </Carousel>
        </section>
      </div>

      {/* Partners Section */}
      <div className="py-16">
        <hr className="mx-auto text-blue-700 w-1/2" />
        <h1 className="text-4xl font-bold text-center  py-5 Mont text-blue-800">OUR PARTNERS</h1>
        <hr className="mx-auto  w-1/2 text-blue-700" />

        <div className="max-w-4xl mx-auto mt-10 px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={2000}
            className="rounded-2xl shadow-lg"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center rounded-lg shadow-md p-4 transition-opacity duration-1000">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-40 bg-white sm:w-48 md:w-56 lg:w-64 object-contain opacity-90 hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <ul className="flex flex-col md:flex-row gap-4 text-center md:text-left">
            <li onClick={handleClick} className="hover:text-sky-400 cursor-pointer">Stop The Cycle</li>
            <li><a href="/About" className="hover:text-sky-400">About</a></li>
            <li><a href="/" className="hover:text-sky-400">Contact</a></li>
          </ul>

          <div className="flex gap-4">
            <a href="https://linkedin.com/in/uche-juan-augustine"><img src='/images/linkedin.Webp' className='w-11 hover:animate-bounce'/></a>
            <a href="https://facebook.com/share/15mF4WDbD7"><img src="images/facebook.Webp" className='w-11 hover:animate-bounce'/></a>
            <a href="https://instagram.com/uchejuan_augustine"><img src="images/instagram.Webp" className='w-11 hover:animate-bounce'/></a>
          </div>

          <div className="text-center md:text-right">
            <p>Impact is Living</p>
            <p>&copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
