import React from 'react';
import { useField } from 'formik';

const FormSelect = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  const { id, name } = props;

  return (
    <div className='form-group'>
      <label htmlFor={id || name} className='form-group__label'>{label}</label>

      <select
        className={`form-group__input ${className}`}
        {...field}
        {...props}
      />

      {meta.touched && meta.error && (
        <div className='form-group__error'>{meta.error}</div>
      )}
    </div>
  );
};

export default FormSelect;
