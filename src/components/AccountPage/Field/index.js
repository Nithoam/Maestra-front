// == Import : npm
import React from "react";
import PropTypes from "prop-types";

import "./field.scss";

// == Composant
const Field = ({ label, value, type, name, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <div className="field">
      <label htmlFor={`${label}`}>
        <p>{label}</p>
        <input type={type} name={name} id={name} value={value} onChange={(e) => handleChange(e)} />
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  type: "text",
};

// == Export
export default Field;
