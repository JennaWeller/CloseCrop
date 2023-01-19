import React from 'react';
import { IconContext } from 'react-icons/lib';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,

} from './Pricing.elements';
import Products from "../Products";
import {productData} from "../Products/data";
function Custom() {
  return (
    <IconContext.Provider value={{ color: '#ffff', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Eat local. Sell local. Prevent waste.</PricingHeading>
          <PricingContainer>
     <Products data={productData}/> 

          </PricingContainer>
         
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Custom;