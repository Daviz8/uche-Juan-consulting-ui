/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
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
                <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center md:text-left">About</h1>
                <p className="text-md md:text-lg text-blue-900 font-serif">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
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
                <p className="text-md md:text-lg font-bold font-serif text-blue-800">
                  Uche Juan Augustine is a trained Petroleum Engineer and the Africa Sales Director of Unicat Catalyst
                  in the United States.
                  <br />
                  <br />
                  He's the CEO of Juan Consulting which focuses on training, consulting and building executives, staff,
                  and youths around human capital development, leadership, and relationship management.
                  <br />
                  <br />
                  He is the Lead Pastor of a thriving youth ministry; The Sanctuary Missions International.
                  <br />
                  He's a member of the John Maxwell Team; The No. 1 leading Leadership Team in the world.
                  <br />
                  <br />
                  He is a sought-after speaker nationally and globally. His national summits attract over 2000
                  audience.
                  <br />
                  <br />
                  He's an admirable and exceptional relationship, leadership, and personal development expert and clergy
                  whose focus in almost two decades has been to inspire, impact, and influence youths to discover, grow
                  themselves and dominate/influence their area of relevance.
                  <br />
                  <br />
                  As a Relationship Coach & Expert, he trains, consults, and guides both singles and married
                  individuals on how to attract and be the right partner and how to build a happy relationship and home.
                  <br />
                  <br />
                  He's happily married to his beautiful wife; Mrs. Christabel Augustine, and has three lovely kids.
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
