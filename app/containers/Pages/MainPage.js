import React from 'react';
import { compose, pure } from 'recompose';
import { Container, Segment, Header, Grid } from 'semantic-ui-react';

function MainPage() {
  return (
    <Container>
      <Segment basic>
        <Header as="h1">
          Lead Backend developer
          <Header.Subheader>
            Position in some company in some country
          </Header.Subheader>
        </Header>
      </Segment>
      <Segment basic>Content here</Segment>
      <Grid container padded="vertical">
        <Grid.Row stretched>
          <Grid.Column width="12">
            <Segment padded={false}>Content</Segment>
          </Grid.Column>
          <Grid.Column width="4">
            <Segment padded={false}>Sidebare</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default compose(pure)(MainPage);
