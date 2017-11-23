import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import jobList from '../../components/JobList';

import { makeSelectItems, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems(),
  loading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'jobList', reducer });
const withSaga = injectSaga({ key: 'jobList', saga });

export default compose(withReducer, withSaga, withConnect)(jobList);
