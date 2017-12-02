import React from 'react';
import { compose, pure } from 'recompose';
import { Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'containers/HomePage';
import CreateJobPage from 'containers/CreateJobPage';

function AppLayout() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={CreateJobPage} />
      </Switch>
    </Layout>
  );
}

export default compose(pure)(AppLayout);
