import React from 'react';
import { compose, pure } from 'recompose';
import { Link } from 'react-router-dom';
import {
  Container,
  Divider,
  Segment,
  Form,
  Button,
  Input,
  Header,
  Icon,
  Grid,
  Message,
} from 'semantic-ui-react';

function SignUpPage() {
  return (
    <Container text>
      <Grid verticalAlign="middle">
        <Grid.Row>
          <Header as="h2" icon textAlign="center">
            <Icon name="space shuttle" />
            <Header.Content>
              Please, Sign Up
              <Header.Subheader>Fill the form and join to us!</Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Form size="large">
                <Form.Field
                  control={Input}
                  label="Company name"
                  placeholder="Company name"
                />
                <Form.Field control={Input} label="Email" placeholder="Email" />
                <Form.Field
                  control={Input}
                  label="Password"
                  placeholder="Password"
                  type="password"
                />
                <Divider hidden />
                <Button fluid primary size="large" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Segment>
            <Message style={{ textAlign: 'center' }}>
              Already signed up?&nbsp;<Link to="signin">Sign in here</Link>&nbsp;instead.
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row />
      </Grid>
    </Container>
  );
}

export default compose(pure)(SignUpPage);
