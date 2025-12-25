import React from 'react'
import SplitText from '../animations/SplitText'
import TargetCursor from '../animations/TargetCursor'

const LandingPage = () => {
  return (
    <div className="text-white flex absolute top-50 right-110 flex-col">
          <SplitText
            text="Thrift Website"
            className="text-8xl font-bold text-center"
            delay={90}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            />
         <div className="pl-5">
            <SplitText
            text="Whats Up!"
            className="text-7xl font-bold text-center hover:text-gray-400"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            />
         </div>

         
       
         <div className=" pt-8 leading-10 flex gap-8 pl-2.5">
          <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
         <button className=" cursor-target px-10 border-2 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white cursor-pointer"> Get Started </button>
         <button className=" cursor-target px-10 border-2 rounded-full font-bold cursor-pointer bg-blue-300"> Learn More </button> 
         </div>
         
        </div>
  )
}

export default LandingPage