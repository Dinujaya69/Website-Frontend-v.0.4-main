import React from "react";
import Image from "next/image";
import Link from "next/link";
import footer_logo from "../images/footerlogo.png";
import Facebook from "../images/icons/facebook.png";
import Whatsapp from "../images/icons/whatsapp.png";
import Instagram from "../images/icons/instagram.png";
import Youtube from "../images/icons/youtube.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#0A142F] relative overflow-hidden py-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div>
            <h1 className="font-bold mb-4">Quick Navigation</h1>
            <div className="opacity-70 space-y-2 text-sm">
              <h6>Home</h6>
              <h6>About Us</h6>
              <h6>Service</h6>
              <h6>Blog</h6>
              <h6>Case Studies</h6>
              <h6>Contact Us</h6>
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-4">Join With Us</h1>
            <div className="opacity-70 space-y-2 text-sm">
              <h6>Intern Software Engineer</h6>
              <h6>Business Developer Manager</h6>
              <h6>UX Engineer</h6>
              <h6>Full Stack Developer</h6>
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-4">Legal</h1>
            <div className="opacity-70 space-y-2 text-sm">
              <h6>Privacy Policies</h6>
              <h6>Terms And Condition</h6>
            </div>

            <div className="mt-8">
              <h1 className="font-bold lg:grid-cols-1 mb-4">Service</h1>
              <div className="opacity-70 space-y-2 text-sm">
                <h6>Web 3.0</h6>
                <h6>Software & Mobile App</h6>
                <h6>Social media Manage</h6>
                <h6>AI Marketing</h6>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <Image
              src={footer_logo}
              alt="Cypso Logo"
              width={200}
              height={200}
              className="mx-auto lg:mx-0"
            />
            <div className="mt-8">
              <div className="flex items-center mb-6">
                <input
                  type="email"
                  placeholder="Subscribe For news & Offers"
                  className="p-2 rounded-l bg-[#1E293B] text-white text-sm flex-grow"
                />
                <button className="p-2 bg-blue-500 text-white rounded-r text-sm whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white opacity-20" />

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="#" className="text-white" aria-label="Facebook">
              <Image src={Facebook} alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" className="text-white" aria-label="Instagram">
              <Image src={Instagram} alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="text-white" aria-label="WhatsApp">
              <Image src={Whatsapp} alt="WhatsApp" width={24} height={24} />
            </a>
            <a href="#" className="text-white" aria-label="YouTube">
              <Image src={Youtube} alt="YouTube" width={24} height={24} />
            </a>
          </div>
          <p className="text-sm text-white opacity-70">
            © 2024 Cypso Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
