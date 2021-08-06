export const FETCH_PILLS_DATA = 'FETCH_PILLS_DATA';
export const SAVE_PILLS = 'SAVE_PILLS';

export const fetchPillsData = () => ({
  type: FETCH_PILLS_DATA,
});

export const savePills = (pillsData) => ({
  type: SAVE_PILLS,
  pillsData,
});

export const FETCH_POPULAR_PILLS_DATA = 'FETCH_POPULAR_PILLS_DATA';

export const fetchPopularPillsData = () => ({
  type: FETCH_POPULAR_PILLS_DATA,
});

export const SAVE_POPULAR_PILLS = 'SAVE_POPULAR_PILLS';

export const savePopularPills = (popularPillsData) => ({
  type: SAVE_POPULAR_PILLS,
  popularPillsData,
});

export const FETCH_CURRENT_PILL_DATA = 'FETCH_CURRENT_PILL_DATA';

export const fetchCurrentPillData = (id) => ({
  type: FETCH_CURRENT_PILL_DATA,
  id,
});

export const SAVE_CURRENT_PILL = 'SAVE_CURRENT_PILL';

export const saveCurrentPill = (currentPill) => ({
  type: SAVE_CURRENT_PILL,
  currentPill,
});

export const INCREASE_PILLS_COUNT = 'INCREASE_PILLS_COUNT';

export const increasePillsCount = (where) => ({
  type: INCREASE_PILLS_COUNT,
  where,
});

export const DECREASE_PILLS_COUNT = 'DECREASE_PILLS_COUNT';

export const decreasePillsCount = (where) => ({
  type: DECREASE_PILLS_COUNT,
  where,
});

export const PILLS_COUNT_TO_ZERO = 'PILLS_COUNT_TO_ZERO';

export const pillsCountToZero = (where) => ({
  type: PILLS_COUNT_TO_ZERO,
  where,
});

export const PILLS_COUNT_TO_MAX = 'PILLS_COUNT_TO_MAX';

export const pillsCountToMax = (where) => ({
  type: PILLS_COUNT_TO_MAX,
  where,
});

export const SEARCH_PILL = 'SEARCH_PILL';

export const searchPill = (value, name) => ({
  type: SEARCH_PILL,
  value,
  name,
});

export const SEARCH = 'SEARCH';

export const search = () => ({
  type: SEARCH,
});

export const SEARCH_SORT = 'SEARCH_SORT';

export const searchSort = () => ({
  type: SEARCH_SORT,
});


export const SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT';

export const saveSearchResult = (data) => ({
  type: SAVE_SEARCH_RESULT,
  data,
});

export const SAVE_SEARCH_RESULT_FILTERS = 'SAVE_SEARCH_RESULT_FILTERS';

export const saveSearchResultFilters = (data) => ({
  type: SAVE_SEARCH_RESULT_FILTERS,
  data,
});

export const SET_LOADING = 'SET_LOADING';

export const setLoading = (value) => ({
  type: SET_LOADING,
  value,
});

export const CHANGE_FIELDS_SELECT = 'CHANGE_FIELDS_SELECT';
export const changeFieldsSelect = (value, name) => ({
  type: CHANGE_FIELDS_SELECT,
  value,
  name,
});

export const SEE_ALL_PILLS = ' SEE_ALL_PILLS';

export const seeAllPills = () => ({
  type:  SEE_ALL_PILLS,
});

export const CLEAR_SEARCH_BAR = 'CLEAR_SEARCH_BAR';

export const clearSearchBar = () => ({
  type: CLEAR_SEARCH_BAR,
});
