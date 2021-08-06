import React from "react";
import {NavLink} from "react-router-dom"; 

import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__first-section">
      <h2>Maestra.fr</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
        consequuntur debitis esse sunt officiis tempore nemo illo, possimus enim
        velit maiores ex iste vitae mollitia commodi tempora tenetur molestiae.
        Non.
      </p>
    </div>

    <div className="footer__legal-mentions">
      <ul>
        <li>
          <NavLink className="" activeClassName="" to="/mentions-legales" exact>
            Mentions légales
          </NavLink>
        </li>
        <li>
          <NavLink className="" activeClassName="" to="/equipe" exact>
              L'équipe du site
          </NavLink>
        </li>
        <li>
          <NavLink className="" activeClassName="" to="/contact" exact>
              Nous contacter
          </NavLink>
        </li>
        <li>
          <a>API</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
