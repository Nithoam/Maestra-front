// == Import npm
import React from 'react';
import PropTypes from "prop-types";
import SearchBar from 'src/containers/PillsList/SearchBar';
import SelectFields from 'src/containers/PillsList/SelectFields';
import Pills from 'src/containers/PillsList/Pills';
import sunflower from 'src/assets/images/sunflower.png';
import useTitle from 'src/selectors/useTitle';
// == Import
import './style.scss';

// == Composant
const PillsList = ({searchPill, changeField}) => {
const documentTitle = useTitle();

  return(
  <div className="pillsList" >
    <div className="pillsList__background" id="GoTop">
    <div className="pillsList__header" >
      <img src={sunflower} className="pillsList__header--sunflower" alt="sunflower" draggable="false" />
      <h1 className="pillsList__header--title">M<span className="pillsList__header--span" id="ae">æ</span>stra</h1>
      <p className="pillsList__header--info">Recherchez la pilule qui vous convient le mieux grâce aux filtres ci-dessous, ils vous permettent de centrer votre recherche en fonction des effets secondaires que vous souhaitez absolument éviter (basés sur les avis des utilisatrices), mais également par rapport aux informations plus basiques telles que la génération, le type de la pilule (un ou deux principes actifs) et l'interruption.</p>
      
      <SearchBar
        name="searchPill"
        placeholder="Cherchez votre pilule"
        onChange={changeField}
        value={searchPill} 
        />
      <SelectFields />
    </div>
    </div>
    <Pills />
    <a href="#GoTop" className="buttonGoToTop" ><i className="fas fa-chevron-up"></i></a>
  </div>
)};

PillsList.propTypes = {
  searchPill: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

// == Export
export default PillsList;






