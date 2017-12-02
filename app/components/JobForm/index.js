import React from 'react';
import { compose, pure } from 'recompose';
import { Form, Button, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import { InputField } from 'react-semantic-redux-form';

function JobForm() {
  return (
    <Segment>
      <Form>
        <Field
          name="position"
          component={InputField}
          label="Position"
          placeholder="Web developer"
        />
        <Field
          name="location"
          component={InputField}
          label="Location"
          placeholder="e. x. Innopolis, Tatarstan"
        />
        <Button type="submit" color="teal">
          Save
        </Button>
      </Form>
    </Segment>
  );
}

const withReduxForm = reduxForm({
  form: 'form/Job',
});

export default compose(withReduxForm, pure)(JobForm);
