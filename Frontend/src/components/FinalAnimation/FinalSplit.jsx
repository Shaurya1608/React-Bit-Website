import React from 'react'
import SplitText from '../animations/SplitText'

const FinalSplit = () => {
  return (
    <div>
 <SplitText
  text="Whats Up!"
  className="text-7xl font-bold text-center"
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
  )
}

export default FinalSplit