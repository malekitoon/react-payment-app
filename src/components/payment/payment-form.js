import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { ROOT_URL, ACCEPTABLE_CARD_TYPES } from '../../helpers/constants';
import {
  validateCardType,
  validateCardNumber,
  validateExpirationDate,
  validateName,
  validateEmail,
} from '../../helpers/validation';
import FormInput from '../form-elements/form-input';
import FormSelect from '../form-elements/form-select';

const PaymentForm = ({ onConfirm }) => {
  // eslint-disable-next-line no-unused-vars
  const [cardTypes, setCardTypes] = useState([]);

  useEffect(() => {
    // axios.get(`${ROOT_URL}/5d145fa22f0000ff3ec4f030`)
    //   .then(response => {
    //     setCardTypes(response.data.cardTypes.filter(cardType => (
    //       ACCEPTABLE_CARD_TYPES[cardType.value]
    //     )));
    //   })
    //   .catch(() => {
    //     setCardTypes([]);
    //   });
  }, []);

  const initialValues = {
    cardType: '',
    cardNumber: '',
    expirationDate: '',
    name: '',
    email: '',
  };

  const handleValidation = values => {
    const errors = {};

    const errCardType = validateCardType(values.cardType);
    if (errCardType) errors.cardType = errCardType;

    const errCardNumber = validateCardNumber(values.cardNumber, values.cardType);
    if (errCardNumber) errors.cardNumber = errCardNumber;

    const errExpirationDate = validateExpirationDate(values.expirationDate);
    if (errExpirationDate) errors.expirationDate = errExpirationDate;

    const errName = validateName(values.name);
    if (errName) errors.name = errName;

    const errEmail = validateEmail(values.email);
    if (errEmail) errors.email = errEmail;

    return errors;
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    const url = `${ROOT_URL}/5d8de422310000b19d2b517a`; // success
    // const url = `${ROOT_URL}/5d8de441310000a2612b517c`; // fail

    const data = {
      ...values,
      cardType: parseInt(values.cardType, 10),
      cardNumber: parseInt(values.cardNumber, 10),
    };

    axios.post(url, data)
      .then(response => onConfirm(response.data))
      .catch(error => onConfirm(error.response.data))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className='payment-form'>
      <Formik
        initialValues={initialValues}
        validate={handleValidation}
        onSubmit={handleFormSubmit}
      >
        {({
          handleSubmit,
          isValid,
          dirty,
          isSubmitting,
          isValidating,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormSelect
              label='Card Type'
              id='cardType'
              name='cardType'
              options={cardTypes}
            >
              <option value=''>- Select Card Type -</option>
              <option value='9'>Dummy</option>
              <option value='4'>Amex</option>
              {cardTypes.map(type => (
                <option key={type.value} value={type.id}>{type.value}</option>
              ))}
            </FormSelect>

            <FormInput
              label='Card Number'
              id='cardNumber'
              name='cardNumber'
              type='text'
            />

            <FormInput
              label='Expiry'
              id='expirationDate'
              name='expirationDate'
              type='text'
            />

            <FormInput
              label='Name'
              id='name'
              name='name'
              type='text'
            />

            <FormInput
              label='Email'
              id='email'
              name='email'
              type='email'
            />

            <button
              type='submit'
              className='btn'
              disabled={!dirty || !isValid || isValidating || isSubmitting}
            >
              Confirm Payment
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

PaymentForm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default PaymentForm;
