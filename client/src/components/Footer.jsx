import { Link } from 'react-router-dom';
import { storeInfo } from '../data/storeInfo';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className=''>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-200">
              <p>
                <a href={`tel:${storeInfo.phone}`} className="hover:text-white transition-colors">
                  Phone: {storeInfo.phone}
                </a>
              </p>
              <p>
                <a href={`fax:${storeInfo.fax}`} className="hover:text-white transition-colors">
                  Fax: {storeInfo.fax}
                </a>
              </p>
              <p className='w-30'>
                <a href={`mailto:${storeInfo.email}`} className="hover:text-white transition-colors">
                  Email: {storeInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location & Hours</h3>
            <div className="space-y-2 text-gray-200">
              <p>{storeInfo.address}</p>
              <a
                href={storeInfo.addressLink || "https://maps.google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-white transition-colors inline-block mt-2"
              >
                View on Map →
              </a>
              <div className="mt-4">
                <p className="font-semibold">Hours:</p>
                <p>{storeInfo.hours}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services" className="text-gray-200 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link to="/delivery" className="text-gray-200 hover:text-white transition-colors">
                Free Delivery
              </Link>
              <Link to="/refill" className="text-gray-200 hover:text-white transition-colors">
                Refill Prescription
              </Link>
              <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2 mb-6">
              <Link to="/privacy" className="text-gray-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/hipaa" className="text-gray-200 hover:text-white transition-colors">
                HIPAA Notice
              </Link>
            </nav>

            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Spectrum Pharmacy. All rights reserved.</p>
          <p className="mt-2 text-sm">Licensed Pharmacy | DEA Registered | HIPAA Compliant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
