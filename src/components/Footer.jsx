// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">UrbanOasis</h3>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>



        <div>
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="https://www.facebook.com/profile.php?id=100011722863260&mibextid=ZbWKwL"
             className="hover:text-gray-300">Facebook</a></li>
            <li><a href="https://www.instagram.com/gupta_ayushi__?igsh=ZmluMG5jYnU1YTJm
            " className="hover:text-gray-300">Instagram</a></li>
            <li><a href=" https://www.threads.net/@gupta_ayushi__"
             className="hover:text-gray-300">Twitter</a></li>
            <li><a href=" https://www.linkedin.com/in/ayushi-gupta-837213282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-300">linkdin</a></li>
          </ul>
        </div>


        {/* Right Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h4>
          <p className="text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>Copyright 2024 © Ayushi gupta. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
