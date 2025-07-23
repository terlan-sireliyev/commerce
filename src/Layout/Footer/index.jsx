import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { navigationLinks } from "../../constants/navigation";

const WidthAllPage = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8";

// eslint-disable-next-line react/prop-types
const Footer = ({ isPublishingPage, isFullSinglePage }) => {
  return (
    <footer
      className={`${
        isPublishingPage
          ? "w-full rounded-none"
          : isFullSinglePage
          ? WidthAllPage
          : WidthAllPage
      } m-auto mt-2 rounded-t-md bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-10 text-white`}
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* About Section */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">About Us</h3>
          <p className="leading-relaxed text-gray-300">
            Recognized globally as the best platform for online classifieds, we
            strive to meaningfully connect buyers and sellers. Whether you&apos;re
            searching for your first car or a new home, we&apos;re here to help you
            achieve your dreams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {navigationLinks.map((link, index) => (
              <li key={index} className="transition hover:text-white">
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
          
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Get in Touch</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center space-x-2">
              <HiLocationMarker className="text-lg" />
              <span>123 Tnberries St, Baku, Azerbaijan</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiMail className="text-lg" />
              <span>support@tnberries.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiPhone className="text-lg" />
              <span>+994 (50) 836-69-69</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-8 border-t border-gray-700"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center justify-between space-y-4 text-gray-500 lg:flex-row lg:space-y-0">
        <p className="text-center lg:text-left">
          © 2024 Tnberries Platform. All rights reserved.
        </p>

        <div className="flex space-x-5 text-gray-400">
          <a href="#" className="hover:text-blue-500" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-600" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
