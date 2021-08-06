import pillsData from "src/pillsData";
import {
  SAVE_PILLS,
  SAVE_POPULAR_PILLS,
  SAVE_CURRENT_PILL,
  INCREASE_PILLS_COUNT,
  DECREASE_PILLS_COUNT,
  PILLS_COUNT_TO_ZERO,
  PILLS_COUNT_TO_MAX,
  SEARCH_PILL,
  SEARCH,
  SEARCH_SORT,
  SAVE_SEARCH_RESULT,
  SET_LOADING,
  CHANGE_FIELDS_SELECT,
  SAVE_SEARCH_RESULT_FILTERS,
  SEE_ALL_PILLS,
  CLEAR_SEARCH_BAR,
} from "src/actions/pills";

export const initialState = {
  generation: 0,
  interruption: "all",
  type: "all",
  undesirable: "alpha",
  loading: false,
  isSearchOn: false,
  isSearchWithFiltersOn: false,
  searchResult: [],
  searchResultFilters: [],
  searchPill: '',
  pillsData: [],
  popularPills: [],
  pillsCount: 0,
  pillsCountSecondCarousel: 1,
  pillsCountThirdCarousel: 2,
  currentPill: {
    'id': 1,
    'name': 'Triella',
    'description': 'Ce médicament est un contraceptif oral (pilule) qui contient un estrogène et un progestatif de première génération. Il est minidosé (moins de 0,04 mg d\'estrogène) et triphasique (tous les comprimés ne contiennent pas la même quantité d\'hormones et sont de trois couleurs différentes).',
    'picture': '', 
    'reimbursed': 100, 
    'generation': 1,
    'type': null, 
    'interruption': false, 
    'laboratory': 'Jassen Cilag',
    'delay_intake': 12,
    'composition': 'Comprimé blanc : Blablabla 0.035mg, 0.035mg\r\n',
    'date': '2021-07-19T14:05:38+02:00',
    'slug': 'pilule1', 
    'created_at': '2021-07-19T14:05:38+02:00',
    'updated_at': null,
    'count_reviews': 0,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PILLS:
      return {
        ...state,
        pillsData: action.pillsData,
      };
    case SAVE_CURRENT_PILL:
      return {
        ...state,
        currentPill: action.currentPill,
      };
    case SAVE_POPULAR_PILLS:
      return {
        ...state,
        popularPills: action.popularPillsData,
      };
    case INCREASE_PILLS_COUNT:
      return {
        ...state,
        [action.where]: state[action.where] + 1,
      };
    case DECREASE_PILLS_COUNT:
      return {
        ...state,
        [action.where]: state[action.where] - 1,
      };
    case PILLS_COUNT_TO_ZERO:
      return {
        ...state,
        [action.where]: 0,
      };
    case PILLS_COUNT_TO_MAX:
      return {
        ...state,
        [action.where]: state.popularPills.length - 1,
      };
    case SEARCH_PILL:
      return {
        ...state,
        [action.name]: action.value,
      }
    case SEARCH:
      return {
        ...state,
        searchPill: '',
      }
    case SEARCH_SORT:
      return {
        ...state,
      }
    case SAVE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.data,
        isSearchOn: true,
      }
    case SAVE_SEARCH_RESULT_FILTERS:
      return {
        ...state,
        searchResultFilters: action.data,
        isSearchWithFiltersOn: true,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.value,
      }
    case CHANGE_FIELDS_SELECT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SEE_ALL_PILLS:
      return {
        ...state,
        generation: 0,
        interruption: "all",
        type: "all",
        undesirable: "alpha",
        isSearchWithFiltersOn: false,
      }
    case CLEAR_SEARCH_BAR:
      return {
        ...state,
        generation: 0,
        interruption: "all",
        type: "all",
        undesirable: "alpha",
        isSearchOn: false,
      }
    default:
      return state;
  }
};

export default reducer;