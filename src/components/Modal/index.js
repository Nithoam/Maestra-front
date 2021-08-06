import React from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = ({ handleModal }) => (

  <div id="modal">
    <div className="modal">
      <h3 className="modal__title">Bienvenue sur le site de Maestra, </h3>
      <p className="modal__content">
        Vous vous trouvez sur{" "}
        <strong className="modal__strong">un site purement informatif</strong>,
        les avis que vous pourrez retrouver sont issus de l'expérience des
        utilisateurs et{" "}
        <strong className="modal__strong">
          ne remplacent <em className="modal__underline">PAS</em> les conseils
          d'un médecin !
        </strong>
      </p>
      <button onClick={handleModal} className="modal__button open">
        J'ai bien compris !
      </button>
    </div>
  </div>
  );

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default Modal;
