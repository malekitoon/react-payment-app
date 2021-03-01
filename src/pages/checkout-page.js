import React from 'react';
import { DateTime } from 'luxon';
import Cart from '../components/cart';
import Payment from '../components/payment';

const CheckoutPage = () => {
  const products = [{
    id: 1,
    title: 'ABCD',
    date: DateTime.local(2019, 8, 9, 12, 3, 44),
    price: 1123.03,
  }];

  return (
    <div className='page page__checkout'>
      <Cart products={products} />
      <Payment />
    </div>
  );
};

export default CheckoutPage;
