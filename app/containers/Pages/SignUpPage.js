import React from 'react';
import { compose, pure } from 'recompose';
import {
  Container,
  Divider,
  Segment,
  Form,
  Button,
  Input,
  Header,
  Icon,
} from 'semantic-ui-react';

function SignUpPage() {
  return (
    <Container text>
      <Header as="h2" textAlign="center" icon>
        <Icon name="space shuttle" rotated="counterclockwise" />
        <Header.Content>Please, Sign Up</Header.Content>
      </Header>
      <Segment>
        <Form>
          <Form.Field
            control={Input}
            label="Company name"
            placeholder="Company name"
          />
          <Form.Field control={Input} label="Email" placeholder="Email" />
          <Form.Field control={Input} label="Password" placeholder="Password" />
          <Divider hidden />
          <Button fluid primary size="large" type="submit">
            Sign Up
          </Button>
        </Form>
      </Segment>
    </Container>
  );
}

export default compose(pure)(SignUpPage);
