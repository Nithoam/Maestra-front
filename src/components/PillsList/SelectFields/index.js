import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SelectFields = ({changeSelect, handleSearchSort, handleSeeAllPills, isSearchWithFiltersOn }) => {
  const handleChangeSelect = (evt) => {
    changeSelect(evt.target.value, evt.target.name);
    handleSearchSort();
    // document.getElementById('pills').scrollIntoView();
  };
  const RechercheFiltres = (evt) => {
    evt.preventDefault();
    handleSearchSort();
  };
  const seeAllPills = () => {
    handleSeeAllPills()
    let selectFieldResetInterruption = document.querySelector(".selectFields2__select--interruption");
    selectFieldResetInterruption.selectedIndex = "all";
    let selectFieldResetType = document.querySelector(".selectFields2__select--type");
    selectFieldResetType.selectedIndex = "all";
    let selectFieldResetGeneration = document.querySelector(".selectFields2__select--generation");
    selectFieldResetGeneration.selectedIndex = "0";
  };
  return (
  <>
  <form className="selectFields" onSubmit={RechercheFiltres}>
    <select className="selectFields__avoid" placeholder="Ce que je souhaite éviter" name="undesirable" onChange={handleChangeSelect}>
		  <option value="alpha">Ce que je souhaite éviter</option>
		  <option value="score_acne">Acné</option>
		  <option value="score_libido">Baisse de libido</option>
      <option value="score_migraine">Migraines</option>
      <option value="score_weight">Prise de poids</option>
      <option value="score_breast_pain">Douleurs à la poitrine</option>
      <option value="score_nausea">Nausées</option>
      <option value="score_pms">Douleurs des règles</option>
	  </select>

    <div className="selectFields2">
      <div id="select-interruption">
      <h2 className="selectFields2__title">Interruption</h2>
        <select className="selectFields2__select selectFields2__select--interruption" placeholder="Interruption" name="interruption" onChange={handleChangeSelect}>
        <option value="all">Toutes</option>
		      <option value="1">Oui</option>
		      <option value="0">Non</option>
	      </select>
      </div>

      <div id="select-refund">
      <h2 className="selectFields2__title">Type</h2>
        <select className="selectFields2__select selectFields2__select--type" placeholder="Remboursement" name="type" onChange={handleChangeSelect}>
		      <option value="all">Toutes</option>
		      <option value="Oestroprogestatif">Oestroprogestatif</option>
          <option value="Microprogestatif">Microprogestatif</option>
	      </select>
      </div>

      <div id="select-generation">
      <h2 className="selectFields2__title">Génération</h2>
        <select className="selectFields2__select selectFields2__select--generation" placeholder="Génération" name="generation" onChange={handleChangeSelect}>
		      {/* <option value="0">Toutes</option> */}
          <option value="0">Toutes</option>
		      <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
	      </select>
      </div>
    </div>
  </form>
  <div className = "container-buttonField">
    <button type="submit" name="seeAll" onClick={seeAllPills} className="seeAllPills-button" value="seeAll">Effacer les filtres</button>
  </div>
  </>
)};

SelectFields.propTypes = {
  changeSelect: PropTypes.func.isRequired,
  handleSearchSort: PropTypes.func.isRequired,
  handleSeeAllPills: PropTypes.func.isRequired,
};

export default SelectFields;
