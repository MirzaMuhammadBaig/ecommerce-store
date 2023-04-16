import Navbar from 'newCompounts/navbar'
import Newfooter from 'newCompounts/newfooter'
import Payment from "../newCompounts/PaymentMethod/payment"
import React from 'react'

const PayPage = () => {
    return (
      <>
        <Navbar />
        <Payment />
        <Newfooter />
      </>
    );
}

export default PayPage