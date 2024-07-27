/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Header from '@/app/components/header'
import Image from 'next/image'
import design from "../../../../public/linear_design.png"
import web from '../../../../public/Website Rectangle 40.png'

const About: React.FC = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-full bg-[#002C56] text-white p-10 flex justify-center">
          <div className="container mx-auto flex flex-col items-center">
            <Image src={web} alt="Hero Image" className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <div className="container mx-auto p-10 text-center">
            <div className='flex gap-10  items-center mt-10'>
            <h2 className="text-4xl font-bold mb-4">We Are Cypso Labs</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
            </p>
            </div>
            <button className="bg-[#5EA9FF] rounded-2xl p-2 mb-10">Contact Us</button>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 bg-[#002C56] p-10 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Transforming Ideas Into Digital Reality</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <button className="bg-[#5EA9FF] rounded-2xl p-2 mt-4">Contact Us</button>
            </div>
            <div className="flex-1 bg-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex-1 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-bold">Trust</h4>
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="flex-1 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-bold">Faster</h4>
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="flex-1 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-bold">Creative</h4>
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="flex-1 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-bold">24 Hours Service</h4>
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold my-8">Our Founders</h3>
          <div className="flex space-x-4">
            <div className="flex-1 bg-gray-100 rounded-lg h-64"></div>
            <div className="flex-1 bg-gray-100 rounded-lg h-64"></div>
            <div className="flex-1 bg-gray-100 rounded-lg h-64"></div>
          </div>
          <h3 className="text-2xl font-bold my-8">Interested in joining a dynamic, empowering, rapidly expanding, and team?</h3>
          <p className="mb-4">Cypso Labs is a dynamic and lively workplace that prioritizes employee satisfaction...</p>
          <button className="bg-[#5EA9FF] rounded-2xl p-2">Contact Us</button>
        </div>
      </div>
    </main>
  );
};

export default About;