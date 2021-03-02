import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

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

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(DateTime).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
