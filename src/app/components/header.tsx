/* eslint-disable jsx-a11y/alt-text */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import company_logo from '../images/Cypso Labs website.png'
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();


  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    console.log(e.target);
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-160%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="flex max-xl:ml-20  max-md:ml-6 max-lg:ml-14  bg-[#002C56] text-white ">
      <div className="max-lg:hidden p-5 w-full ">
        <ul className="flex gap-7 ml-28   tracking-wider lg:tracking-wide lg:text-xs text-sm items-center justify-center ">
        <Image src={company_logo} alt='compnay Name' className=' pr-20  mr-28'/>
        <motion.li whileHover={{ scale: 1.2 }} className="hover:text-[#7878FF] ">
            <Link href="/">HOME</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="hover:text-[#7878FF]">
            <Link href="/service">SERVICE</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className=" hover:text-[#7878FF]">
            <Link href="/careers">CAREERS</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="hover:text-[#7878FF]">
            <Link href="/about">ABOUT</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="hover:text-[#7878FF] mr-auto">
            <Link href="/CaseStudies">CASESTUDIES</Link>
          </motion.li>
          <li><button className='bg-[#5EA9FF] rounded-2xl p-4  mr-12'>CONTACT US</button></li>
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;