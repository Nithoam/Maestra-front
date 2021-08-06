// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  className
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div>
      <input 
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
