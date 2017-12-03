import React from 'react';
import { compose, pure } from 'recompose';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import { Container, Menu, Button, Icon, Dropdown } from 'semantic-ui-react';

import MainPage from './MainPage';

function Layout() {
  return (
    <div>
      <Container fluid>
        <Menu size="huge" borderless>
          <Container>
            <Link className="item header" to="/">
              <Icon size="large" name="space shuttle" />
              HiDev
            </Link>
            <NavLink className="item" to="/jobs">
              Jobs
            </NavLink>
            <NavLink className="item" to="/companies">
              Companies
            </NavLink>
            <NavLink className="item" to="/tech">
              Techologies
            </NavLink>

            <Menu.Menu position="right">
              <Dropdown item text="Language">
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Russian</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>
                <Button primary color="teal">
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Container>
      <Container fluid>
        <Switch>
          <Route path="" component={MainPage} />
        </Switch>
      </Container>
    </div>
  );
}

export default compose(pure)(Layout);
