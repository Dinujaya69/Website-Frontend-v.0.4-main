/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Header from "./components/header";
import design from "../../public/linear_design.png";
import home from "../../public/homepagePic.png";
import office from "../../public/Group 129 1 (2).png";
import Image from "next/image";
import brainstorm from "../../public/Cypso Labs Group 1 (1).png";
import project_counter from "../../public/Website Frame 130.png";
import bulb from "../../public/Group 129 1 (4).png";
import notaion from "../../public/Website Cypso Labs (2).png";
import project_1 from '../../public/Cypso Labs Website (6).png'
import project_2 from '../../public/Cypso Labs Website (7).png'
import project_3 from '../../public/Website Rectangle 13.png'
import project_4 from '../../public/Cypso Labs Website (8).png'
import Footer from "./components/footer";
import Contact from "./components/contact";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <div className="bg-[#002C56] text-white scroll-m-0   pl-32  flex flex-auto flex-row mb-10 pb-10 ">
        <div className=" pt-36 ">
          <h1 className="  text-6xl font-extrabold">
            Discover Innovative <br></br>{" "}
            <h1 className="text-[#5EA9FF]">
              Excellence <span className="text-white">at</span>
            </h1>{" "}
            Cypso Labs
          </h1>
          <p className=" font-medium line-clamp-6 text-sm opacity-30 pt-6">
            Futüté-proof your business. Capitalize on emerging technologies .
            <br></br> For captivating websites to seamless mobile apps,<br></br>
            we elevate your online presence. Let's transform your vision into
            reality.
          </p>
          <div className=" flex gap-5 mt-5">
            <button className=" p-5 rounded-lg px-12 bg-[#5EA9FF]">
              Explore Us
            </button>
            <Link href="/contact" passHref>
              <button className="border-2 border-[#5EA9FF] p-5 rounded-lg px-16">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className=" ml-auto  mt-15  mr-48 mb-5 relative">
          <Image src={design} alt="design" className=" size-[40rem] " />
          <Image
            src={home}
            alt="design"
            className=" size-[30rem] mt-[-35rem] ml-40"
          />
        </div>
      </div>
      <div className=" bg-white flex p-16  pl-28">
        <div>
          <Image src={office} alt="design" className=" size-[30rem]" />
        </div>
        <div className=" pl-24">
          <h1 className=" text-4xl font-bold text-[#002C56] ml-10  tracking-widest leading-snug">
            Empowering Businesses <br></br> with Tailored Digital<br></br>{" "}
            Solutions
          </h1>
          <p className="pl-24 text-sm mt-5 pb-5 opacity-55">
            Our mission is to offer you top-tier services tailored to your
            specific business needs.<br></br>
            Whether you need an eye-catching website, a sleek mobile
            application, robust<br></br> enterprise solutions, or effective
            digital marketing strategies, we have the expertise <br></br> to
            deliver.<br></br>
            We understand that each business has unique challenges and goals.
            Our team of <br></br> experienced professionals is dedicated to
            providing high-quality, customized <br></br> services that help you
            stand out. From the initial consultation to final implementation,
            <br></br> we ensure every aspect of the project meets your
            expectations and drives your <br></br> success. Trust us to be your
            partner in achieving your business objectives with<br></br>{" "}
            precision and excellence.
          </p>
          <div className=" flex pl-24 pt-10 gap-5">
            <button className="  p-4 rounded-lg px-10 bg-[#5EA9FF]">
              Contact Us
            </button>
            <button className="border 2 border-[#5EA9FF] p-4 rounded-lg  px-10">
              Explore Us
            </button>
          </div>
        </div>
      </div>
      <div className="flex m-16">
        <div>
          <h1 className="text-4xl font-bold  ml-10  tracking-widest   leading-10 ">
            We provide affordable <br></br> and efficient digital<br></br>{" "}
            solutions
          </h1>
          <Image src={project_counter} alt="" className="pl-5" />
          <p className="font-medium mt-5 text-sm  opacity-55 pl-12">
            we offer powerful yet budget-friendly options tailored to your
            unique needs. Get your business<br></br>
            online with a sleek website, boost your brand with targeted
            marketing, or streamline <br></br>
            operations with intuitive apps, all without breaking the banke offer
            powerful yet budget <br></br>
            -friendly options tailored to your unique needs. Get your business
            online with a sleek website,<br></br>
            boost your brand with targeted marketing, or streamline operations
            with intuitive apps, all without breaking the bank
          </p>
          <div className=" flex  pl-12 pt-10 gap-5">
            <button className="  p-4 rounded-lg px-10 bg-[#5EA9FF]">
              Contact Us
            </button>
            <button className="border 2 border-[#007F8C] border-opacity-45 p-4 rounded-lg  px-10">
              Explore Us
            </button>
          </div>
        </div>
        <div>
          <Image src={brainstorm} alt="design" className="brainstorm" />
        </div>
      </div>
      <div className="flex mt-[-4%]">
        <div className=" ml-28 mt-[-4%] object-cover border">
          <Image src={bulb} alt="design" className=" size-[30rem]" />
        </div>
        <div className=" pr-28   ml-16">
          <Image src={notaion} alt="design" className="" />
          <p className=" font-normal  mt-5 text-sm  opacity-55 pl-12">
            Our mission is to offer you top-tier services tailored to your
            specific business needs.
            <br />
            Whether you need an eye-catching website, a sleek mobile
            application, robust
            <br /> enterprise solutions, or effective digital marketing
            strategies, we have the expertise
            <br /> to deliver.
            <br />
            We understand that each business has unique challenges and goals.
            Our team of <br /> experienced professionals is dedicated to
            providing high-quality, customized <br /> services that help you
            stand out. From the initial consultation to final implementation,
            <br /> we ensure every aspect of the project meets your expectations
            and drives your
            <br />
            success. Trust us to be your partner in achieving your business
            objectives with <br /> precision and excellence.
          </p>
          <div className="flex flex-col  items-end  mt-24 tracking-wide   leading-relaxed">
            <span className=" font-extrabold ">Dulanjana Lakshan </span>
            <span className="pl-10"> Founder & MD </span>
          </div>
        </div>
      </div>
      <div className=" justify-center flex mt-24">
        <h2 className=" font-bold text-4xl pl-5 ">Featured Of Us</h2>
      </div>
      <div className=" flex  p-28  pb-36">
        <Image src={project_1} alt="design" className="" />
        <Image src={project_2} alt="design" className="" />
        <Image src={project_3} alt="design" className="" />
        <Image src={project_4} alt="design" className="" />
      </div>
      <div className="flex justify-center items-center flex-col tracking-widest   leading-10 ">
        <span className=" font-bold text-[#002C56] text-3xl">
          Interested in joining a dynamic, empowering, rapidly
        </span>
        <span className=" font-bold text-[#002C56] text-3xl">
          {" "}
          expanding, and enjoyable team?
        </span>
      </div>
      <div className="flex  flex-col justify-center px-48 mt-11  leading-snug items-center text-[#002C56] pb-10 ">
        <span className="opacity-55">
          Cypso Labs is a dynamic and lively workplace that prioritizes employee
          satisfaction. We offer{" "}
        </span>
        <span className="opacity-55">
          opportunities for excellence and creativity, allowing innovative ideas
          to be transformed into practical{" "}
        </span>
        <span className="opacity-55">
          products and services, fostering growth at every stage.
        </span>
        <div className=" mt-10">
          <button className="  p-4 rounded-lg px-10 bg-[#5EA9FF] text-white">
            Contact Us
          </button>
        </div>
      </div>{" "}
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
