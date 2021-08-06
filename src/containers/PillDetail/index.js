import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PillDetail from 'src/components/PillDetail';

import { fetchPillsReviewsData } from 'src/actions/reviews';

import { fetchPillsData, fetchCurrentPillData } from 'src/actions/pills';

const mapStateToProps = (state) => ({
  reviewsData: state.reviews.reviewsData,
  pillsData: state.pills.pillsData,
  currentPill: state.pills.currentPill,
  pillsReviewsData: state.reviews.pillsReviewsData,
  reviewLoading: state.reviews.loading,
  pillLoading: state.pills.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPillsReviews: (id) => {
    dispatch(fetchPillsReviewsData(id));
  },
  fetchPills: () => {
    dispatch(fetchPillsData());
  },
  fetchCurrentPill: (id) => {
    dispatch(fetchCurrentPillData(id));
  },
});

const pillDetailConnectedToTheStore = connect(mapStateToProps, mapDispatchToProps)(PillDetail);

export default withRouter(pillDetailConnectedToTheStore);
