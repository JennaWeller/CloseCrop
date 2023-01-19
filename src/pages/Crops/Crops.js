import React from 'react';
import { Content, Pricing } from '../../components';
import { sectionOne } from './Data';


function Crops() {
  return (
    <>
      <Pricing />
      <Content {...sectionOne} />
    
    </>
  );
}

export default Crops;