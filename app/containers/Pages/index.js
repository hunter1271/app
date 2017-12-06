import React from 'react';
import { object } from 'prop-types';
import { compose, pure } from 'recompose';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import SignUpPage from './SignUpPage';

Pages.propTypes = {
  match: object.isRequired,
};

function Pages({ match }) {
  return (
    <Switch>
      <Route exact path={`${match.url}/signup`} component={SignUpPage} />
      <Route component={Layout} />
    </Switch>
  );
}

export default compose(pure)(Pages);
