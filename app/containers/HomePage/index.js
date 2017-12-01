import React from 'react';
import { compose, pure } from 'recompose';
import { Grid } from 'semantic-ui-react';
import JobList from '../JobListConnected';

function HomePage() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <JobList />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default compose(pure)(HomePage);
