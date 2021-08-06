// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link, useHistory } from "react-router-dom";
import useTitle from 'src/selectors/useTitle';

import Field from './Field';
// == Import
import './style.scss';

// == Composant
const Connection = ({
  firstname,
  lastname,
  email,
  password,
  birthdate,
  changeField,
  handleLogin,
  handleSignUp,
  isLogged,
  isSignUp,
  messageSignIn,
  messageSignUp,
  changeSelect,
  getUser,
}) => {
  const documentTitle = useTitle();
  useEffect(getUser, []);

  const viewSignUp = () => {
    container.classList.add("active-right");
    document.querySelector(".sign-in").style.display='none'; 
  };
  const viewSignIn = () => {
    container.classList.remove("active-right");
    document.querySelector(".sign-in").style.display='block'; 
  };
  const Connection = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const Inscription = (evt) => {
    evt.preventDefault();
    handleSignUp();
  };
  const handleChangeSelect = (evt) => {
    changeSelect(evt.target.value, evt.target.name);
  };
  const ReloadPage = () => {
    setTimeout(function(){
    window.location.reload();
    }, 5000)
  }
  const DisplayList1 = () => {
    let list1 = document.querySelector("#forms__list1");
    let list2 = document.querySelector("#forms__list2");
    let signUpButton = document.querySelector("#forms__signUp");
    list1.style.display = "block";
    list2.style.display = "none";
    signUpButton.style.display = "none";
  };
  const DisplayList2 = () => {
    let list1 = document.querySelector("#forms__list1");
    let list2 = document.querySelector("#forms__list2");
    let signUpButton = document.querySelector("#forms__signUp");
    list1.style.display = "none";
    list2.style.display = "block";
    signUpButton.style.display = "block";
  };
  const pressEnter = () => {
    window.addEventListener('keydown',function(e){
      if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){
        if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();
          return false;}}},true);
  }
  let history = useHistory();

  const showPassword = () => {
    let passwordButton = document.querySelector('.forms__input--password');
    let showPasswordButton = document.querySelector('.showPassword');
    let hidePasswordButton = document.querySelector('.hidePassword');
    if (passwordButton.type === "password") { 
      passwordButton.type = "text"; 
      showPasswordButton.style.display = "none";
      hidePasswordButton.style.display = "block";
    } else { 
      passwordButton.type = "password"; 
      showPasswordButton.style.display = "block";
      hidePasswordButton.style.display = "none";
    } 
}
return (
  <div className="connection_main_div">
    {
      isLogged ? (
        history.goBack()
      ) : (
  <main className="connection_main">
  <div className="container" id="container">
    <div className="form sign-up">
      <form className="forms forms_signUp" action="#" onSubmit={Inscription} onKeyDown={pressEnter}>
        <h1 className="forms__title">Créer un compte</h1>
        <div className="signUpErrorMessage">{messageSignUp}</div>
        {/* <div className="forms__icons">
          <a href="#" className="forms__icons--socialMedia"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="forms__icons--socialMedia"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="forms__icons--socialMedia"><i className="fab fa-linkedin-in"></i></a>
        </div> 
        <span className="forms__span">ou utilise ton e-mail pour l'inscription</span> */}
        <div id="forms__list1">
          <Field
            className="forms__input"
            name="firstname"
            placeholder="Prénom"
            onChange={changeField}
            value={firstname}
            required
          />
          <Field
            className="forms__input"
            name="lastname"
            placeholder="Nom"
            onChange={changeField}
            value={lastname}
            required
          />
          <Field
            className="forms__input"
            name="email"
            type="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
            required
          />
          <Field
            className="forms__input forms__input--password"
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
            required
          />
          <i className="far fa-eye showPassword" onClick={showPassword}></i>
          <i className="far fa-eye-slash hidePassword" onClick={showPassword}></i>
          <a className="forms__next" onClick={DisplayList2}>Suivant &gt;</a>
          </div>
          <div id="forms__list2">
            <div className="forms__birthdate">
            <label htmlFor="birthdate">Votre date de naissance :</label>
            <Field  
              className="forms__input"
              name="birthdate"
              type="date"
              onChange={changeField}
              value={birthdate}
            />
            </div>
            <div className="forms__smoker">
              <label htmlFor="smoker-select">Fumez-vous ?</label>
              <select name="smoker" onChange={handleChangeSelect}>
                  <option value={true}>Oui</option>
                  <option value={false}>Non</option>
              </select>
            </div>
            <div className="forms__children">
              <label htmlFor="children-select">Avez-vous des enfants ?</label>
              <select name="children" onChange={handleChangeSelect}>
                  <option value={true}>Oui</option>
                  <option value={false}>Non</option>
              </select>
            </div>
            <a className="forms__previous" onClick={DisplayList1}>&lt; Précédent</a>
          </div>
            <button type="submit" id="forms__signUp" className="signUpButton formButton">S'inscrire</button>
      </form>
    </div>
    {
          isSignUp ? (
            <>
            {
            document.querySelector(".sign-up").style.display='none',
            document.querySelector(".sign-in").style.display='none', 
            setTimeout(function(){
              window.location.reload();
            }, 3000)
            }
            <div className="signUpMessage signUpTitle">Inscription réussie</div>
            <div className="signUpMessage signUpMessage1">Un mail vous a été envoyé</div>
            <div className="signUpMessage signUpMessage2">pour finaliser votre inscription.</div>
            </>
          ) : ( null )}   
    <div className="form sign-in">
      <form className="forms" action="#" onSubmit={Connection}>
        <h1 className="forms__title">Connexion</h1>

        <Field
            className="forms__input"
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            className="forms__input"
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />    
        <div className="signInErrorMessage">{messageSignIn}</div>

        <a href="https://maestra.chrisdev.fr/mot-de-passe-oublie" className="forgotPassword">
          Mot de passe oublié ?
        </a>

        <button type="submit" className="signInButton formButton">Se connecter</button>
      </form>
    </div>
    <div className="container2">
      <div className="overlay">
        <div className="overlay-panel left-part">
          <h1 className="forms__title">Content de te revoir !</h1>
          <p className="forms__p">Connecte toi avec tes identifiants</p>
          <button className="signButton formButton" id="signIn" onClick={viewSignIn}>Connexion</button>
        </div>
        <div className="overlay-panel right-part">
          <h1 className="forms__title">Hello !</h1>
          <p className="forms__p">Inscris toi si ce n'est pas encore fait</p>
          <button className="signButton formButton" id="signUp" onClick={viewSignUp}>Inscription</button>
        </div>
      </div>
    </div>
  </div>
  </main>
  )}
  </div>
);
};

Connection.propTypes = {
  getUser: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isSignUp: PropTypes.bool,
  messageSignIn: PropTypes.string.isRequired,
  messageSignUp: PropTypes.string.isRequired,
  changeSelect: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

// == Export
export default Connection;
