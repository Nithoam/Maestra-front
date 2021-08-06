import React from "react";

import PropTypes from "prop-types";

import "./contact.scss";
import useTitle from 'src/selectors/useTitle';
import Field from "src/components/Contact/Field";

const Contact = ({ name, email, object, message, changeField, setMessage, handleSendMessage, messageErrorContact, messageSend, isMessageSend }) => {
  const Send = (evt) => {
    evt.preventDefault();
    handleSendMessage();
  };
  const documentTitle = useTitle();
  return (
  <main className="contact">
    <section className="contact__letter-image">
      <div className="contact__animated-mail">
        <div className="contact__back-fold"></div>
        <div className="contact__letter">
          <div className="contact__letter-border"></div>
          <div className="contact__letter-title">
            M<span className="contact__letter-title-bold">æ</span>stra
          </div>
          <div className="contact__letter-context"></div>
          <div className="contact__letter-stamp">
            <div className="contact__letter-stamp-inner">æ</div>
          </div>
        </div>
        <div className="contact__top-fold"></div>
        <div className="contact__body"></div>
        <div className="contact__left-fold"></div>
      </div>
    </section>
    { isMessageSend ? (
    <div className="contactSendedMessage">{messageSend}</div>
    ) : (null)}
    <div className="contactErrorMessage">{messageErrorContact}</div>
    <form className="contact__form"  onSubmit={Send}>
      <Field
        className="contact__form-input input-name"
        type="text"
        placeholder="Prénom / Nom"
        name="name"
        value={name}
        onChange={changeField}
      />
      <Field
        className="contact__form-input input-email"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={changeField}
      />
      <Field
        className="contact__form-input input-object"
        type="text"
        placeholder="L'objet de votre message"
        name="object"
        value={object}
        onChange={changeField}
      />
      <textarea
        className="contact__form-text-area"
        placeholder="Votre message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="contact__form-button" type="submit">
        Envoyer
      </button>
    </form>
  </main>
)};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  object: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  handleSendMessage: PropTypes.func.isRequired,
  messageErrorContact: PropTypes.string.isRequired,
  messageSend: PropTypes.string.isRequired,
  isMessageSend: PropTypes.bool.isRequired,
};

export default Contact;
