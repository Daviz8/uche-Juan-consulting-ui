
import './App.css';



function Contact() {

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


<div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold text-center mb-4 text-white">CONTACT US</h2>
    <form id="contactForm" action="https://formsubmit.co/el/vusubu" method='POST'  className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <input type="email" id="email" name="email" required className="w-full text-black  px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea id="message" name="message" required className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">Send Message</button>
      </div>
    </form>
  </div>
  </div>
  </div>
  </div>
    </>
  )
}

export default Contact
