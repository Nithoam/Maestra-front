/* eslint-disable no-lone-blocks */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Pill from 'src/components/PillsList/Pills/Pill';
import Loading from 'src/components/Loading';
import sad from './sad.png';

// == Import
import './style.scss';

// == Composant
const Pills = ({
  pillsData, searchResult, fetchPills, loading, isSearchOn, isSearchWithFiltersOn, searchResultFilters,
}) => {
  useEffect(fetchPills, []);
  { if (!loading && !isSearchOn && !isSearchWithFiltersOn) {
    return (
      <div className="pills" id="pills">
        {pillsData.map((pill) => (
          <Pill key={pill.id} {...pill} />
        ))}
      </div>
    );
  }


  if (searchResult.length === 0 && !isSearchWithFiltersOn && isSearchOn) {
    return (
      <div className="pills__no-result">
        <p className="pills__no-result-text">Aucun résultat trouvé :(</p>
        <img className="pills__no-result-img" src={sad} alt="Aucun résultat trouvé !" />
      </div>
    );
  }

  if (searchResultFilters.length === 0 && isSearchWithFiltersOn && !isSearchOn) {
    return (
      <div className="pills__no-result">
        <p className="pills__no-result-text">Aucun résultat trouvé :(</p>
        <img className="pills__no-result-img" src={sad} alt="Aucun résultat trouvé !" />
      </div>
    );
  }

  if (!loading && !isSearchWithFiltersOn && isSearchOn) {
    return (
      <div className="pills" id="pills">
        {searchResult.map((pill) => (
          <Pill key={pill.id} {...pill} />
        ))}
      </div>

    );
  }
  if (!loading && !isSearchOn && isSearchWithFiltersOn) {
    return (
      <div className="pills" id="pills">
        {searchResultFilters.map((pill) => (
          <Pill key={pill.id} {...pill} />
        ))}
      </div>
    );
  }

  return (
    <Loading />
  );
  }
};

Pills.propTypes = {
  pillsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  fetchPills: PropTypes.func.isRequired,
  searchResult: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  isSearchOn: PropTypes.bool.isRequired,
  isSearchWithFiltersOn: PropTypes.bool.isRequired,
  searchResultFilters: PropTypes.array.isRequired,
};

// == Export
export default Pills;
