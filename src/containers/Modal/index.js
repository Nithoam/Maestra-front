import { connect } from 'react-redux';

import Modal from 'src/components/Modal';
import { closeModal } from '../../actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleModal: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
