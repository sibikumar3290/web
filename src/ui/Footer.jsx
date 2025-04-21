import React from 'react';
import sectionImg from '../assets/section.jpg';
const Footer = () => {
  return (
    <footer className="bg-cover bg-center text-white py-12 px-6 md:px-20"   style={{ backgroundImage: `url(${sectionImg})` }}>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="font-semibold text-white text-lg">Phone</h3>
            <p className="text-sm">+91 73393 22807,<br />+91 73055 23415</p>
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg">Address</h3>
            <p className="text-sm">Madurai, Tamil Nadu, India</p>
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg">Email</h3>
            <p className="text-sm">jpmachaura@gmail.com</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Drop Us A Line</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="Name" className="w-full border-b border-gray-400 bg-transparent py-2 outline-none" />
              <input type="email" placeholder="Email" className="w-full border-b border-gray-400 bg-transparent py-2 outline-none" />
              <input type="text" placeholder="Subject" className="w-full border-b border-gray-400 bg-transparent py-2 outline-none" />
            </div>
            <textarea placeholder="Message" rows="3" className="w-full border-b border-gray-400 bg-transparent py-2 outline-none"></textarea>
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Send</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-10 pt-4 text-center text-sm text-gray-300">
        © 2025, Website Created By <span className="text-orange-500">developer</span> All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
