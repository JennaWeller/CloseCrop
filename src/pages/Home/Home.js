import React from 'react';
import { sectionOne, sectionTwo, sectionThree, sectionFour } from './Data';
import { Content, Pricing } from '../../components';

function Home() {
  return (
    <>
      <Content {...sectionOne} />
      <Content {...sectionThree} />
      <Content {...sectionTwo} />
      <Pricing />
      <Content {...sectionFour} />
    </>
  );
}

export default Home;