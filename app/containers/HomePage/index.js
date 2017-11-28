import React from 'react';
import { compose, pure } from 'recompose';
import { Grid } from 'semantic-ui-react';
import JobList from '../JobListConnected';

function HomePage() {
  return (
    <Grid>
      <Grid.Row>
        <JobList />
      </Grid.Row>
    </Grid>
  );
}

export default compose(pure)(HomePage);
