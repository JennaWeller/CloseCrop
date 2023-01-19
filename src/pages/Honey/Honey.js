import React from 'react';
import { IconContext } from 'react-icons/lib';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,

} from '../../components/Pricing/Pricing.elements';
function HoneyOfferings() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading> Discover Local Produce - Honey</PricingHeading>
          <PricingContainer>
          </PricingContainer>     
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default HoneyOfferings;