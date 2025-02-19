import { fn } from '@storybook/test';
import { Header } from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

const Template = (args) => (
  <Router>
    <Header {...args} />
  </Router>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};
LoggedIn.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './header.css';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import banner from "../stories/assets/banner.png";

const NavbarContainer = styled.div'
  background: url({banner}) no-repeat center center;
  background-size: cover;
  padding: 1rem 2rem;
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space between items */
  align-items: center; /* Center items vertically */
';

const NavWrapper = styled.div'
  display: flex;
  align-items: center;
  gap: 1rem;
';

const NavLinks = styled.div'
  display: flex;
  gap: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem;
    transition: all 0.5s ease-in, color 0.5s ease-in;

    &.active {
      background-color: #1e90ff;
      color: black;
      border-radius: 5px;
    }
  }
';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <NavbarContainer className="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <NavWrapper>
        <NavLinks>
          <NavLink
            exact="true"
            to="/"
            activeClassName="active"
            onClick={() => {
              console.log('page clicked');
            }}
          >
            Page 1
          </NavLink>
          <NavLink
            to="/Page2"
            activeClassName="active"
            onClick={() => {
              console.log('page clicked');
            }}
          >
            Page 2
          </NavLink>
          <NavLink
            to="/Page3"
            activeClassName="active"
            onClick={() => {
              console.log('page clicked');
            }}
          >
            Page 3
          </NavLink>
          <NavLink
            to="/Page4"
            activeClassName="active"
            onClick={() => {
              console.log('page clicked');
            }}
          >
            Page 4
          </NavLink>
        </NavLinks>
        <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button primary size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button primary size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
      </NavWrapper>
      
    </NavbarContainer>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
`
      ,
    },
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
LoggedOut.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './header.css';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import banner from "../stories/assets/banner.png";

const NavbarContainer = styled.div'
  background: url({banner}) no-repeat center center;
  background-size: cover;
  padding: 1rem 2rem;
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space between items */
  align-items: center; /* Center items vertically */
';

const NavWrapper = styled.div'
  display: flex;
  align-items: center;
  gap: 1rem;
';

const NavLinks = styled.div'
  display: flex;
  gap: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem;
    transition: all 0.5s ease-in, color 0.5s ease-in;

    &.active {
      background-color: #1e90ff;
      color: black;
      border-radius: 5px;
    }
  }
';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <NavbarContainer className="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <NavWrapper>
        <NavLinks>
          <NavLink
            exact="true"
            to="/"
            activeClassName="active"
            onClick={() => {
              console.log('page clicked');
            }}
          >
            Page 1
          </NavLink>
          <NavLink
            to="/Page2"
            activeClassName="active"
            onClick={() => {
              console.log('page clicked');
            }}
          >
            Page 2
          </NavLink>
          <NavLink
            to="/Page3"
            activeClassName="active"
            onClick={() => {
              console.log('page clicked');
            }}
          >
            Page 3
          </NavLink>
          <NavLink
            to="/Page4"
            activeClassName="active"
            onClick={() => {
              console.log('page clicked');
            }}
          >
            Page 4
          </NavLink>
        </NavLinks>
        <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button primary size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button primary size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
      </NavWrapper>
      
    </NavbarContainer>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};`
      ,
    },
  },
};
