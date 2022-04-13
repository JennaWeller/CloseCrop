import React from 'react';
import { Content , Pricing} from '../../components';
import {  sectionTwo } from './Data';

function Products() {
  return (
    <>
      <Content {...sectionTwo} />
      <Pricing/>
    </>
  );
}

export default Products;