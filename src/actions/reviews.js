export const FETCH_PILLS_REVIEWS_DATA = 'FETCH_PILLS_REVIEWS_DATA';

export const fetchPillsReviewsData = (id) => ({
  type: FETCH_PILLS_REVIEWS_DATA,
  id,
});

export const FETCH_LAST_REVIEWS_DATA = 'FETCH_LAST_REVIEWS_DATA';

export const fetchLastReviewsData = () => ({
  type: FETCH_LAST_REVIEWS_DATA,
});
export const SAVE_LAST_REVIEWS = 'SAVE_LAST_REVIEWS';

export const saveLastReviews = (lastReviewsData) => ({
  type: SAVE_LAST_REVIEWS,
  lastReviewsData,
});

export const SAVE_REVIEWS = 'SAVE_REVIEWS';

export const saveReviews = (pillsReviewsData) => ({
  type: SAVE_REVIEWS,
  pillsReviewsData,
});

export const CHANGE_REVIEW_FIELD = 'CHANGE_REVIEW_FIELD';

export const changeReviewField = (value, name) => ({
  type: CHANGE_REVIEW_FIELD,
  value,
  name,
});
export const CHANGE_REVIEW_AREA = 'CHANGE_REVIEW_AREA';

export const changeReviewArea = (value, name) => ({
  type: CHANGE_REVIEW_AREA,
  value,
  name,
});

export const CHANGE_REVIEW_SELECT = 'CHANGE_REVIEW_SELECT';

export const changeReviewSelect = (value, name) => ({
  type: CHANGE_REVIEW_SELECT,
  value,
  name,
});

export const SEND_REVIEW = 'SEND_REVIEW';

export const sendReview = (id) => ({
  type: SEND_REVIEW,
  id,
});

export const ERROR_SEND_TITLE_REVIEW = 'ERROR_SEND_TITLE_REVIEW';

export const errorSendTitleReview = (messageTitleErrorReview) => ({
  type: ERROR_SEND_TITLE_REVIEW,
  messageTitleErrorReview,
});

export const ERROR_SEND_CONTENT_REVIEW = 'ERROR_SEND_CONTENT_REVIEW';

export const errorSendContentReview = (messageContentErrorReview) => ({
  type: ERROR_SEND_CONTENT_REVIEW,
  messageContentErrorReview,
});

export const INCREASE_REVIEWS_COUNT = 'INCREASE_REVIEWS_COUNT';

export const increaseReviewsCount = (where) => ({
  type: INCREASE_REVIEWS_COUNT,
  where,
});

export const DECREASE_REVIEWS_COUNT = 'DECREASE_REVIEWS_COUNT';

export const decreaseReviewsCount = (where) => ({
  type: DECREASE_REVIEWS_COUNT,
  where,
});

export const REVIEWS_COUNT_TO_ZERO = 'REVIEWS_COUNT_TO_ZERO';

export const reviewsCountToZero = (where) => ({
  type: REVIEWS_COUNT_TO_ZERO,
  where,
});

export const REVIEWS_COUNT_TO_MAX = 'REVIEWS_COUNT_TO_MAX';

export const reviewsCountToMax = (where) => ({
  type: REVIEWS_COUNT_TO_MAX,
  where,
});

export const SET_LOADING = 'SET_LOADING';

export const setLoading = (value) => ({
  type: SET_LOADING,
  value,
});

export const TOGGLE_SEND_REVIEW = 'TOGGLE_SEND_REVIEW';

export const toggleSendReview = (reviewSended) => ({
  type: TOGGLE_SEND_REVIEW,
  reviewSended,
});

export const DELETE_THIS_REVIEW = 'DELETE_THIS_REVIEW';

export const deleteThisReview = (id, user) => ({
  type: DELETE_THIS_REVIEW,
  id,
  user,
});

export const SET_DELETE_MESSAGE = 'SET_DELETE_MESSAGE';

export const setDeleteMessage = (content, color) => ({
  type: SET_DELETE_MESSAGE,
  content,
  color,
});

