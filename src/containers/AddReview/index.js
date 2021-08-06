import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddReview from 'src/components/AddReview';

import { toggleSendReview,changeReviewField, changeReviewSelect,changeReviewArea, sendReview, errorSendTitleReview, errorSendContentReview} from 'src/actions/reviews';

const mapStateToProps = ( state, ownProps ) => ({
  pillsData: state.pills.pillsData,
  currentPill: state.pills.currentPill,
  title: state.reviews.title,
  content: state.reviews.content,
  acne: state.reviews.acne,
  libido: state.reviews.libido,
  migraine: state.reviews.migraine,
  weight: state.reviews.weight,
  breast_pain: state.reviews.breast_pain,
  nausea: state.reviews.nausea,
  pms: state.reviews.pms,
  pertubation_period: state.reviews.pertubation_period,
  pillsData: state.pills.pillsData,
  currentPill: state.pills.currentPill,
  messageContentErrorReview: state.reviews.messageContentErrorReview,
  messageTitleErrorReview: state.reviews.messageTitleErrorReview,
  reviewSended: state.reviews.reviewSended,
});

const mapDispatchToProps = (dispatch) => ({

  // Function for all controlled fields based on field's name and value.
  changeField: function (value, name) {
    dispatch(changeReviewField(value, name));
  },
  changeTextArea: function (value, name) {
    dispatch(changeReviewArea(value, name));
  },
  // Function for all controlled selects based on field's name and value.
  changeSelect: function (value,name) {
    dispatch(changeReviewSelect(value, name));
  },
  handleFormReview: function () {
    dispatch(sendReview());
  },
  handleTitleErrorReview: function () {
    dispatch(errorSendTitleReview());
  },
  handleContentErrorReview: function () {
    dispatch(errorSendContentReview());
  },
  handleValidateReview: function (){
    dispatch(toggleSendReview())
  }
});

const addReviewConnectedToTheStore = connect(mapStateToProps, mapDispatchToProps)(AddReview);

export default withRouter(addReviewConnectedToTheStore);