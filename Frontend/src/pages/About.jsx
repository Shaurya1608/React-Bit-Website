import React from 'react'
import Ribbons from '../components/animations/Ribbons'
import NeonNavbar from '../components/Navigation/NeonNavbar'
import DomeGallery from '../components/animations/DomeGallery'
import Page2 from '../components/home/Page2'
import SplitText from '../components/animations/SplitText'

const About = () => {
  return (
    
  <div className='h-screen bg-black'>
      <NeonNavbar/>

        <div className='bg-black h-screen flex justify-center items-center text-9xl font-bold text-white'>
          <SplitText
            text="About Us"
            className="text-8xl font-bold text-center hover:text-gray-400"
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
        </div>
      <div className="h-screen w-90vw bg-black">
        <DomeGallery grayscale={false} />
       </div>
       <div className='bg-black'>
        <Page2 />
       </div>
  <div className='overflow-hidden relative h-full bg-black'>

  <Ribbons
    baseThickness={10}
    colors={['#ffffff']}
    speedMultiplier={0.5}
    maxAge={350}
    enableFade={false}
    enableShaderEffect={true}
  />
</div>
    <div>
      
    </div>
    </div>
  )
}

export default About