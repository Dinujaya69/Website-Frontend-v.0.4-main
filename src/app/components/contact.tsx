import React from "react";
import Image from "next/image";
import MapIcon from "../images/icons/map.png";
import PhoneIcon from "../images/icons/call.png";
import EmailIcon from "../images/icons/sms.png";
import MAP2 from "../images/icons/Rectangle 55.png";
import Group123 from "../images/Group 123.png";
import Rectangle40 from "../images/icons/Rectangle 40.png";

const Contact: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="relative mx-auto w-full max-w-screen-xl">
        <div className="relative">
          <Image
            src={Group123}
            alt="Background"
            layout="responsive"
            className="bg-[#002C56]"
          />
        </div>
        <div className="absolute top-0 inset-x-0 z-0 mt-40">
          <Image src={Rectangle40} alt="Background" layout="responsive" />
        </div>
      </div>
      <div className="bg-[#002C56] w-full p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-[#F0FFFC] p-6 rounded-tl-lg md:rounded-l-lg">
              <div className="mb-6">
                <Image
                  src={MapIcon}
                  alt="map"
                  width={30}
                  height={30}
                  className="mb-2"
                />
                <p className="text-sm">Kaluthara, Sri Lanka</p>
              </div>
              <div className="mb-6 bg-[#080846] p-4 rounded-lg text-white">
                <Image
                  src={EmailIcon}
                  alt="email"
                  width={30}
                  height={30}
                  className="mb-2"
                />
                <p className="text-sm">info@cypsolabs.com</p>
              </div>
              <div>
                <Image
                  src={PhoneIcon}
                  alt="phone"
                  width={30}
                  height={30}
                  className="mb-2"
                />
                <p className="text-sm">+94 77 777 7777</p>
              </div>
            </div>
            <div className="md:w-3/5 p-6">
              <h2 className="text-2xl font-bold mb-6">Leave a Message</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  className="w-full h-24 p-2 border-b border-gray-300 focus:outline-none resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-2">
                  *We promise not to disclose your personal information to third
                  parties.
                </p>
                <div className="text-right mt-4">
                  <button
                    type="submit"
                    className="bg-[#002C56] text-white px-8 py-2 rounded"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={MAP2}
              alt="Map"
              layout="responsive"
              width={1000}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
