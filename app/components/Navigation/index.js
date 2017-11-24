import React from 'react';
import { compose, pure } from 'recompose';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Menu>
      <NavLink to="/" className="item">
        Home
      </NavLink>
      <NavLink to="signin" className="item">
        Sign In
      </NavLink>
      <NavLink to="signup" className="item">
        Sign up
      </NavLink>
    </Menu>
  );
}

export default compose(pure)(Navigation);
