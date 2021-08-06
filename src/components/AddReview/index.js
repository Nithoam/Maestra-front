import React, { useEffect } from 'react';
import PropTypes from "prop-types";

import './addReview.scss';
import useTitle from 'src/selectors/useTitle';
import Field from 'src/components/FieldReview'
import TextArea from 'src/components/TextArea'
import { useHistory } from "react-router-dom";

const AddReview = ({ reviewSended, currentPill , title, content, changeField,changeTextArea, changeSelect, handleFormReview, messageContentErrorReview, messageTitleErrorReview, handleTitleErrorReview, handleContentErrorReview, handleValidateReview }) =>  {
  
  let history = useHistory();

  const handleChangeSelect = (event) => changeSelect(event.target.value, event.target.name);
  const sendReviews = (evt) => 
  {
    evt.preventDefault(); 
    if(content.length >= 25 && title.length >=5){
      handleFormReview();
      
    } else {
      handleTitleErrorReview();
      handleContentErrorReview();
    }
  }
  const goBack = () => {
    history.goBack()
    handleValidateReview();
  }
  const documentTitle = useTitle('Ajouter un avis - Maestra');
  return(
    <main id="addReview">
      <section className="addReview">
      <div className="addReview__responsive">
        <div className="addReview__left-div">
          <h2 className="addReview__title title-pill">{currentPill.name}</h2>
          <figure className="addReview__figure">
            <img className="addReview__figure-image" src={`https://maestra.chrisdev.fr/uploads/pills/${currentPill.picture}`} alt="Boite de pilule" draggable="false"/>
          </figure>
          <div className="addReview__pill-presentation">
            <h3 className="addReview__pill-presentation-title">Présentation de la pilule</h3>
            <p className="addReview__pill-presentation-content">
              {currentPill.description}
            </p>
          </div>

          <div className="addReview__pill-composition">
            <h3 className="addReview__pill-composition-title">Composition de la pilule</h3>
            <p className="addReview__pill-composition-content">
            {currentPill.composition}
            </p>
          </div>
        </div>
        {
          reviewSended ?
          <div className="addReview_right-div">
            <p className="addReview__validate-message">Merci ! Votre avis a bien été envoyé et vous serez averti, par mail, quand il sera en ligne ! </p>
            <button className="addReview__validate-button" onClick={() => goBack()}>Retourner à la page précédente</button>
          </div>
          
          : 
          <div className="addReview_right-div"> 
            <h2 className="addReview__title title-review">Ajoutez un avis</h2>
            <form className="addReview__form" method="POST" onSubmit={(e) => sendReviews(e)}>
              <div className="addReview__questions">
                <label className="addReview__form-label">Quel effet a eu cette pilule sur votre acné ?
                <select className="addReview__form-select acne-select" name="acne" onChange={handleChangeSelect} >
                    <option className="addReview__form-option"  value={0} defaultValue >N'a rien changé</option>
                    <option className="addReview__form-option"  value={-1}>Moins d'acné</option>
                    <option className="addReview__form-option"  value={1}>Plus d'acné</option>
                  </select>
                </label>
                <label className="addReview__form-label">Quel effet a eu cette pilule sur votre libido ?
                  <select className="addReview__form-select" name="libido"  onChange={handleChangeSelect} >
                    <option className="addReview__form-option"  value={0} defaultValue >N'a rien changé</option>
                    <option className="addReview__form-option"  value={-1}>Moins de libido</option>
                    <option className="addReview__form-option"  value={1}>Plus de libido</option>
                  </select>
                </label>
                <label className="addReview__form-label">Quel effet a eu cette pilule sur vos maux de tête ?
                  <select className="addReview__form-select" name="migraine" onChange={handleChangeSelect}>
                    <option className="addReview__form-option"  value={0} defaultValue >N'a rien changé</option>
                    <option className="addReview__form-option"  value={-1}>Moins de migraine</option>
                    <option className="addReview__form-option"  value={1}>Plus de migraine</option>
                  </select>
                </label>
                <label className="addReview__form-label">Quel effet a eu cette pilule sur votre morphologie ?
                  <select className="addReview__form-select" name="weight" onChange={handleChangeSelect}>
                    <option className="addReview__form-option"  value={0} defaultValue >N'a rien changé</option>
                    <option className="addReview__form-option"  value={-1}>Perte de poids</option>
                    <option className="addReview__form-option"  value={1}>Prise de poids</option>
                  </select>
                </label>
                <label className="addReview__form-label">Avez vous ressenti des douleurs à la poitrine lors de la prise de cette pilule ?
                  <select className="addReview__form-select" name="breast_pain" onChange={handleChangeSelect}>
                    <option className="addReview__form-option"  value={0} defaultValue >N'a rien changé</option>
                    <option className="addReview__form-option"  value={-1}>Moins de douleurs</option>
                    <option className="addReview__form-option"  value={1}>Plus de douleurs</option>
                  </select>
                </label>
                <label className="addReview__form-label">Avez vous eu des nausées lors de la prise de cette pilule?
                  <select className="addReview__form-select" name="nausea" onChange={handleChangeSelect}>
                    <option className="addReview__form-option"  value={0} defaultValue >N'a rien changé</option>
                    <option className="addReview__form-option"  value={-1}>Moins de nausées</option>
                    <option className="addReview__form-option"  value={1}>Plus de nausées</option>
                  </select>
                </label>
                <label className="addReview__form-label">Avez vous eu des règles douloureuses lors de la prise de cette pilule?
                  <select className="addReview__form-select"name="pms" onChange={handleChangeSelect}>
                    <option className="addReview__form-option"  value={0} defaultValue >N'a rien changé</option>
                    <option className="addReview__form-option"  value={-1}>Moins de douleurs</option>
                    <option className="addReview__form-option"  value={1}>Plus de douleurs</option>
                  </select>
                </label>
                <label className="addReview__form-label">Avez vous eu un dérèglement de vos règles lors de la prise de cette pilule?
                  <select className="addReview__form-select" name="perturbation_period" onChange={handleChangeSelect}>
                    <option className="addReview__form-option"  value={false} defaultValue >Non</option>
                    <option className="addReview__form-option"  value={true}>Oui</option>
                  </select>
                </label>
              </div>
              
              <div className="addReview__errors">
                <div className="addReview__errors-title">{messageTitleErrorReview}</div>
                <div className="addReview__errors-content">{messageContentErrorReview}</div>
              </div>

              <Field 
              className="addReview__form-input input-title"
              type="text"
              name="title"
              placeholder="Le titre de votre avis..."
              value={title}
              onChange={changeField}
              required
              />
              <TextArea
              className="addReview__form-text-area input-text-area"
              type="text"
              name="content"
              placeholder="Votre message ici..."
              value={content}
              onChange={changeTextArea}
              required
              />
              <button className="addReview__form-button" type="submit">Envoyez votre avis</button>
            </form>
          </div>
        }
        
      </div>
      

      </section>
    </main>
  );
}

AddReview.propTypes = {
  currentPill: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    reimbursed: PropTypes.number,
    type: PropTypes.string,
    interruption: PropTypes.bool,
    laboratory: PropTypes.string,
    delay: PropTypes.number,
    composition: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
  title: PropTypes.string, 
  content: PropTypes.string,
  changeField: PropTypes.func.isRequired, 
  changeSelect: PropTypes.func.isRequired, 
  handleFormReview: PropTypes.func.isRequired,
  messageContentErrorReview: PropTypes.string.isRequired,
  messageTitleErrorReview: PropTypes.string.isRequired,
  handleTitleErrorReview: PropTypes.func.isRequired,
  handleContentErrorReview: PropTypes.func.isRequired,
  handleValidateReview: PropTypes.func.isRequired,
};
export default AddReview;