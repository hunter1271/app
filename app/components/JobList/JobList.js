import React from 'react';
import { compose, pure } from 'recompose';
import { object, arrayOf, bool } from 'prop-types';
import { Card, Dimmer, Loader } from 'semantic-ui-react';
import JobListItem from './JobListItem';

JobList.propTypes = {
  items: arrayOf(object).isRequired,
  loading: bool,
};

JobList.defaultProps = {
  loading: false,
};

function JobList({ items, loading }) {
  return (
    <Card.Group itemsPerRow="1">
      {loading ? (
        <Dimmer>
          <Loader />
        </Dimmer>
      ) : (
        items.map((job) => <JobListItem key={job.id} job={job} />)
      )}
    </Card.Group>
  );
}

export default compose(pure)(JobList);
