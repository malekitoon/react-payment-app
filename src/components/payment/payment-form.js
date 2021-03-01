import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
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
  const [cardTypes, setCardTypes] = useState([]);

  useEffect(() => {
    axios.get(`${ROOT_URL}/5d145fa22f0000ff3ec4f030`)
      .then(response => {
        setCardTypes(response.data.cardTypes.filter(cardType => (
          ACCEPTABLE_CARD_TYPES[cardType.value]
        )));
      })
      .catch(() => {
        setCardTypes([]);
      });
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
    const errCardNumber = validateCardNumber(values.cardNumber); // OK
    const errExpirationDate = validateExpirationDate(values.expirationDate);
    const errName = validateName(values.name);
    const errEmail = validateEmail(values.email); // OK

    if (errCardType) errors.cardType = errCardType;
    if (errCardNumber) errors.cardNumber = errCardNumber;
    if (errExpirationDate) errors.expirationDate = errExpirationDate;
    if (errName) errors.name = errName;
    if (errEmail) errors.email = errEmail;

    return errors;
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log('form was submitted!!!');
    console.log(values);

    // const url = `${ROOT_URL}/5d8de422310000b19d2b517a`;
    const url = `${ROOT_URL}/5d8de441310000a2612b517c`;

    const data = { ...values, id: parseInt(values.cardType, 10) };

    axios.post(url, data)
      .then(response => { onConfirm(response.data); })
      .catch(error => { onConfirm(error.response.data); })
      .finally(() => { setSubmitting(false); });
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

export default PaymentForm;
