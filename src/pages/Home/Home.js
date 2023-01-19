import React from 'react';
import { sectionOne, sectionTwo, sectionFour } from './Data';
import { Content, Pricing } from '../../components';

function Home() {
  return (
    <>
      <Content {...sectionOne} />
      <Pricing />

      <Content {...sectionTwo} />
    
      <Content {...sectionFour} />
    </>
  );
}

export default Home;