import React from 'react';
import HobbyEntry from '../components/HobbyEntry'
import BowlingPic1 from '../images/Bowling1.jpg'
import BowlingPic2 from '../images/Bowling2.jpeg'

const Interests = () => {
  return (
    <div>
      <HobbyEntry image1={BowlingPic1} image2={BowlingPic2} name="Bowling" />
      <HobbyEntry name="Glowstringing" />
    </div>
  );
}

export default Interests;