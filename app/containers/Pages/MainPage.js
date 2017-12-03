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
        <Grid.Row>
          <Grid.Column>1232</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default compose(pure)(MainPage);
