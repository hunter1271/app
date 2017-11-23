import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure } from 'recompose';

JobList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

JobList.defaultProps = {
  items: ['first', 'second'],
};

function JobList({ items }) {
  return (
    <div>
      <h3>Job list here</h3>
      <ul>{items.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
}

export default compose(pure)(JobList);
