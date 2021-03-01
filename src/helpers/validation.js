export const PAYMENT_REGEX = {
  cardNumber: {
    content: /^\d*$/i,
    length: /^.{16}$/,
    lengthAmex: /^.{15}$/,
  },
  expirationDate: /^[A-Za-z]+(?:['-\s]?[A-Za-z]+){2,20}$/i,
  name: /^[A-Za-z]+(?:['-\s]?[A-Za-z]+){2,20}$/i,
  email: {
    content: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    length: /^.{0,320}$/,
  },
};

export const validateCardType = value => {
  if (!value) {
    return 'Card type is required';
  }
  // if (!(REGEX_RULES.cardNumber.test(value))) {
  //   return 'Card number must contain only numbers ';
  // }
  return undefined;
};

export const validateCardNumber = (value, cartType) => {
  if (!value) {
    return 'Card number is required';
  }
  if (!(PAYMENT_REGEX.cardNumber.content.test(value))) {
    return 'Card number must contain only numbers ';
  }

  const isAmex = cartType === 'Amex';
  const msg = `Card number must contain ${isAmex ? '15' : '16'} characters`;
  if (isAmex && !(PAYMENT_REGEX.cardNumber.lengthAmex.test(value))) {
    return msg;
  } if (!(PAYMENT_REGEX.cardNumber.length.test(value))) {
    return msg;
  }

  return undefined;
};

export const validateExpirationDate = value => {
  if (!value) {
    return 'Expiration date is required';
  }
  // if (!(REGEX_RULES.expirationDate.test(value))) {
  //   return 'Please enter a valid expiration date in MM/YY format';
  // }
  return undefined;
};

export const validateName = value => {
  if (!value) {
    return 'Enter your first name';
  }
  // if (!(REGEX_TRIMMED.test(value))) {
  //   return 'There should not be whitespaces around the first name';
  // } if (!(REGEX_NAME_CONTENT.test(value))) {
  //   return 'Enter a valid first name';
  // } if (!(REGEX_NAME_LENGTH_MIN.test(value))) {
  //   return 'First name should contain 2 characters minimum';
  // } if (!(REGEX_NAME_LENGTH_MAX.test(value))) {
  //   return 'First name cannot exceed 20 symbols';
  // }
  return undefined;
};

export const validateEmail = value => {
  if (value) {
    if (!(PAYMENT_REGEX.email.content.test(value))) {
      return 'Enter a valid email';
    } if (!(PAYMENT_REGEX.email.length.test(value))) {
      return 'Email cannot exceed 320 symbols';
    }
  }
  return undefined;
};
