import React from 'react';
import { compose, pure } from 'recompose';
import { Grid, Message, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SignInForm from 'containers/SignInForm';

import './signin.scss';

function SignInPage() {
  return (
    <div className="layout narrow">
      <Grid textAlign="center" className="signin">
        <Grid.Column className="signin__column">
          <Header as="h2" textAlign="center" icon>
            <Icon name="space shuttle" rotated="counterclockwise" />
            <Header.Content>Please, Sign In</Header.Content>
          </Header>
          <SignInForm />
          <Message className="signin__message">
            Don`t have account?&nbsp;<Link to="/signup">Sing Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default compose(pure)(SignInPage);
