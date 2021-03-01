import React, { useState } from 'react';
import PaymentForm from './payment-form';
import PaymentResponse from './payment-response';

const Payment = () => {
  const [paymentResponse, setPaymentResponse] = useState(null);

  return (
    <div className='payment'>
      {paymentResponse
        ? <PaymentResponse response={paymentResponse} />
        : <PaymentForm onConfirm={setPaymentResponse} />}
    </div>
  );
};

export default Payment;
