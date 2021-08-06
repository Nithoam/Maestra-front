import { connect } from 'react-redux';

import { searchSort, changeFieldsSelect, seeAllPills } from 'src/actions/pills';

import SelectFields from 'src/components/PillsList/SelectFields';

const mapStateToProps = (state) => ({
  searchResultFilters: state.pills.searchResultFilters,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchSort: () => {
    dispatch(searchSort());
  },
  changeSelect: function (value,name){
    dispatch(changeFieldsSelect(value, name))
  },
  handleSeeAllPills: () => {
    dispatch(seeAllPills());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectFields);
