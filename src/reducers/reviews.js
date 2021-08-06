
import reviewsData from 'src/reviewsData';
import lastReviews from 'src/lastReviews';
import { SET_DELETE_MESSAGE, TOGGLE_SEND_REVIEW, ERROR_SEND_CONTENT_REVIEW, ERROR_SEND_TITLE_REVIEW, SET_LOADING, SAVE_REVIEWS, SAVE_LAST_REVIEWS, INCREASE_REVIEWS_COUNT, DECREASE_REVIEWS_COUNT, REVIEWS_COUNT_TO_ZERO, REVIEWS_COUNT_TO_MAX, CHANGE_REVIEW_FIELD, CHANGE_REVIEW_SELECT,CHANGE_REVIEW_AREA,SEND_REVIEW } from "../actions/reviews";

export const initialState = {
  messageContentErrorReview: '',
  messageTitleErrorReview: '',
  reviewSended: false,
  content: '',
  title: '',
  acne:0,
  libido:0,
  migraine:0,
  weight:0,
  breast_pain:0,
  nausea:0,
  pms:0,
  pertubation_period:0,
  status:0,

  pillsReviewsData: [],
  deleteMessage: {
    content: '',
    color: '',
  },
  loading: false,
  reviewsData: reviewsData,
  lastReviews: lastReviews,
  reviewsCount: 0,
  reviewsCountSecondCarousel: 1,
  reviewsCountThirdCarousel: 2,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DELETE_MESSAGE:
      return {
        ...state,
        deleteMessage: {
          content: action.content,
          color: action.color,
        },
      };
    case SAVE_REVIEWS:
      return {
        ...state,
        pillsReviewsData: action.pillsReviewsData,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case SAVE_LAST_REVIEWS:
      return {
        ...state,
        lastReviews: action.lastReviewsData,
      };
    case INCREASE_REVIEWS_COUNT:
      return {
        ...state,
        [action.where]: state[action.where] + 1,
      };
    case DECREASE_REVIEWS_COUNT:
      return {
        ...state,
        [action.where]: state[action.where] - 1,
      };
    case REVIEWS_COUNT_TO_ZERO:
      return {
        ...state,
        [action.where]: 0,
      };
    case REVIEWS_COUNT_TO_MAX:
      return {
        ...state,
        [action.where]: state.lastReviews.length - 1,
      };
    case CHANGE_REVIEW_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_REVIEW_SELECT:
      return {
        ...state,
        [action.name]: action.value,
      };
      case CHANGE_REVIEW_FIELD:
        return {
          ...state,
          [action.name]: action.value,
        };
      case CHANGE_REVIEW_SELECT:
        return {
          ...state,
          [action.name]: action.value,
        };
      case CHANGE_REVIEW_AREA:
          return {
            ...state,
            [action.name]: action.value,
          };
      case SEND_REVIEW:
        return{
          ...state,
          content: '',
          title: '',
          acne:0,
          libido:0,
          migraine:0,
          weight:0,
          breast_pain:0,
          nausea:0,
          pms:0,
          pertubation_period:0,
          status:0,
          reviewSended: true,
          messageContentErrorReview: '',
          messageTitleErrorReview: '',
        }
      case ERROR_SEND_TITLE_REVIEW:
        return {
          ...state,
          messageTitleErrorReview: "Le titre de votre avis doit comporter au moins 5 caractères.",
        };
      case ERROR_SEND_CONTENT_REVIEW:
        return {
          ...state,
          messageContentErrorReview: "Votre avis doit comporter au moins 25 caractères.",
        };
      case TOGGLE_SEND_REVIEW:
        return {
          ...state,
          reviewSended: false,
        }

    default:
      return state;
  }
};

export default reducer;
