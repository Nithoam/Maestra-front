import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
//import './style.scss';

// == Composant
const TextArea = ({
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

  const inputId = `text-area-${name}`;

  return (
    <textarea
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

TextArea.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  message: PropTypes.string,
};

// Valeurs par défaut pour les props
TextArea.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default TextArea;