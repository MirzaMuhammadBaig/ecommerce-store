import Navbar from 'newCompounts/navbar';
import Newfooter from 'newCompounts/newfooter';
import React from 'react'
import DeliveryDetail from "../newCompounts/userdetail/deliverydetail"
const deliverypage = () => {
  return (
      <>
          <div>
              
      <Navbar />
          </div>
          <br />
          <DeliveryDetail />
          <div className='mt-10'>
              
      <Newfooter />
          </div>
    </>
  );
}

export default deliverypage