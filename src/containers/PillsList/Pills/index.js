import { connect } from 'react-redux';

import { fetchPillsData, searchPill } from 'src/actions/pills';

import Pills from 'src/components/PillsList/Pills';

const mapStateToProps = (state) => ({
  pillsData: state.pills.pillsData,
  searchResult: state.pills.searchResult,
  searchResultFilters: state.pills.searchResultFilters,
  searchPill: state.pills.searchPill,
  loading: state.pills.loading,
  isSearchOn: state.pills.isSearchOn,
  isSearchWithFiltersOn: state.pills.isSearchWithFiltersOn,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPills: () => {
    dispatch(fetchPillsData());
  },
  changeField: (value, name) => {
    dispatch(searchPill(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pills);
