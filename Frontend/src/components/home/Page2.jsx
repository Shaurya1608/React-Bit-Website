import React from 'react'
import DecayCard from '../animations/DecayCard'

const Page2 = () => {
  return (
    <div className=" h-screen pt-5 flex relative ">
          <div className="flex h-70 text-white pl-20 pt-5">
            <DecayCard width={450} height={330} image="https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
              <h2>Best<br/>Brands</h2>
           </DecayCard>
          </div>
          <p className="w-1/3 right-0 absolute text-2xl p-5 text-white font-bold mr-10">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Personalized Experiences That Connect  Create a unique and personalized experience for every visitor to your
            website by customizing their welcome page based on their individual
            journey.By identifying referral sources such as social media or referrer links,
            you can design messaging tailored specifically to each user. 
          </p>
            <div className="h-1/2 w-1/3 flex bottom-0 absolute">
            <div className="flex h-70 text-white pl-230 pt-5">
            <DecayCard width={490} height={330} image="https://images.unsplash.com/photo-1759933318666-97a7e86c4d76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
              <h2>We Care<br/>About Your FUTURE</h2>
            </DecayCard>
           </div>
              <p className=" absolute text-2xl p-5 text-white font-bold ml-10">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personalized Experiences That Connect 
            Create a unique and personalized experience for every visitor to your
            website by customizing their welcome page based on their individual
            journey.By identifying referral sources such as social media or referrer links,
            you can design messaging tailored specifically to each user.
          </p>
            </div>
        </div>
  )
}

export default Page2