import { useState } from 'react'
import './App.css';




function Contact() {

  return (
    <>


<div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold text-center mb-4 text-blue-900">CONTACT US</h2>
    <form id="contactForm" className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">Send Message</button>
      </div>
    </form>
  </div>
    </>
  )
}

export default Contact
