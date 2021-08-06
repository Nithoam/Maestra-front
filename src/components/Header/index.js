import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./header.scss";

// == Composant
const Header = ({ handleLogout, isLogged, burgerOpen, burger, role }) => {
  if (window.screen.width >= 1024) {
    burger(true);
  }

  return (
    <header className="header">
      <h1>
        <NavLink className="" activeClassName="" to="/" exact>
          <span className="header--span" id="ae">
            æ
          </span>
        </NavLink>
      </h1>
      {!burgerOpen && (
        <div
          className="header__open-burger"
          id="burger"
          onClick={() => burger(true)}
        >
          <i className="fa-lg fas fa-bars" />
        </div>
      )}

      {burgerOpen && (
        <div className="header__menu-toggle" id="burger-content">
          <nav>
            <ul>
              <li>
                <NavLink
                  onClick={() => burger(false)}
                  className="underline"
                  activeClassName="active"
                  to="/"
                  exact
                >
                  <i className="fab fa-wpforms" />
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => burger(false)}
                  className="underline"
                  activeClassName="active"
                  to="/pilules"
                  exact
                >
                  <i className="fas fa-pills" />
                  Toutes les pilules
                </NavLink>
              </li>

              {/* <li>
                <NavLink
                  onClick={() => burger(false)}
                  className="underline"
                  activeClassName="active"
                  to="/bonnes-pratiques"
                  exact
                >
                  <i className="fab fa-wpforms" />
                  Les bonnes pratiques
                </NavLink>
              </li> */}

              {isLogged ? (
                <>
                  <li>
                    <NavLink
                      onClick={() => burger(false)}
                      className="underline"
                      activeClassName="active"
                      to="/mon-compte"
                      exact
                    >
                      <i className="far fa-user" />
                      Mon compte
                    </NavLink>
                  </li>
                  {role >= 2 ? <li>
                    <a href="https://maestra.chrisdev.fr/admin"
                      onClick={() => burger(false)}
                      className="underline"
                    >
                      <i className="far fa-user" />
                      Administration
                    </a>
                  </li>
                  : null }
                  <li>
                    <NavLink to="/connexion" exact onClick={handleLogout}>
                      <i className="far fa-user" />
                      Déconnexion
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    onClick={() => burger(false)}
                    className="underline"
                    activeClassName="active"
                    to="/connexion"
                    exact
                  >
                    <i className="far fa-user" />
                    Connexion / Inscription
                  </NavLink>
                </li>
              )}
              <i
                className="fas fa-times closeBtn"
                id="closeBtn"
                onClick={() => burger(false)}
              />
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  burger: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  burgerOpen: PropTypes.bool.isRequired,
};

export default Header;
