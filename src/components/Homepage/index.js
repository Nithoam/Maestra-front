import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './homepage.scss';

import Loading from 'src/components/Loading';
import flower from 'src/assets/images/sunflower-header.png';
import femme from 'src/assets/images/woman.png';
import pills from 'src/assets/images/tablet.png';
import reviews from 'src/assets/images/avis.png';
import contraceptions from 'src/assets/images/implant.png';
import mother from 'src/assets/images/avec-enfant.png';
import nomother from 'src/assets/images/sans-enfant.png';
import smoker from 'src/assets/images/smocking.png';
import nosmoker from 'src/assets/images/no-smocking.png';
import next from 'src/assets/images/next.png';

import { excerpt } from 'src/selectors';

const Homepage = ({
  // Last reviews
  fetchLastReviews,
  lastReviews,
  reviewsCount,
  reviewsCountSecondCarousel,
  reviewsCountThirdCarousel,
  handleReviewsCarouselPreviousButton,
  handleReviewsCarouselNextButton,
  restartArray,
  loopArray,
  reviewLoading,
  // Populars
  fetchPopularPills,
  popularPills,
  pillsCount,
  pillsCountSecondCarousel,
  pillsCountThirdCarousel,
  handlePillsCarouselPreviousButton,
  handlePillsCarouselNextButton,
  loopPillsArray,
  restartPillsArray,
  pillLoading,
}) => {
  /// LAST REVIEWS


  useEffect(fetchLastReviews, []);

  useEffect(fetchPopularPills, []);

  const reviewsCarouselNextElement = () => {
    // eslint-disable-next-line no-unused-expressions
    reviewsCount < lastReviews.length - 1
      ? handleReviewsCarouselNextButton('reviewsCount')
      : restartArray('reviewsCount');

    // eslint-disable-next-line no-unused-expressions
    reviewsCountSecondCarousel < lastReviews.length - 1
      ? handleReviewsCarouselNextButton('reviewsCountSecondCarousel')
      : restartArray('reviewsCountSecondCarousel');

    // eslint-disable-next-line no-unused-expressions
    reviewsCountThirdCarousel < lastReviews.length - 1
      ? handleReviewsCarouselNextButton('reviewsCountThirdCarousel')
      : restartArray('reviewsCountThirdCarousel');

    const thirdItem = document.querySelector('#lastReviewItem');
    const secondItem = document.querySelector('#secondReviewItem');
    const firstItem = document.querySelector('#firstReviewItem');

    thirdItem.classList.add('slide-in-right');
    secondItem.classList.add('small-slide-in-right');
    firstItem.classList.add('small-slide-in-right');

    setTimeout(() => {
      thirdItem.classList.remove('slide-in-right');
      secondItem.classList.remove('small-slide-in-right');
      firstItem.classList.remove('small-slide-in-right');
    }, 250);
  };

  const reviewsCarouselPreviousElement = () => {
    // eslint-disable-next-line no-unused-expressions
    reviewsCount === 0
      ? loopArray('reviewsCount')
      : handleReviewsCarouselPreviousButton('reviewsCount');

    // eslint-disable-next-line no-unused-expressions
    reviewsCountSecondCarousel === 0
      ? loopArray('reviewsCountSecondCarousel')
      : handleReviewsCarouselPreviousButton('reviewsCountSecondCarousel');

    // eslint-disable-next-line no-unused-expressions
    reviewsCountThirdCarousel === 0
      ? loopArray('reviewsCountThirdCarousel')
      : handleReviewsCarouselPreviousButton('reviewsCountThirdCarousel');

    const firstItem = document.querySelector('#firstReviewItem');
    const secondItem = document.querySelector('#secondReviewItem');
    const thirdItem = document.querySelector('#lastReviewItem');

    firstItem.classList.add('slide-in-left');
    secondItem.classList.add('small-slide-in-left');
    thirdItem.classList.add('small-slide-in-left');

    setTimeout(() => {
      firstItem.classList.remove('slide-in-left');
      secondItem.classList.remove('small-slide-in-left');
      thirdItem.classList.remove('small-slide-in-left');
    }, 250);
  };

  /// POPULARS

  const pillsCarouselNextElement = () => {
    // eslint-disable-next-line no-unused-expressions
    pillsCount < popularPills.length - 1
      ? handlePillsCarouselNextButton('pillsCount')
      : restartPillsArray('pillsCount');

    // eslint-disable-next-line no-unused-expressions
    pillsCountSecondCarousel < popularPills.length - 1
      ? handlePillsCarouselNextButton('pillsCountSecondCarousel')
      : restartPillsArray('pillsCountSecondCarousel');

    // eslint-disable-next-line no-unused-expressions
    pillsCountThirdCarousel < popularPills.length - 1
      ? handlePillsCarouselNextButton('pillsCountThirdCarousel')
      : restartPillsArray('pillsCountThirdCarousel');

    /// ANIMATION CAROUSEL ///
    const firstItem = document.querySelector('#firstPillItem');
    const secondItem = document.querySelector('#secondPillItem');
    const thirdItem = document.querySelector('#lastPillItem');

    thirdItem.classList.add('slide-in-right');
    secondItem.classList.add('small-slide-in-right');
    firstItem.classList.add('small-slide-in-right');

    setTimeout(() => {
      thirdItem.classList.remove('slide-in-right');
      secondItem.classList.remove('small-slide-in-right');
      firstItem.classList.remove('small-slide-in-right');
    }, 250);
  };

  const pillsCarouselPreviousElement = () => {
    // eslint-disable-next-line no-unused-expressions
    pillsCount === 0
      ? loopPillsArray('pillsCount')
      : handlePillsCarouselPreviousButton('pillsCount');

    // eslint-disable-next-line no-unused-expressions
    pillsCountSecondCarousel === 0
      ? loopPillsArray('pillsCountSecondCarousel')
      : handlePillsCarouselPreviousButton('pillsCountSecondCarousel');

    // eslint-disable-next-line no-unused-expressions
    pillsCountThirdCarousel === 0
      ? loopPillsArray('pillsCountThirdCarousel')
      : handlePillsCarouselPreviousButton('pillsCountThirdCarousel');

    // ANIMATION CAROUSEL //

    const firstItem = document.querySelector('#firstPillItem');
    const secondItem = document.querySelector('#secondPillItem');
    const thirdItem = document.querySelector('#lastPillItem');

    firstItem.classList.add('slide-in-left');
    secondItem.classList.add('small-slide-in-left');
    thirdItem.classList.add('small-slide-in-left');

    setTimeout(() => {
      firstItem.classList.remove('slide-in-left');
      secondItem.classList.remove('small-slide-in-left');
      thirdItem.classList.remove('small-slide-in-left');
    }, 250);
  };

  // Scroll Reveal

  //  ScrollReveal().reveal('.homepage__populars', { mobile: false, delay: 600, duration: 1000 });
  // ScrollReveal().reveal('.homepage__second-section-popular-title', { mobile: false, delay: 600, duration: 1000 });

  //  ScrollReveal().reveal('.homepage__reviews', { mobile: false, delay: 600, duration: 1000 });
  // ScrollReveal().reveal('.homepage__reviews-title', { mobile: false, delay: 600, duration: 1000 });

  return (
    <div className="homepage">
      <main className="homepage__main">
        <section className="homepage__first-section" id="first-section">
          <img
            className="homepage__first-section-flower"
            src={flower}
            alt="tournesol décoratif"
            draggable="false"
          />

          <div className="homepage__first-section-introduction">
            <div className="homepage__first-section-introduction-1">
              <h1 className="homepage__first-section-title">
                M
                <span className="homepage__first-section-span" id="ae">
                  æ
                </span>
                stra
              </h1>
              <p className="homepage__first-section-description">
              Bienvenue sur Maestra ! Nous sommes une sorte de forum 2.0 qui vous propose d’aider les autres femmes à faire un choix sur leur pilule contraceptive. Nous vous offrons la possibilité de mettre un avis complet sur les effets secondaires et votre ressenti des pilules que vous avez déjà prises. C’est donc un site informatif basé sur les expériences des utilisatrices.
              </p>
            </div>
            <img
              src={femme}
              alt="Dessin d'un buste de femme"
              className="homepage__first-section-woman"
              draggable="false"
            />
          </div>

          <aside className="homepage__icons-presentation">
            <div className="homepage__icons-presentation-element">
              <img src={pills} alt="Icone d'une tablette contraceptive." />
              <p>Retrouvez toutes les pilules</p>
            </div>

            <div className="homepage__icons-presentation-element">
              <img
                src={reviews}
                alt="Icone d'une femme qui parle"
                className="homepage__icons-presentation-element-img"
              />
              <p>Des avis basés sur du vécu</p>
            </div>

            <div className="homepage__icons-presentation-element">
              <img src={contraceptions} alt="Icone d'un stérilet." />
              <p>Tous les moyens de contraceptions</p>
            </div>
          </aside>

          <a href="#second-section" className="homepage__next">
            <img
              src={next}
              alt="Flêche insitant à scroll à la section suivante"
            />
          </a>
        </section>

        <section className="homepage__second-section" id="second-section">
          <h2 className="homepage__second-section-popular-title">Les pilules avec le plus d'avis</h2>

          {pillLoading && <Loading />}
          {popularPills.length > 0 && (
            <div className="homepage__populars">
              <button
                type="button"
                onClick={() => pillsCarouselPreviousElement()}
              >
                {' '}
                <i className="fas fa-chevron-left" />
              </button>
              <figure className="homepage__populars-content" id="firstPillItem">
                <p className="homepage__populars-reviews">
                  {popularPills[pillsCount].count_reviews} avis
                </p>
                <img
                  src={`https://maestra.chrisdev.fr/uploads/pills/${popularPills[pillsCount].picture}`}
                  alt="boite de pilule"
                />
                <figcaption>{popularPills[pillsCount].name}</figcaption>
                <p className="homepage__populars-link">
                  <Link to={`pilule/${popularPills[pillsCount].slug}`}>
                    Toutes les infos &#38; avis
                  </Link>
                </p>
              </figure>

              <figure
                className="homepage__populars-content none0"
                id="secondPillItem"
              >
                <p className="homepage__populars-reviews">
                  {popularPills[pillsCountSecondCarousel].count_reviews} avis
                </p>
                <img
                  src={`https://maestra.chrisdev.fr/uploads/pills/${popularPills[pillsCountSecondCarousel].picture}`}
                  alt="boite de pilule"
                />
                <figcaption>
                  {popularPills[pillsCountSecondCarousel].name}
                </figcaption>
                <p className="homepage__populars-link">
                  <Link
                    to={`pilule/${popularPills[pillsCountSecondCarousel].slug}`}
                  >
                    Toutes les infos &#38; avis
                  </Link>
                </p>
              </figure>

              <figure
                className="homepage__populars-content none"
                id="lastPillItem"
              >
                <p className="homepage__populars-reviews">
                  {popularPills[pillsCountThirdCarousel].count_reviews} avis
                </p>
                <img
                  src={`https://maestra.chrisdev.fr/uploads/pills/${popularPills[pillsCountThirdCarousel].picture}`}
                  alt="boite de pilule"
                />
                <figcaption>
                  {popularPills[pillsCountThirdCarousel].name}
                </figcaption>
                <p className="homepage__populars-link">
                  <Link
                    to={`pilule/${popularPills[pillsCountThirdCarousel].slug}`}
                  >
                    Toutes les infos &#38; avis
                  </Link>
                </p>
              </figure>
              <button type="button" onClick={() => pillsCarouselNextElement()}>
                {' '}
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          )}

          <h2 className="homepage__reviews-title">
            Les derniers avis des utilisatrices
          </h2>

          {reviewLoading && <Loading />}
          {popularPills.length > 0 && (
            <div className="homepage__reviews">
              <button
                type="submit"
                onClick={() => reviewsCarouselPreviousElement()}
              >
                {' '}
                <i className="fas fa-chevron-left" />{' '}
              </button>
              <div className="homepage__review-item" id="firstReviewItem">
                <div className="homepage__reviews-element">
                  <div className="homepage__reviews-element-icons">
                    <img
                      src={`https://maestra.chrisdev.fr/uploads/pictures/${lastReviews[reviewsCount].user.picture}`}
                      alt="Avatar de l'utilisateur"
                    />
                    <img
                      src={
                        lastReviews[reviewsCount].user.children === 'oui'
                          ? mother
                          : nomother
                      }
                      alt="Icone mère ou non"
                    />
                    <img
                      src={
                        lastReviews[reviewsCount].user.smoker === 'oui'
                          ? smoker
                          : nosmoker
                      }
                      alt="Icone fumeur ou non"
                    />
                  </div>

                  <div className="homepage__reviews-element-content">
                    <div className="homepage__reviews-element-title">
                      <p>
                        <strong>
                          {lastReviews[reviewsCount].user.firstname},{' '}
                          {lastReviews[reviewsCount].user_age} ans
                        </strong>
                      </p>
                      <Link
                        to={`pilule/${lastReviews[reviewsCount].pill.slug}`}
                        className="homepage__reviews-element-link"
                      >
                        Lire l'avis
                      </Link>
                    </div>
                    <p className="homepage__reviews-element-review-title">{lastReviews[reviewsCount].title}</p>
                    <p className="homepage__reviews-element-review">
                      {excerpt(lastReviews[reviewsCount].content)}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="homepage__review-item none0"
                id="secondReviewItem"
              >
                <div className="homepage__reviews-element">
                  <div className="homepage__reviews-element-icons">
                    <img
                      src={`https://maestra.chrisdev.fr/uploads/pictures/${lastReviews[reviewsCountSecondCarousel].user.picture}`}
                      alt="Avatar de l'utilisateur"
                    />
                    <img
                      src={
                        lastReviews[reviewsCountSecondCarousel].user
                          .children === 'oui'
                          ? mother
                          : nomother
                      }
                      alt="Icone mère ou non"
                    />
                    <img
                      src={
                        lastReviews[reviewsCountSecondCarousel].user.smoker
                        === 'oui'
                          ? smoker
                          : nosmoker
                      }
                      alt="Icone fumeur ou non"
                    />
                  </div>

                  <div className="homepage__reviews-element-content">
                    <div className="homepage__reviews-element-title">
                      <p>
                        <strong>
                          {
                            lastReviews[reviewsCountSecondCarousel].user
                              .firstname
                          }
                          , {lastReviews[reviewsCountSecondCarousel].user_age}{' '}
                          ans
                        </strong>
                      </p>
                      <Link
                        to={`pilule/${lastReviews[reviewsCountSecondCarousel].pill.slug}`}
                        className="homepage__reviews-element-link"
                      >
                        Lire l'avis
                      </Link>
                    </div>
                    <p className="homepage__reviews-element-review-title">{lastReviews[reviewsCountSecondCarousel].title}</p>
                    <p className="homepage__reviews-element-review">
                      {excerpt(lastReviews[reviewsCountSecondCarousel].content)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="homepage__review-item none" id="lastReviewItem">
                <div className="homepage__reviews-element">
                  <div className="homepage__reviews-element-icons">
                    <img
                      src={`https://maestra.chrisdev.fr/uploads/pictures/${lastReviews[reviewsCountThirdCarousel].user.picture}`}
                      alt="Avatar de l'utilisateur"
                    />
                    <img
                      src={
                        lastReviews[reviewsCountThirdCarousel].user.children
                        === 'oui'
                          ? mother
                          : nomother
                      }
                      alt="Icone mère ou non"
                    />
                    <img
                      src={
                        lastReviews[reviewsCountThirdCarousel].user.smoker
                        === 'oui'
                          ? smoker
                          : nosmoker
                      }
                      alt="Icone fumeur ou non"
                    />
                  </div>

                  <div className="homepage__reviews-element-content">
                    <div className="homepage__reviews-element-title">
                      <p>
                        <strong>
                          {
                            lastReviews[reviewsCountThirdCarousel].user
                              .firstname
                          }
                          , {lastReviews[reviewsCountThirdCarousel].user_age}{' '}
                          ans
                        </strong>
                      </p>
                      <Link
                        to={`pilule/${lastReviews[reviewsCountThirdCarousel].pill.slug}`}
                        className="homepage__reviews-element-link"
                      >
                        Lire l'avis
                      </Link>
                    </div>
                    <p className="homepage__reviews-element-review-title">{lastReviews[reviewsCountThirdCarousel].title}</p>
                    <p className="homepage__reviews-element-review">
                      {excerpt(lastReviews[reviewsCountThirdCarousel].content)}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => reviewsCarouselNextElement()}
              >
                {' '}
                <i className="fas fa-chevron-right" />{' '}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

Homepage.propTypes = {
  // last reviews
  reviewLoading: PropTypes.bool.isRequired,
  fetchLastReviews: PropTypes.func.isRequired,
  lastReviews: PropTypes.array.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  reviewsCountSecondCarousel: PropTypes.number.isRequired,
  reviewsCountThirdCarousel: PropTypes.number.isRequired,
  handleReviewsCarouselNextButton: PropTypes.func.isRequired,
  handleReviewsCarouselPreviousButton: PropTypes.func.isRequired,
  restartArray: PropTypes.func.isRequired,
  loopArray: PropTypes.func.isRequired,
  // populars
  pillLoading: PropTypes.bool.isRequired,
  fetchPopularPills: PropTypes.func.isRequired,
  popularPills: PropTypes.array.isRequired,
  pillsCount: PropTypes.number.isRequired,
  pillsCountSecondCarousel: PropTypes.number.isRequired,
  pillsCountThirdCarousel: PropTypes.number.isRequired,
  handlePillsCarouselPreviousButton: PropTypes.func.isRequired,
  handlePillsCarouselNextButton: PropTypes.func.isRequired,
  restartPillsArray: PropTypes.func.isRequired,
  loopPillsArray: PropTypes.func.isRequired,
};

export default Homepage;
