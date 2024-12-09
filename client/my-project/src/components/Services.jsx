import { useState } from 'react';
import './App.css';


function Services() {
  return (
    <>
      {/* Body Section */}
      <div className="body-service">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">SERVICES</h1>
          <p className="text-2xl font-semibold mb-2 py-8 text-blue-700 fontp">
            Here are the series of workshops and trainings at Juan Consulting.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="images/value.png" alt="Self Leadership" className="w-full mb-4" />
              <h2 className="text-2xl font-semibold mb-2 ">Self Leadership</h2>
              <p className="text-blue-800 font-bold py-9">
                The value master class ... Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/eq.png" alt="Emotional Intelligence" className="w-full mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Emotional Intelligence</h2>
              <p className="text-blue-800 font-bold py-9">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged...
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="/images/public speaking.png"
                alt="Public Speaking"
                className="w-full mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">Public Speaking</h2>
              <p className="text-blue-800 font-bold py-9">
                Learn the art and act of public speaking... Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="/images/love.png"
                alt="Marriage Counselling"
                className="w-full mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">Marriage Counselling (MSCLI)</h2>
              <p className="text-blue-800 font-bold py-9">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
