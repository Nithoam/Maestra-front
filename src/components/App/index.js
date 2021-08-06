// == Import npm
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";

// == Import
import "./styles.scss";
import AccountPage from "src/containers/AccountPage";
import Header from "src/containers/Header";
import Homepage from "src/containers/Homepage";
import PillsList from "src/containers/PillsList";
import Modal from 'src/containers/Modal';
import PillDetail from "src/containers/PillDetail";
import Connection from "src/containers/Connection";
import Error404 from "src/components/Error404";
import Footer from "src/components/Footer";
import AddReview from "src/containers/AddReview";
import Contact from "src/containers/Contact";
import ScrollToTop from "src/selectors/ScrollToTop";
import Teamdev from 'src/components/Teamdev';
import LegalsMentions from "src/components/LegalsMentions";
import EnabledFalse from "src/components/EnabledFalse";


const App = ({ isLogged, isOpen, getUserData, enabled, role }) =>{
  useEffect(
    getUserData,
    [],
  );
  return (
  <>
  { isOpen && !localStorage.getItem('isOpen') && <Modal /> }
  <div className= {`app ${isOpen && !localStorage.getItem('isOpen') ? 'app__blur' : ''}`}>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/pilules" exact>
          <PillsList />
        </Route>
        <Route path="/pilule/:slug" exact>
          <PillDetail />
        </Route>
        <Route path="/connexion" exact>
          <Connection />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/equipe" exact>
          <Teamdev />
        </Route>
        <Route path="/mentions-legales" exact>
        <LegalsMentions />
      </Route>
      <Route path="/mon-compte" exact>
        {isLogged ? <AccountPage /> : <Redirect to="/connexion" />}
      </Route>
      <Route path="/pilule/:slug/ajouter-un-avis" exact>
        {isLogged ? <AddReview /> : <Redirect to="/connexion" />}
      </Route>
        <Redirect exact path="/pilule" to="/pilules"></Redirect>
        <Redirect exact path="/inscription" to="/connexion"></Redirect>
      <Route path="/equipe" exact>
        <Teamdev />
      </Route>
      <Route>
        <Error404 />
      </Route>
      </Switch>

      <Footer />
      </div>
    </>
)};


App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

// == Export
export default App;