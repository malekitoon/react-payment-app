import { ACCEPTABLE_CARD_TYPES } from './constants';

export const PAYMENT_REGEX = {
  cardNumber: {
    content: /^\d*$/i,
    length: /^.{16}$/,
    lengthAmex: /^.{15}$/,
  },
  expirationDate: /^(!00|0[1-9]|1[0-2])\/[0-9]{2}$/,
  name: {
    content: /^[a-zA-Z]+(\s[a-zA-Z]+)*$/,
    length: /^.{1,50}$/,
  },
  email: {
    content: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    length: /^.{0,320}$/,
  },
};

export const validateCardType = value => {
  if (!value) {
    return 'Card type is required';
  }
  return null;
};

export const validateCardNumber = (value, cardType) => {
  if (!value) {
    return 'Card number is required';
  }
  if (!(PAYMENT_REGEX.cardNumber.content.test(value))) {
    return 'Card number must contain only numbers';
  }

  const isAmex = cardType === ACCEPTABLE_CARD_TYPES.Amex.id;
  const msg = `Card number must contain ${isAmex ? '15' : '16'} characters`;
  if (isAmex) {
    if (!(PAYMENT_REGEX.cardNumber.lengthAmex.test(value))) {
      return msg;
    }
  } else if (!(PAYMENT_REGEX.cardNumber.length.test(value))) {
    return msg;
  }

  return null;
};

export const validateExpirationDate = value => {
  if (!value) {
    return 'Expiration date is required';
  }
  if (!(PAYMENT_REGEX.expirationDate.test(value))) {
    return 'Enter a valid expiration date in MM/YY format';
  }
  return null;
};

export const validateName = value => {
  if (!value) {
    return 'Name is required';
  }
  if (!(PAYMENT_REGEX.name.content.test(value))) {
    return 'Name must contain only latin characters and 1 space between words';
  } if (!(PAYMENT_REGEX.name.length.test(value))) {
    return 'Name cannot exceed 50 symbols';
  }
  return null;
};

export const validateEmail = value => {
  if (value) {
    if (!(PAYMENT_REGEX.email.content.test(value))) {
      return 'Enter a valid email';
    } if (!(PAYMENT_REGEX.email.length.test(value))) {
      return 'Email cannot exceed 320 symbols';
    }
  }
  return null;
};
