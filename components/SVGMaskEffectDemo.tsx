"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export  default    function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full  bg-black-100 flex items-center justify-center  overflow-hidden">
      <MaskContainer 
        className="bg-black-100"
        revealText={
          <p className="max-w-4xl mx-auto  bg-black-100  text-slate-800 text-center  text-4xl font-bold">
                Let &aposs Build Unique and Amazing Websites , Improve Your Business and Transfer Magic To Reality .
          </p>
        }

      >
        Let &aposs Build           
        <span className="text-red-500 bg-black-100"> Unique </span> and 
        <span className="text-red-500 bg-black-100"> Amazing </span>
        Websites ,
        Improve Your        
        <span className="text-red-500"> Business </span> 
        and Transfer Magic To 
        <span className="text-red-500">Reality.</span>.
      </MaskContainer>
    </div>
  );
}


