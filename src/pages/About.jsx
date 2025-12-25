import React from 'react'
import Ribbons from '../components/animations/Ribbons'
import NeonNavbar from '../components/Navigation/NeonNavbar'

const About = () => {
  return (
    
  <div className='h-screen bg-black'>
      <NeonNavbar/>
  <div className='overflow-hidden relative h-full'>
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