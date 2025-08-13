import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top */}
      <div 
        className="bg-gray-700 py-4 text-center cursor-pointer hover:bg-gray-600 transition-colors"
        onClick={scrollToTop}
      >
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main footer content */}
      <div className="bg-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Get to Know Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-gray-300">About Amazon</Link></li>
                <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-gray-300">Amazon Science</Link></li>
                <li><Link to="/sustainability" className="hover:text-gray-300">Sustainability</Link></li>
              </ul>
            </div>

            {/* Make Money with Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sell" className="hover:text-gray-300">Sell products on Amazon</Link></li>
                <li><Link to="/fba" className="hover:text-gray-300">Fulfillment by Amazon</Link></li>
                <li><Link to="/advertising" className="hover:text-gray-300">Advertise Your Products</Link></li>
                <li><Link to="/kdp" className="hover:text-gray-300">Amazon KDP</Link></li>
              </ul>
            </div>

            {/* Amazon Payment Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Amazon Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/business-card" className="hover:text-gray-300">Amazon Business Card</Link></li>
                <li><Link to="/rewards-visa" className="hover:text-gray-300">Amazon Rewards Visa</Link></li>
                <li><Link to="/store-card" className="hover:text-gray-300">Amazon Store Card</Link></li>
                <li><Link to="/currency-converter" className="hover:text-gray-300">Amazon Currency Converter</Link></li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/covid-19" className="hover:text-gray-300">Amazon and COVID-19</Link></li>
                <li><Link to="/account" className="hover:text-gray-300">Your Account</Link></li>
                <li><Link to="/orders" className="hover:text-gray-300">Your Orders</Link></li>
                <li><Link to="/shipping" className="hover:text-gray-300">Shipping Rates & Policies</Link></li>
                <li><Link to="/returns" className="hover:text-gray-300">Returns & Replacements</Link></li>
                <li><Link to="/help" className="hover:text-gray-300">Help</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-900 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-xl font-bold">
                <span className="text-white">amazon</span>
                <span className="text-orange-400">.com</span>
              </div>
            </Link>

            {/* Language and country selector */}
            <div className="flex items-center space-x-4 text-sm">
              <select className="bg-gray-800 text-white border border-gray-600 px-3 py-1 rounded">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
              <select className="bg-gray-800 text-white border border-gray-600 px-3 py-1 rounded">
                <option>USD - U.S. Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
              </select>
              <select className="bg-gray-800 text-white border border-gray-600 px-3 py-1 rounded">
                <option>🇺🇸 United States</option>
                <option>🇨🇦 Canada</option>
                <option>🇬🇧 United Kingdom</option>
              </select>
            </div>
          </div>

          {/* Copyright and links */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">
            <div className="flex flex-wrap justify-center space-x-6 mb-4">
              <Link to="/conditions" className="hover:text-gray-300">Conditions of Use</Link>
              <Link to="/privacy" className="hover:text-gray-300">Privacy Notice</Link>
              <Link to="/interest-ads" className="hover:text-gray-300">Interest-Based Ads</Link>
            </div>
            <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;