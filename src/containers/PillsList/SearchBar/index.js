import { connect } from 'react-redux';

import { searchPill, search, clearSearchBar } from 'src/actions/pills';

import SearchBar from 'src/components/PillsList/SearchBar';

const mapStateToProps = (state) => ({
  searchPill: state.pills.searchPill,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(searchPill(value, name));
  },
  handleSearch: () => {
    dispatch(search());
  },
  handleClearSearch: () => {
    dispatch(clearSearchBar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
