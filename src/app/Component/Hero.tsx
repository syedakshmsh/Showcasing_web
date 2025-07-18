"use client"


import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
      {/* Left Side: Text */}
      <motion.div
        className="flex-1 space-y-6 text-[#A29875] text-center md:text-left pl-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-6xl sm:text-2xl font-bold">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="text-base md:text-lg ">
          An example of intricate workmanship and detail, elegant necklaces and 
          long and short chains form a part of our desirable collection.
        </p>
        <Button className="bg-[#A29875] px-8 py-2 text-white hover:bg-[#b8ad88] duration-200">
          Explore
        </Button>
      </motion.div>
      {/* Right Side: Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end w-full md:w-auto mt-16 md:mt-0 mr-16 "
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src="/htp.png"
          width={500}
          height={500}
          alt="Hero Image"
          className="w-52 md:w-96 h-auto object-cover overflow-hidden rounded-md mt-24"
        />
      </motion.div>
    </div>
  )
}


