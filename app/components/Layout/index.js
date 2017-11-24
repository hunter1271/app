import React from 'react';
import { arrayOf, node } from 'prop-types';
import { compose, pure } from 'recompose';
import { Container } from 'semantic-ui-react';
import Navigation from '../Navigation';

import './layout.scss';

Layout.propTypes = {
  children: arrayOf(node),
};

Layout.defaultProps = {
  children: [],
};

function Layout({ children }) {
  return (
    <div className="layout">
      <Container className="container-narrow">
        <Navigation />
      </Container>
      <Container className="container-narrow">{children}</Container>
    </div>
  );
}

export default compose(pure)(Layout);
