import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
//import './style.scss';

// == Composant
const FieldReview = ({
  value,
  type,
  className,
  name,
  message,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <input
      // React - state
      value={value}
      onChange={handleChange}
      // infos de base
      id={inputId}
      type={type}
      className={className}
      placeholder={placeholder}
      name={name}
      message={message}
    />
  );
};

FieldReview.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
FieldReview.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default FieldReview;