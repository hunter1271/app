import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import SignInForm from 'components/SignInForm';

import reducer, { request } from './ducks';
import { emailSelector, passwordSelector, loadingSelector } from './selectors';
import saga from './sagas';

const mapStateToProps = createStructuredSelector({
  email: emailSelector,
  password: passwordSelector,
  loading: loadingSelector,
});

const mapDispatchToProps = {
  onSubmit: request,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(withReducer, withSaga, withConnect)(SignInForm);
