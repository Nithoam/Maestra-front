import { connect } from 'react-redux';

import { searchPill } from 'src/actions/pills';

import PillsList from 'src/components/PillsList';

const mapStateToProps = (state) => ({
  searchPill: state.pills.searchPill,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(searchPill(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PillsList);
