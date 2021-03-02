import React from 'react';
import PropTypes from 'prop-types';

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

PaymentResponse.propTypes = {
  response: PropTypes.shape({
    responseCode: PropTypes.string.isRequired,
    responseMessage: PropTypes.string.isRequired,
    invoiceNo: PropTypes.string,
  }).isRequired,
};

export default PaymentResponse;
