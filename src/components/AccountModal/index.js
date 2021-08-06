import React from "react";
import PropTypes from "prop-types";

import Field from "src/components/AccountPage/Field";

import "./modal.scss";

const AccountModal = ({
  setModal,
  changeField,
  user,
  passwordMessage,
  checkLastPassword,
  newPassword,
  confirmNewPassword,
  changePassword,
  newPasswordMessage,
}) => {
  const passwordMessageStyle = {
    "background-color": passwordMessage.color,
  };
  const handlePasswordFormSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    newPassword === confirmNewPassword
      ? changePassword(user.id, checkLastPassword, newPassword)
      : newPasswordMessage("Entrez deux fois le même nouveau mot de passe", "#E91D1D");
  };
  return (
    <div className="account-page__modal">
      {passwordMessage.content !== "" && (
        <p style={passwordMessageStyle} className="account-page__modal-message">
          {passwordMessage.content}
        </p>
      )}
      {passwordMessage.content === "" && (
        <p className="account-page__modal-presentation">
          Un mot de passe correct doit contenir au moins 8 caractères : dont 1
          minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial.{" "}
        </p>
      )}

      <form className="" onSubmit={(e) => handlePasswordFormSubmit(e)}>
        <div className="account-page__modal-field">
          <Field
            label="Entrez votre ancien mot de passe :"
            name="checkLastPassword"
            value={checkLastPassword}
            type="password"
            onChange={changeField}
          />
        </div>

        <div className="account-page__modal-field">
          <Field
            className="account-page__modal-field"
            label="Nouveau mot de passe :"
            name="newPassword"
            value={newPassword}
            type="password"
            onChange={changeField}
          />
        </div>

        <div className="account-page__modal-field">
          <Field
            className="account-page__modal-field"
            label="Confirmation du nouveau mot de passe :"
            name="confirmNewPassword"
            value={confirmNewPassword}
            type="password"
            onChange={changeField}
          />
        </div>

        <button type="submit">Changer son mot de passe</button>

        <div
          className="account-page__modal-closeBtn"
          onClick={() => setModal(false)}
        >
          X
        </div>
      </form>
    </div>
  );
};

AccountModal.propTypes = {
  user: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  passwordMessage: PropTypes.object.isRequired,
  checkLastPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmNewPassword: PropTypes.string.isRequired,
  changePassword: PropTypes.func.isRequired,
  newPasswordMessage: PropTypes.func.isRequired,
};

export default AccountModal;
