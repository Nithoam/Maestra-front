import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import useTitle from 'src/selectors/useTitle';
import smoker from "src/assets/images/smocking.png";
import nosmoker from "src/assets/images/no-smocking.png";
import child from "src/assets/images/avec-enfant.png";
import nochild from "src/assets/images/sans-enfant.png";
import { changeDate } from "src/selectors";
import { findPill } from "src/selectors/pill";

import sunflower from "src/assets/images/sunflower-header.png";

import Loading from "src/components/Loading";

import "./pill.scss";

const PillDetail = ({
  currentPill,
  reviewLoading,
  pillLoading,
  pillsReviewsData,
  pillsData,
  fetchPills,
  fetchPillsReviews,
  fetchCurrentPill,
}) => {
  const documentTitle = useTitle('Pilule - Maestra')
  const location = useLocation();
  const { pathname } = location;
  const slug = pathname.slice(8);
  useEffect(fetchPills, []);
  
  const pill = findPill(pillsData, slug);
  
  useEffect(() => {
    if (pill) fetchPillsReviews(pill.id);
  }, [pill]);
  
  useEffect(() => {
    if (pill) fetchCurrentPill(pill.id);
  }, [pill]);
  
  let reimbursedSentence = "";
  
  if (reviewLoading === false || pillLoading === false) {
    if (currentPill.reimbursed === 0) {
      reimbursedSentence = "Non remboursé";
    } else if (currentPill.reimbursed === 100) {
      reimbursedSentence = "Intégralement remboursé";
    } else {
      reimbursedSentence = `Remboursé à ${currentPill.reimbursed}%`;
    }
    // if (!reviewLoading || !pillLoading ){
    //   useEffect(documentTitle, []);
    // }
    return (
      <main id="pill">
        <section className="pill">
          <h2 className="pill__title title-pill">{currentPill.name}</h2>
          <div className="pill__responsive">
            <div className="pill__left-div">
              <figure className="pill__figure">
                <img
                  className="pill__figure-image"
                  src={`https://maestra.chrisdev.fr/uploads/pills/${currentPill.picture}`}
                  alt="Boite de pilule"
                  draggable="false"
                />
              </figure>
            </div>
            <div className="pill_right-div">
              <div className="pill__presentation">
                <h3 className="pill__presentation-title">
                  Présentation de la pilule
                </h3>
                <p className="pill__presentation-content">
                  {currentPill.description}
                </p>
              </div>

              <div className="pill__composition">
                <h3 className="pill__composition-title">
                  Composition de la pilule
                </h3>
                <p className="pill__composition-content">
                  {currentPill.composition}
                </p>
              </div>
              <table className="pill__table">
                <tbody className="pill__table-tbody">
                  <tr className="pill__table-tr">
                    <th className="pill__table-th">Remboursé</th>
                    <td className="pill__table-td">{reimbursedSentence}</td>
                  </tr>
                  <tr className="pill__table-tr">
                    <th className="pill__table-th">Génération</th>
                    <td className="pill__table-td">
                      {currentPill.generation}e
                    </td>
                  </tr>
                  <tr className="pill__table-tr">
                    <th className="pill__table-th">Type</th>
                    <td className="pill__table-td">{currentPill.type}</td>
                  </tr>
                  <tr className="pill__table-tr">
                    <th className="pill__table-th">Laboratoire</th>
                    <td className="pill__table-td">{currentPill.laboratory}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h2 className="pill__title title-review">
            Avis &#38; retours d'expériences
          </h2>

          
            <button className="pill__button button-top"><Link to={`/pilule/${currentPill.slug}/ajouter-un-avis`}>Ajouter un avis</Link></button>
          

          <div className="pill__reviews">
            {pillsReviewsData.map((review) => (
              <div className="pill__review" key={review.id}>
                <div className="pill__review-pictograms">
                  <img
                    className="pill__review-pictograms-avatar"
                    src={`https://maestra.chrisdev.fr/uploads/pictures/${review.user.picture}`}
                    alt="avatar de l'utilisateur"
                  />
                  <img
                    className="pill__review-pictograms-smoking"
                    src={review.user.smoker ? smoker : nosmoker}
                    alt="picto smoke"
                  />
                  <img
                    className="pill__review-pictograms-child"
                    src={review.user.children ? child : nochild}
                    alt="picto child"
                  />
                </div>
                <div className="pill__review-content">
                  <div className="pill__review-informations">
                    <p className="pill__review-informations-name">
                      {review.user.firstname},
                    </p>
                    <p className="pill__review-informations-age">
                      {review.user_age} ans
                    </p>
                    <p className="pill__review-informations-title">
                      {review.title}
                    </p>
                  </div>
                  <p className="pill__review-content-review">
                    {review.content}
                  </p>
                  <p className="pill__review-content-date">
                    Avis rédigé le {changeDate(review.created_at)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img className="pill__background-flower" src={sunflower}></img>
        </section>
      </main>
    );
  } else {
    return <Loading />;
  }
};

PillDetail.propTypes = {
  fetchPills: PropTypes.func.isRequired,
  fetchCurrentPill: PropTypes.func.isRequired,
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
  reviewsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rate: PropTypes.number,
      content: PropTypes.string,
      perturbation: PropTypes.bool,
      created_at: PropTypes.string,
      user: PropTypes.shape({
        firstname: PropTypes.string,
        age: PropTypes.number,
        smoker: PropTypes.bool,
        children: PropTypes.bool,
      }),
    }).isRequired
  ).isRequired,
};

export default PillDetail;
