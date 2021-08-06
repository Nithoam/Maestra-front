import axios from "axios";

import {
  UPDATE_USER_INFORMATION,
  DELETE_THIS_USER,
  GET_USER_DATA_BY_ID,
  CHANGE_PASSWORD_VALUE,
  getAllUserData,
  cleanState,
  setLoading,
  setMessage,
  setPasswordMessage,
  cleanPasswordInput,
  FETCH_REVIEWS_BY_ID,
  saveUserReviews,
} from "src/actions/user";

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REVIEWS_BY_ID:
      store.dispatch(setLoading(true));
      axios
        .get(
          `https://maestra.chrisdev.fr/api/user/account/${action.id}/review`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(saveUserReviews(response.data));
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      next(action);
      break;
    case CHANGE_PASSWORD_VALUE:
      axios
        .patch(
          `https://maestra.chrisdev.fr/api/user/account/${action.id}/password-edit`,
          JSON.stringify({
            oldPassword: action.oldPassword,
            newPassword: action.newPassword,
          }),
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          store.dispatch(cleanPasswordInput());
          store.dispatch(
            setPasswordMessage("Mot de passe changé avec succès !", "#a1e478")
          );
        })
        .catch((error) => {
          store.dispatch(setPasswordMessage(error.response.data.message, "#E91D1D"));
        });
      next(action);
      break;
    case UPDATE_USER_INFORMATION:
      axios
        .patch(
          `https://maestra.chrisdev.fr/api/user/account/${action.user.id}/edit`,
          JSON.stringify({
            firstname: action.user.firstname,
            lastname: action.user.lastname,
            email: action.user.email,
            smoker: action.user.smoker,
            children: action.user.children,
          }),
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          store.dispatch(setMessage("Profil mis à jour avec succès", "#a1e478"));
        })
        .catch((error) => {
          store.dispatch(setMessage("Une erreur est survenue lors de la mise à jour", "#E91D1D"));
        });
      next(action);
      break;
    case DELETE_THIS_USER:
      axios
        .delete(
          `https://maestra.chrisdev.fr/api/user/account/${action.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(cleanState());
          localStorage.clear();
        })
        .catch((error) => {
          console.log("error", error);
        });
      next(action);
      break;
    case GET_USER_DATA_BY_ID:
      setLoading(true);
      axios
        .get(`https://maestra.chrisdev.fr/api/user/account/${action.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          store.dispatch(getAllUserData(response.data));
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setLoading(false);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default userMiddleware;
