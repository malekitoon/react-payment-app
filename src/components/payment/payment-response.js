import React from 'react';

const PaymentResponse = ({ response: { responseCode, responseMessage, invoiceNo } }) => {
  const isSuccessful = responseCode === '00';

  return (
    <div className='payment__response'>
      <div className={`message message--${isSuccessful ? 'success' : 'fail'}`}>
        <div className='message__item'>{responseMessage}</div>
        {isSuccessful && <div className='message__item'>{`Invoice: ${invoiceNo}`}</div>}
      </div>
    </div>
  );
};

export default PaymentResponse;
