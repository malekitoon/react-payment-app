import React from 'react';

const Cart = ({ products }) => (
  <div className='cart'>
    {products.map(({ id, title, date, price }) => (
      <div key={id} className='product'>
        <div className='product__details'>
          {`Product: ${title}`}
        </div>

        <div className='product__details'>
          {`Date: ${date.toFormat('MM/dd/yyyy hh:mm:ss')}`}
        </div>

        <div className='product__details'>
          {`Amount: ${price} USD`}
        </div>
      </div>
    ))}
  </div>
);

export default Cart;
