// == Import npm
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./pill.scss";

// == Composant
const Pill = ({ picture, name, slug, count_reviews, reimbursed }) => {
  return (
  <div className="pills_container">
    <img src={`https://maestra.chrisdev.fr/uploads/pills/${picture}`} className="pills-img" alt={name} />
    <div className="pills__info">
      <p className="pills__info--name">{name}</p>
      <p className="pills__info--reimbursed">
      {reimbursed===0 ? ("Non remboursée") : ( "Remboursée" )}
      </p>
      <span className="pills__info--reviews"><i className="far fa-user user" /> {count_reviews} avis</span>
      <Link to={`pilule/${slug}`} className="pills__info--link">
        Voir la fiche de la pilule
      </Link>
    </div>
  </div>
)};

Pill.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  reimbursed: PropTypes.number.isRequired,
  count_reviews: PropTypes.number.isRequired,
};

// == Export
export default Pill;
