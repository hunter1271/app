import React from 'react';
import { compose, pure } from 'recompose';
import { Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'containers/HomePage';

function AppLayout() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Layout>
  );
}

export default compose(pure)(AppLayout);
