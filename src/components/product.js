import React from 'react';

const Product = ({ product: { title, date, price } }) => (
  <div className='product'>
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
);

export default Product;
