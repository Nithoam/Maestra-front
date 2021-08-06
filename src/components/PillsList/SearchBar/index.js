import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SearchBar = ({  
  value,
  type,
  name,
  placeholder,
  onChange,
  handleSearch,
  handleClearSearch
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const goToPillsList = () => {
    document.getElementById('pills').scrollIntoView();
    let buttonSeeAll = document.querySelector('.seeAllPills-button');
    buttonSeeAll.style.display="block";
  };
  const Recherche = (evt) => {
    evt.preventDefault();
    handleSearch();
  };
  const clearSearch = () => {
    handleClearSearch();
  };
  return (
    <>
  <form className="search-container" onSubmit={Recherche}>
    <input 
    type={type} 
    id="search-bar"  
    placeholder={placeholder}  
    value={value} 
    onChange={handleChange} 
    name={name} 
    />
    <a href="#"><img className="search-icon" src="https://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
    <button type="submit" name="button" onClick={goToPillsList} className="search-button" value="Submit"><i className="fas fa-chevron-right"></i></button>
  </form>
  <div className = "container-buttonSearch">
    <button type="submit" name="clearSearch" onClick={clearSearch} className="clearSearch-button" value="clearSearch">Effacer la recherche</button>
  </div>
  </>
);
};

SearchBar.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
SearchBar.defaultProps = {
  value: '',
  type: 'text',
};

export default SearchBar;
