import React from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import Home from '../client/Home/Home';
import About from '../client/About/About';
import './App.css';

import cl from 'classnames';

const navigation = [
  {
    id: 1,
    to: '/',
    title: 'Home'
  },
  {
    id: 2,
    to: '/about',
    title: 'About'
  }
]

const App = () => {
  const { pathname } = useLocation();

  console.log(useLocation())

  return (
    <div>
      <header>
        <nav>
          {navigation.map(({id, to, title}) => (
            <Link
              key={id}
              to={to}
              className={cl(pathname === to && 'active')}
            >{title}</Link>
          ))}
        </nav>
      </header>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
