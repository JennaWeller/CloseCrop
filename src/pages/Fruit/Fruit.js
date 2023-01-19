import React from 'react';
import { IconContext } from 'react-icons/lib';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,

} from '../../components/Pricing/Pricing.elements';
import Products from "../../components/Products";
import {productData} from "../../components/Products/data";
function FruitOfferings() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading> Discover Local Produce - FRUIT</PricingHeading>
          <PricingContainer>
     

          </PricingContainer>
         
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default FruitOfferings;