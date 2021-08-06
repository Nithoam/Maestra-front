/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './review-item.scss';

const ReviewItem = ({ title, content, deleteReview, id, user, pillName }) => {
  const deleteItem = (e) => {
    const button = e.currentTarget;
    const item = button.closest('.review-item');
    item.style.display = 'none';
  };

  const confirmDeleteReview = (e) => {
    if (window.confirm('Voulez-vous vraiment supprimer ce commentaire ?')) {
      deleteReview(id, user);
      deleteItem(e);
    }
    console.log('suppression de commentaire annulée');
  };

  return (
    <div className="review-item">
      <button
        type="button"
        className="review-item-deleteBtn"
        onClick={(e) => confirmDeleteReview(e)}
      >
        <i className="far fa-trash-alt" />
      </button>
      <article className="review-item-content">
        <h4 className="review-item-title">{title}</h4>
        <p className="review-item-pill-name">Avis laissé sur la pilule : {pillName}</p>
        <p className="review-item-review">{content}</p>
      </article>
    </div>
  );
};

ReviewItem.propTypes = {
  pillName: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  deleteReview: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ReviewItem;
