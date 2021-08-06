import React from 'react';

import './teamdev.scss';
import arnaud from 'src/assets/images/arnaud.png'
import lulu from 'src/assets/images/lulu.png'
import nicolas from 'src/assets/images/nicolas.jpg'
import victor from 'src/assets/images/victor.jpg'
import chris from 'src/assets/images/chris.jpg'

const Teamdev = () => (
  <main className="teamdev">
    <section className="teamdev__cards">

      <div className="teamdev__card">
        <img className="teamdev__card-photo" src={lulu} />
        <h2 className="teamdev__card-name"> Lucile Bouron</h2>
        <h3 className="teamdev__card-work">Développeuse back-end (Symfony) </h3>
        <p className="teamdev__card-situation">A la recherche d'un CDI</p>
        <p className="teamdev__card-region"><i className="fas fa-location-arrow"></i> Toulouse (31)</p>
        <p className="teamdev__card-github"><a href="https://github.com/LuluBouron"><i className="fab fa-github"></i> LuluBouron</a></p>
        <a href="mailto:lucilebouron.dev@gmail.com "className="teamdev__card-connection"><i className="fas fa-envelope"></i> lucilebouron.dev@gmail.com </a>
      </div>

      <div className="teamdev__card">
        <img className="teamdev__card-photo" src={chris} />
        <h2 className="teamdev__card-name">Christopher Rousseau</h2>
        <h3 className="teamdev__card-work">Développeur back-end (Symfony)</h3>
        <p className="teamdev__card-situation">A la recherche d'un CDI</p>
        <p className="teamdev__card-region"><i className="fas fa-location-arrow"></i> Clermont-Ferrand (63)</p>
        <p className="teamdev__card-github"><a href="https://github.com/chris-rousseau"> <i className="fab fa-github"></i> chris-rousseau</a></p>
        <a href="mailto:contact@chrisdev.fr"className="teamdev__card-connection"><i className="fas fa-envelope"></i> contact@chrisdev.fr</a>
      </div>

      <div className="teamdev__card">
        <img className="teamdev__card-photo" src={victor} />
        <h2 className="teamdev__card-name"> Victor Paumier </h2>
        <h3 className="teamdev__card-work"> Développeur front-end (React)</h3>
        <p className="teamdev__card-situation">Etudiant en marketing digital</p>
        <p className="teamdev__card-region"><i className="fas fa-location-arrow"></i> Lille (59) </p>
        <p className="teamdev__card-github"><a href="https://github.com/lifeaddikt"><i className="fab fa-github"></i> lifeaddikt</a></p>
        <a href="mailto:victor.paumier@neuf.fr"className="teamdev__card-connection"><i className="fas fa-envelope"></i> victor.paumier@neuf.fr</a>
      </div>

      <div className="teamdev__card">
        <img className="teamdev__card-photo" src={arnaud} />
        <h2 className="teamdev__card-name"> Arnaud Barbey</h2>
        <h3 className="teamdev__card-work"> Développeur front-end (React)</h3>
        <p className="teamdev__card-situation">A la recherche d'un CDI</p>
        <p className="teamdev__card-region"><i className="fas fa-location-arrow"></i> Caen (14)</p>
        <p className="teamdev__card-github"><a href="https://github.com/ArnaudB14"><i className="fab fa-github"></i> ArnaudB14</a></p>
        <a href="mailto:arnaud.barbey14@gmail.com"className="teamdev__card-connection"><i className="fas fa-envelope"></i> arnaud.barbey14@gmail.com</a>
      </div>

      <div className="teamdev__card">
        <img className="teamdev__card-photo" src={nicolas} />
        <h2 className="teamdev__card-name"> Nicolas Garilliere</h2>
        <h3 className="teamdev__card-work"> Développeur front-end (React)</h3>
        <p className="teamdev__card-situation">A la recherche d'une alternance</p>
        <p className="teamdev__card-region"><i className="fas fa-location-arrow"></i> Région Parisienne (92)</p>
        <p className="teamdev__card-github"><a href="https://github.com/Nithoam"><i className="fab fa-github"></i> Nithoam </a></p>
        <a href="mailto:nicolas.nithoam@gmail.com"className="teamdev__card-connection"><i className="fas fa-envelope"></i> nicolas.nithoam@gmail.com</a>
      </div>

    </section>
  </main>
);

export default Teamdev;
