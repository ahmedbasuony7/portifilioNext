"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Image from 'next/image';

export  default     function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black-100 flex flex-col items-center justify-center overflow-hidden rounded-md">
      
      
      
      <p className="md:text-5xl text-1xl text-4xl   font-bold text-center text-white relative z-20">
         Are You Ready 
      </p>
      <p className="md:text-5xl text-1xl text-4xl   font-bold text-center text-white relative z-20">
         To    <span  className="text-purple"> Diffrent  </span>   Journey ?
      </p>

      <br />

      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
