"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CiShoppingCart } from 'react-icons/ci';
import { PiLockLaminatedFill, PiSecurityCameraBold } from 'react-icons/pi';

const images1 = [
  '/Group4.png',
  '/Component 1.png',
  '/Component 10 (1).png',
]
const images2 = [
  '/Section (1).png',
  '/Component 9.png',
  '/banner-17.jpg.png',
]

const imageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.08, boxShadow: '0 8px 32px rgba(162,152,117,0.25)' },
}

const page = () => {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-16 items-center py-10">
      <h1>Shop By Categories</h1>
      <ul className="flex flex-col md:flex-row justify-between items-center gap-3 font-bold w-full max-w-2xl mx-auto" >
        <li className='text-2xl'>Earrings</li>
        <li className='text-2xl'>Necklace</li>
        <li className='text-2xl'>Bracelet</li>
        <li className='text-2xl'>Rings</li>
      </ul>
      {/* First Row */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {images1.map((src, idx) => (
          <motion.div
            key={src}
            variants={imageVariants}
            whileHover="whileHover"
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="rounded-xl overflow-hidden bg-white shadow-md"
          >
            <Image
              src={src}
              width={400}
              height={400}
              alt={`Category Image ${idx + 1}`}
              className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
      {/* Second Row */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {images2.map((src, idx) => (
          <motion.div
            key={src}
            variants={imageVariants}
            whileHover="whileHover"
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="rounded-xl overflow-hidden bg-white shadow-md"
          >
            <Image
              src={src}
              width={400}
              height={400}
              alt={`Category Image ${idx + 4}`}
              className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Info Cards Row */}
      <motion.div
        className="flex flex-col md:flex-row justify-between md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl items-center md:items-stretch"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {[
          {
            icon: <CiShoppingCart size={32} />,
            title: 'Shipping Worldwide',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
          {
            icon: <PiLockLaminatedFill size={32} />,
            title: 'Secure Payment',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
          {
            icon: <PiSecurityCameraBold size={32} />,
            title: '24/7 Support',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              whileHover: { scale: 1.08, boxShadow: '0 8px 32px rgba(162,152,117,0.15)' },
            }}
            whileHover="whileHover"
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full max-w-xs min-w-[220px] mx-auto"
          >
            <div className="mb-2 text-[#A29875] ">{item.icon}</div>
            <h1 className="text-2xl font-semibold mb-1 text-center">{item.title}</h1>
            <p className="text-sm text-center text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default page
