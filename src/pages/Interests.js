import React from 'react';
import HobbyEntry from '../components/HobbyEntry'
import BowlingPic1 from '../images/Bowling1.jpg'
import BowlingPic2 from '../images/Bowling2.jpeg'
import GlowstringVid from '../videos/Glowstringing.mp4'
import CookingPic1 from '../images/Cake.jpg'
import CookingPic2 from '../images/Pasta.jpg'
import Footer from "../components/Footer"

const Interests = () => {
  return (
    <>
      <div>
        <HobbyEntry name="Glowstringing" video={GlowstringVid}
          description="A fun hobby of mine that many people might not be familiar with is glowstringing, which consists of spinning glowsticks on strings to create patterns in the dark. I picked up this hobby from a club in high school and have been practicing for fun ever since." />
        <HobbyEntry image1={BowlingPic1} image2={BowlingPic2} name="Bowling" dimensions={[310, 250, 310, 300]}
          description="I have been bowling since I was little for fun and was on my high school's Girls Bowling team. I continue to bowl for fun with my old teammates during holiday breaks." />
        <HobbyEntry image1={CookingPic1} image2={CookingPic2} name="Cooking" dimensions={[310, 290, 310, 260]}
          description="A recent hobby I picked up during quarantine is cooking. I've been dabbling in cake making and a lot of pasta dishes, but have also tried making food from different cuisines, like Ramen and Pad Thai. " />
      </div >
      <Footer />
    </>
  );
}

export default Interests;