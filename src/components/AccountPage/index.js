import React, { useEffect } from "react";

import PropTypes from "prop-types";

import "./account-page.scss";
import useTitle from "src/selectors/useTitle";
import flower from "src/assets/images/sunflower-header.png";

import Field from "src/components/AccountPage/Field";
import AccountModal from "src/containers/AccountModal";
import Loading from "src/components/Loading";
import ReviewItem from "src/components/AccountPage/ReviewItem";

import nothing from "./nothing.png";

const AccountPage = ({
  user,
  changeField,
  changeValue,
  deleteAccount,
  fetchUserReview,
  fetchUserData,
  userDataLoading,
  userReviews,
  message,
  setModal,
  changeCheckbox,
  modalOn,
  deleteReview,
  deleteMessage,
  enabled,
}) => {
  const documentTitle = useTitle();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    changeValue(user);
  };

  const areYouSureToDelete = () => {
    window.confirm(
      "Supprimer son compte est une action définitive, aucun retour en arrière ne sera possible, toutes vos données seront supprimées. Etes-vous sure de vouloir effectuer cette action ?"
    )
      ? deleteAccount(user)
      : console.log("ne rien faire");
  };

  const messageStyle = {
    "background-color": message.color,
  };

  const deleteMessageStyle = {
    "background-color": deleteMessage.color,
  };

  useEffect(() => fetchUserData(user.id), []);

  useEffect(() => fetchUserReview(user.id), []);

  if (userDataLoading) {
    return <Loading />;
  }
  return (
    <main className="account-page">
      <section className="account-page__first-section" id="accountInformations">
        <header className="account-page__first-section-header">
          <h2> Paramètres du compte </h2>
          <p>
            <em>Change ton prénom, ton avatar, etc</em>
          </p>
        </header>
        <div className="account-page__background">
          <img
            src={flower}
            alt="Fleur de tournesol"
            className="account-page__background-flower"
          />
          <div className="account-page__first-section-left">
            <img
              src={`https://maestra.chrisdev.fr/uploads/pictures/${user.picture}`}
              alt="Votre avatar !"
            />
            <button type="button">Modifier son avatar</button>

            <nav className="account-page__nav">
              <ul>
                <li>
                  <a href="#accountInformations">Informations du compte</a>
                </li>
                <li>
                  <a href="#personnalInformations">Mes retours d'expérience</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="account-page__first-section-right">
            <img
              src={flower}
              alt="Fleur de tournesol"
              className="account-page__first-section-right-flower"
            />
            {message.content !== "" && (
              <div
                style={messageStyle}
                className="account-page__first-section-right-message"
              >
                {message.content}
              </div>
            )}
            <form
              className="account-page__first-section-right-form"
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <h3 className="account-page__first-section-right-general-title">
                Informations personnelles
              </h3>
              <Field
                label="Prénom"
                name="firstname"
                value={user.firstname}
                onChange={changeField}
              />

              <Field
                label="Nom"
                name="lastname"
                value={user.lastname}
                onChange={changeField}
              />

              <Field
                label="Email"
                value={user.email}
                name="email"
                onChange={changeField}
              />

              <div className="account-page__first-section-question-row">
                <p className="account-page__first-section-question-row-title">
                  Je suis fumeuse :
                </p>
                <div className="account-first-section-answer">
                  <label htmlFor="yes-smoke">
                    <input
                      type="checkbox"
                      name="smoker"
                      id="smoke"
                      checked={user.smoker}
                      value={user.smoker}
                      onChange={(e) =>
                        changeCheckbox(e.target.checked, "smoker")
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="account-page__first-section-question-row">
                <p className="account-page__first-section-question-row-title">
                  J'ai déjà donné naissance :
                </p>
                <div className="account-page__first-section-answer">
                  <label htmlFor="yes-children">
                    <input
                      type="checkbox"
                      name="children"
                      id="children"
                      onChange={(e) =>
                        changeCheckbox(e.target.checked, "children")
                      }
                      checked={user.children}
                      value={user.children}
                    />
                  </label>
                </div>
              </div>

              <button type="submit">Enregistrer les modifications</button>
            </form>

            <div className="account-page__first-section-password">
              <h3 className="account-page__first-section-password-title">
                Mot de passe
              </h3>
              <p className="account-page__first-section-password-content">
                Pour changer son mot de passe, c'est{" "}
                <span
                  className="account-page__first-section-right-modal"
                  onClick={() => setModal(true)}
                >
                  ici
                </span>{" "}
                !
              </p>
            </div>

            {modalOn && (
              <AccountModal
                user={user}
                setModal={setModal}
                changeField={changeField}
              />
            )}

            <div className="account-page__delete">
              <h3> Supprimer mon compte</h3>
              <p>
                Supprimer son compte est une action définitive, aucun retour en
                arrière ne sera possible, toutes vos données seront supprimées.
              </p>
              <button type="button" onClick={() => areYouSureToDelete()}>
                Supprimer mon compte
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="account-page__second-section"
        id="personnalInformations"
      >
        <header className="account-page__second-section__header">
          <h2> Mes retours d'expérience </h2>
          <p>
            <em>
              Retrouvez ici la liste de tous vos commentaires laissés sur le
              site !
            </em>
          </p>
        </header>

        {deleteMessage.content !== "" && (
          <p
            style={deleteMessageStyle}
            className="account-page__second-section__deleteMsg"
          >
            {deleteMessage.content}
          </p>
        )}

        <div className="account-page__second-section__reviews-list">
          {userReviews.map((review) => (
            <ReviewItem
              pillName= {review.pill.name}
              user={user}
              id={review.id}
              key={review.id}
              title={review.title}
              content={review.content}
              deleteReview={deleteReview}
            />
          ))}
        </div>

        {userReviews.length === 0 && (
          <div className="account-page__second-section__empty">
            <img
              src={nothing}
              alt="Vous n'avez encore laissé aucun commentaire !"
              className="account-page__second-section__empty-img"
            />
            <p className="account-page__second-section__empty-text">
              Vous n'avez laissé encore aucun avis !
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

AccountPage.propTypes = {
  fetchUserReview: PropTypes.func.isRequired,
  deleteReview: PropTypes.func.isRequired,
  deleteMessage: PropTypes.object.isRequired,
  userReviews: PropTypes.array.isRequired,
  setModal: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  changeField: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  userDataLoading: PropTypes.bool.isRequired,
  message: PropTypes.object,
  modalOn: PropTypes.bool.isRequired,
};

export default AccountPage;
