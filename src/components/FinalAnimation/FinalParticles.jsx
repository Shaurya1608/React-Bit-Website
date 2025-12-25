import React from 'react'
import Particles from '../animations/Particles'

const FinalParticles = () => {
  return (
    <div style={{ width: '100%', height: '800px', position: 'relative' }}>
      <div className=' w-100 right-60 absolute bottom-90'>
        <p className='text-white'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We craft next-generation e-commerce interfaces that blend performance, motion, and modern design. Built for brands that demand speed, clarity, and seamless user journeys — turning visitors into loyal customers.
      </p>
      </div>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={400}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
  )
}

export default FinalParticles