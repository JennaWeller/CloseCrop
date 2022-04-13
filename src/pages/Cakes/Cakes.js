import React from 'react';
import { Content, Pricing } from '../../components';
import { sectionOne } from './Data';


function Cakes() {
  return (
    <>
      <Pricing />
      <Content {...sectionOne} />
    
    </>
  );
}

export default Cakes;