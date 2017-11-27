import React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { func, bool } from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
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
    <Form size="large">
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
      <Button
        loading={loading}
        onClick={onSubmit}
        fluid
        color="blue"
        size="large"
      >
        Sign in
      </Button>
    </Form>
  );
}

const withReduxForm = reduxForm({
  form: 'signIn',
});

export default compose(
  withHandlers({
    onSubmit: ({ onSubmit, ...values }) => () => {
      onSubmit({ ...values });
    },
  }),
  withReduxForm,
  pure
)(SignInForm);
