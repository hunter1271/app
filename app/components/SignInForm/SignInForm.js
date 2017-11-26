import React from 'react';
import { compose, pure } from 'recompose';
import { func, bool } from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';

SignInForm.propTypes = {
  handleSubmit: func.isRequired,
  submiting: bool,
};

SignInForm.defaultProps = {
  submiting: false,
};

function SignInForm({ handleSubmit, submiting }) {
  return (
    <Form onSubmit={handleSubmit} size="large">
      <Field
        name="email"
        component={InputField}
        label="E-mail"
        placeholder="john@site.com"
      />
      <Field
        name="password"
        component={InputField}
        label="Password"
        placeholder="Password"
        type="password"
      />
      <Button fluid loading={submiting} color="blue" size="large">
        Sign in
      </Button>
    </Form>
  );
}

const withReduxForm = reduxForm({
  form: 'signIn',
});

export default compose(withReduxForm, pure)(SignInForm);
