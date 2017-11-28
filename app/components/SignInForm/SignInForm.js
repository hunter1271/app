import React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { InputField } from 'react-semantic-redux-form';

SignInForm.propTypes = {
  onSubmit: func.isRequired,
  loading: bool,
};

SignInForm.defaultProps = {
  loading: false,
};

function SignInForm({ onSubmit, loading }) {
  return (
    <Form onSubmit={onSubmit} size="large">
      <Field
        name="email"
        component={InputField}
        label="E-mail"
        placeholder="john@site.com"
        disabled={loading}
      />
      <Field
        name="password"
        component={InputField}
        label="Password"
        placeholder="Password"
        type="password"
        disabled={loading}
      />
      <Button type="submit" loading={loading} fluid color="blue" size="large">
        Sign in
      </Button>
    </Form>
  );
}

const withReduxForm = reduxForm({
  form: 'form/signIn',
});

const valueSelector = formValueSelector('form/signIn');
const withConnect = connect((state) => valueSelector(state, 'email', 'password'));
const handlers = {
  onSubmit: ({ onSubmit, ...values }) => () => {
    onSubmit(values);
  },
};

export default compose(
  withConnect,
  withHandlers(handlers),
  withReduxForm,
  pure
)(SignInForm);
