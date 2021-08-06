import axios from "axios";
import {
  FETCH_PILLS_REVIEWS_DATA,
  saveReviews,
  FETCH_LAST_REVIEWS_DATA,
  saveLastReviews,
  SEND_REVIEW,
  setLoading,
  setDeleteMessage,
} from "src/actions/reviews";
import { DELETE_THIS_REVIEW } from "../actions/reviews";

import { getUserDataById } from "../actions/user";

const reviewsDataMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_THIS_REVIEW:
      axios
        .delete(
          `https://maestra.chrisdev.fr/api/user/account/review/${action.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(setDeleteMessage('Avis supprimé avec succès', '#a1e478'));
          store.dispatch(getUserDataById(action.user.id));
        })
        .catch((error) => {
          console.log("error", error);
        });
      next(action);
      break;
    case FETCH_PILLS_REVIEWS_DATA:
      store.dispatch(setLoading(true));
      axios
        .get(`https://maestra.chrisdev.fr/api/pill/${action.id}/review`)
        .then((response) => {
          store.dispatch(saveReviews(response.data));
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      next(action);
      break;
    case FETCH_LAST_REVIEWS_DATA:
      store.dispatch(setLoading(true));
      axios
        .get("https://maestra.chrisdev.fr/api/pill/review/home")
        .then((response) => {
          store.dispatch(saveLastReviews(response.data));
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      next(action);
      break;
    case SEND_REVIEW:
      const {
        content,
        title,
        acne,
        libido,
        migraine,
        weight,
        breast_pain,
        nausea,
        pms,
        status,
      } = store.getState().reviews;
      const perturbationPeriod = store.getState().reviews.perturbation_period;
      const user = store.getState().user.id;

      const pill  = store.getState().pills.currentPill.id;
 
      axios.post(
        `https://maestra.chrisdev.fr/api/pill/review/${user}/add`, JSON.stringify(
        {
          user: parseInt(user),
          pill,
          content,
          title,
          acne: parseInt(acne),
          libido: parseInt(libido),
          migraine: parseInt(migraine),
          weight: parseInt(weight),
          breast_pain:parseInt(breast_pain),
          nausea: parseInt(nausea),
          pms: parseInt(pms),
          "perturbationPeriod":perturbationPeriod === "true" ? true:false,
          status: parseInt(status),
        }),
        ).then((response) => {
          console.log(response);

        })
        .catch((error) => {
          console.log("error", error);
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default reviewsDataMiddleware;
