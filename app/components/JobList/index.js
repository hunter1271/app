import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure } from 'recompose';

JobList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onLoadClick: PropTypes.func.isRequired,
};

JobList.defaultProps = {
  items: ['123'],
};

function JobList({ items, onLoadClick }) {
  return (
    <div>
      <p>
        <button onClick={onLoadClick}>Load items</button>
      </p>
      <h3>Job list here</h3>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

export default compose(pure)(JobList);
