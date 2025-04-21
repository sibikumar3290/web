import React, { useState } from 'react';
import logo from '../assets/logo_updated.jpeg';
import aboutImg from '../assets/about.jpg';
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';
import Footer from '../ui/Footer';
import m1vv from '../assets/m1vv.jpg';
import Testimonials from './Testimonials';
export default function Index() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-sans" id="home">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="#">
            <img src={logo} alt="Logo" className="h-20" />
          </a>
          <ul className="hidden md:flex space-x-6">
            <li><a className="text-gray-700 hover:text-blue-500" href="#service">Our Service</a></li>
            <li><a className="text-gray-700 hover:text-blue-500" href="#about">About Us</a></li>
            <li><a className="text-gray-700 hover:text-blue-500" href="#portfolio">Careers</a></li>
            <li><a className="text-gray-700 hover:text-blue-500" href="#blog">Blog</a></li>
            <li><a className="text-gray-700 hover:text-blue-500" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${m1vv})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center">
          <h2 className="text-xl md:text-2xl">Precision in Data, Excellence in Quality</h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">MACH AURA DATALOGIX</h1>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1500 200">
            <path fill="white" d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"/>
          </svg>
        </div>
      </header>

      {/* Service Section */}
      <section id="service" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-2">Our Service</h2>
          <p className="text-center text-gray-600 mb-10">Precision in Data, Excellence in Quality.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["What We Do", "Role of Our Operators", "Safe and Secure Handling"].map((title, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <span className="text-blue-500 font-bold text-sm">{`0${index + 1}`}</span>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">
                  {index === 0 && "We deliver fast, accurate data entry services for both digital and manual records..."}
                  {index === 1 && "Our data entry operators are highly organized and detail-oriented..."}
                  {index === 2 && "We ensure the confidentiality and accuracy of all data..."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold">About Company</h3>
              <h4 className="text-md text-gray-600 mb-4">Architecto provident deserunt</h4>
              <p>MACH AURA DATALOGIX is a fast-growing data entry services startup...</p>
              <img src={aboutImg} alt="About" className="w-full mt-4 shadow" />
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src={about1} alt="About 1" className="w-full shadow" />
                <img src={about2} alt="About 2" className="w-full shadow" />
              </div>
              <p className="mt-4">Our team is led by <b>Mr. Praveen. P</b> and <b>Ms. Preethi Varsha. D</b>...</p>
              <p className="mt-2 font-semibold">We aim to empower businesses by offering reliable and efficient data entry services...</p>
              <p className="mt-2">Backed by secure systems and a skilled team...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="portfolio" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-black">Careers</h2>
          <p className="mb-6">Join our growing team and shape the future of data services with us.</p>

          <select className="border p-2 rounded mb-4">
            <option>All Roles</option>
            <option>Data Entry Executive</option>
            <option>Quality Control Associate</option>
          </select>

          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(true)}
            >
              Apply Now
            </button>
          </div>


          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded shadow max-w-md w-full">
                <h3 className="text-xl font-bold mb-4">Apply for Role</h3>
                <form>
                  <label className="block text-left">Role:</label>
                  <select className="w-full border p-2 mb-3">
                    <option>Data Entry Executive</option>
                    <option>Quality Control Associate</option>
                  </select>

                  <label className="block text-left">Name:</label>
                  <input type="text" className="w-full border p-2 mb-3" placeholder="Enter your name" required />

                  <label className="block text-left">Upload Resume:</label>
                  <input type="file" className="w-full border p-2 mb-3" required />

                  <h4 className="font-bold mb-2">Eligibility Criteria</h4>
                  <p className="text-sm text-left">12th grade, diploma, or any degree</p>
                  <p className="text-sm text-left">Typing speed of 30–40 WPM with good accuracy</p>

                  <div className="mt-4 text-right">
                    <button
                      type="button"
                      className="bg-gray-300 text-black px-3 py-1 mr-2 rounded"
                      onClick={() => setShowModal(false)}
                    >Cancel</button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <Testimonials/>

      <Footer/>
    </div>
  );
}
