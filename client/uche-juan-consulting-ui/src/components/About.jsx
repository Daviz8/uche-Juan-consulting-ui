/* eslint-disable react/no-unknown-property */
import Slide from './Slide';


function About() {
  return (
    <>
      <div  className="relative">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="images/bg blue.mp4" type="video/mp4" />
  
        </video>

        {/* Overlay Container */}
        <div className="bg-blue-800 text-white bg-opacity-80 relative z-10">
          
          {/* Container for content */}
          <div className="container mx-auto px-4 py-8">
            
            {/* First section with image and content */}
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg p-6 space-y-6 md:space-y-0 md:space-x-6">
              {/* About Content */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center md:text-left"> Juan Consulting </h1>
                <p className="text-md md:text-lg text-black font-serif font-bold">
                Juan Consulting is a premier training, consulting, and human capital development firm that is dedicated to empowering executives, staff, and youth in leadership, relationship management, and personal development.<br/><br/>

We inspire, impact, and influence individuals from diverse backgrounds to uncover their potential and excel in their areas of expertise, enabling them to dominate their fields.<br/><br/>

Our focused training and consulting services equip both singles and married individuals with the skills to attract the right partner and forge fulfilling relationships and happy homes.<br/><br/>

We are unwavering in our commitment to help you discover your purpose, harness your potential, and rise to prominence in your chosen domain.<br/><br/>

Join us to become a powerful contributor to society and make a significant impact on a global scale.<br/><br/>

                </p>
              </div>
            </div>

            <Slide />

            {/* Second section (Bio section) */}
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg p-6 mt-8 space-y-6 md:space-y-0 md:space-x-6">
              {/* Bio Image */}
              <div className="flex-shrink-0">
                <img src="/images/1.png" alt="Convener" className="w-40 h-auto md:w-60 rounded-lg" />
              </div>

              {/* Bio Content */}
              <div className="flex-1">
                <p className="text-md md:text-lg font-bold font-serif text-black">
                  Uche Juan Augustine is a trained Petroleum Engineer and the Africa Sales Director of Unicat Catalyst
                  in the United States.
                  <br />
                  <br />
                 Uche juan Augustine the CEO of Juan Consulting which focuses on training, consulting and building executives, staff,
                  and youths around human capital development, leadership, and relationship management.
                  <br />
                  <br />
                  He is the Lead Pastor of a thriving youth ministry; The Sanctuary Missions International.
                  <br />
                 Uche juan Augustine a member of the John Maxwell Team; The No. 1 leading Leadership Team in the world.
                  <br />
                  <br />
                  He is a sought-after speaker nationally and globally. His national summits attract over 2000
                  audience.
                  <br />
                  <br />
                 Uche Juan Augustine, an admirable and exceptional relationship, leadership, and personal development expert and clergy
                  whose focus in almost two decades has been to inspire, impact, and influence youths to discover, grow
                  themselves and dominate/influence their area of relevance.
                  <br />
                  <br />
                  As a Relationship Coach & Expert, he trains, consults, and guides both singles and married
                  individuals on how to attract and be the right partner and how to build a happy relationship and home.
                  <br />
                  <br />
                 Uche Juan Augustine is happily married to his beautiful wife; Mrs. Christabel Augustine, and has three lovely kids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
