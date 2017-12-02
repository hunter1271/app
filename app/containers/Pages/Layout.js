import React from 'react';
import { compose, pure } from 'recompose';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import MainPage from './MainPage';

function Layout() {
  return (
    <div>
      <Container>
        <Menu>
          <Menu.Header>Hidev</Menu.Header>
          <Menu.Item>
            <NavLink to="">Jobs</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="">Companies</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="">Techologies</NavLink>
          </Menu.Item>
        </Menu>
      </Container>
      <Container>
        <Switch>
          <Route path="" component={MainPage} />
        </Switch>
      </Container>
    </div>
  );
}

export default compose(pure)(Layout);
