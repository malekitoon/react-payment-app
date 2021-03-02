import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const FormInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  const { id, name } = props;

  return (
    <div className='form-group'>
      <label htmlFor={id || name} className='form-group__label'>{label}</label>

      <div className='form-group__element'>
        <input
          className={`form-group__input ${className}`}
          {...field}
          {...props}
        />

        {meta.touched && meta.error && (
        <div className='form-group__error'>{meta.error}</div>
        )}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  id: '',
  name: '',
  label: '',
  className: '',
};

export default FormInput;
