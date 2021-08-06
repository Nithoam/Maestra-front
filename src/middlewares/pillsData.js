import axios from "axios";
import {
  FETCH_PILLS_DATA,
  savePills,
  FETCH_POPULAR_PILLS_DATA,
  savePopularPills,
  FETCH_CURRENT_PILL_DATA,
  saveCurrentPill,
  SEARCH,
  SEARCH_SORT,
  saveSearchResult,
  setLoading,
  saveSearchResultFilters,
} from "src/actions/pills";

const pillsDataMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PILLS_DATA:
      store.dispatch(setLoading(true));
      axios
        .get("https://maestra.chrisdev.fr/api/pill")
        .then((response) => {
          store.dispatch(savePills(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(
          () => {
            store.dispatch(setLoading(false));
          },
        );
      next(action);
      break;
    case FETCH_POPULAR_PILLS_DATA:
      store.dispatch(setLoading(true));
      axios
        .get("https://maestra.chrisdev.fr/api/pill/home")
        .then((response) => {
          store.dispatch(savePopularPills(response.data));
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(
          () => {
            store.dispatch(setLoading(false));
          },
        );
      next(action);
      break;
    case FETCH_CURRENT_PILL_DATA:
      store.dispatch(setLoading(true));
      axios
        .get(`https://maestra.chrisdev.fr/api/pill/${action.id}`)
        .then((response) => {
          store.dispatch(saveCurrentPill(response.data));
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(
          () => {
            store.dispatch(setLoading(false));
          },
        );
      next(action);
      break;
    case SEARCH:
      const search = store.getState().pills.searchPill;
      store.dispatch(setLoading(true));
      axios
      .get(`https://maestra.chrisdev.fr/api/pill/search?query=${search}`)
      .then((response) => {
        store.dispatch(saveSearchResult(response.data));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(
        ()=>{
          store.dispatch(setLoading(false));
        },
      );
    next(action);
    break;
    case SEARCH_SORT:
      const { interruption, generation, type, undesirable } = store.getState().pills;
      store.dispatch(setLoading(true));
      axios
      .post('https://maestra.chrisdev.fr/api/pill/search/sort', {
        interruption,
        generation: parseInt(generation),
        type,
        undesirable,
      })
      .then((response) => {
        store.dispatch(saveSearchResultFilters(response.data));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(
        ()=>{
          store.dispatch(setLoading(false));
        }
      )
    next(action);
    break;
    default:
      next(action);
  }
};

export default pillsDataMiddleware;
