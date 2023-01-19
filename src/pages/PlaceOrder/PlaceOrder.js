import React from 'react';
import { Content } from '../../components';
import { sectionOne} from './Data';

function PlaceOrder() {
  return (
    <>
    <Content {...sectionOne} 
    />
    </>
  );
}

export default PlaceOrder;