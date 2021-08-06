// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  value,
  type,
  name,
  className,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <div>
      <input 
        // React - state
        className={className}
        value={value}
        onChange={handleChange}
        // infos de base
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  type: 'text',
};

// == Export
export default Field;
