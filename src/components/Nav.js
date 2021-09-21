import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 0,
      path: '/',
      text: 'Home',
    },
    {
      id: 1,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <div className="nav-component">
      <h1>Math Magicians</h1>
      <nav className="nav">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.id} className="nav-items">
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
              <span className="divider"> | </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
