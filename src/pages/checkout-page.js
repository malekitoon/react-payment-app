import React from 'react';
import { DateTime } from 'luxon';
import Product from '../components/product';
import Payment from '../components/payment';

const CheckoutPage = () => {
  const product = {
    title: 'ABCD',
    date: DateTime.local(2019, 8, 9, 12, 3, 44),
    price: 1123.03,
  };

  return (
    <div className='page page__checkout'>
      <Product product={product} />
      <Payment />
    </div>
  );
};

export default CheckoutPage;
