import { connect } from 'react-redux';

import { fetchLastReviewsData, increaseReviewsCount, decreaseReviewsCount, reviewsCountToZero, reviewsCountToMax } from 'src/actions/reviews';
import { fetchPopularPillsData, increasePillsCount, decreasePillsCount, pillsCountToZero, pillsCountToMax } from 'src/actions/pills';

import Homepage from 'src/components/Homepage';

const mapStateToProps = (state) => ({
  // Last reviews
  reviewLoading: state.reviews.loading,
  lastReviews: state.reviews.lastReviews,
  reviewsCount: state.reviews.reviewsCount,
  reviewsCountSecondCarousel: state.reviews.reviewsCountSecondCarousel,
  reviewsCountThirdCarousel: state.reviews.reviewsCountThirdCarousel,
  // Populars
  pillLoading: state.pills.loading,
  popularPills: state.pills.popularPills,
  pillsCount: state.pills.pillsCount,
  pillsCountSecondCarousel: state.pills.pillsCountSecondCarousel,
  pillsCountThirdCarousel: state.pills.pillsCountThirdCarousel,
});

const mapDispatchToProps = (dispatch) => ({
  /// LAST REVIEWS
  fetchLastReviews: () => {
    dispatch(fetchLastReviewsData());
  },
  handleReviewsCarouselNextButton: (where) => {
    dispatch(increaseReviewsCount(where));
  },
  handleReviewsCarouselPreviousButton: (where) => {
    dispatch(decreaseReviewsCount(where));
  },
  restartArray: (where) => {
    dispatch(reviewsCountToZero(where));
  },
  loopArray: (where) => {
    dispatch(reviewsCountToMax(where));
  },
  /// POPULARS
  fetchPopularPills: () => {
    dispatch(fetchPopularPillsData());
  },
  handlePillsCarouselNextButton: (where) => {
    dispatch(increasePillsCount(where));
  },
  handlePillsCarouselPreviousButton: (where) => {
    dispatch(decreasePillsCount(where));
  },
  restartPillsArray: (where) => {
    dispatch(pillsCountToZero(where));
  },
  loopPillsArray: (where) => {
    dispatch(pillsCountToMax(where));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
