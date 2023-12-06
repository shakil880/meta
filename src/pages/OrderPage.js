import React from 'react';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm'




function OrderPage() {
  return (
    <>
      <Header />
      <div className='orderpage'>
        <div className='order-heading-section'>
            <h1>More than a restaurant!</h1>
        </div>
        <BookingForm />
      </div>
        
    </>
  )
}

export default OrderPage
