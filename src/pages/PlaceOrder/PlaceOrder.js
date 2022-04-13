import React from 'react';
import { Content } from '../../components';
import { sectionOne} from './Data';
import Form from '../../components/Form/Form'; 
function PlaceOrder() {
  return (
    <>

    <Content {...sectionOne} 
    />
    <Form>
      
    </Form>
     

 
    </>
  );
}

export default PlaceOrder;