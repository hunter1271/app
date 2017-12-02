import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import JobList from '../../components/JobList';

import reducer from './ducks';
import { itemsSelector, loadingSelector } from './selectors';
import saga from './sagas';

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({
  items: itemsSelector,
  loading: loadingSelector,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'jobList', reducer });
const withSaga = injectSaga({ key: 'jobList', saga });

export default compose(withReducer, withSaga, withConnect)(JobList);
