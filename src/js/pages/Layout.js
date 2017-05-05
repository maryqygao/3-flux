import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, Route } from 'react-router-dom';
import { withRouter, matchPath } from 'react-router';

import Favorites from './Favorites';
import Todos from './Todos';
import Navigation from '../components/layout/Navigation';
import Settings from './Settings';
import Footer from '../components/layout/Footer';

class Layout extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired
    }).isRequired
  };

  navigate = () => {
    this.props.history.replace('/');
  };

  render() {
    const { pathname } = this.props.location;

    const links = [
      { text: 'Todos', to: '/' },
      { text: 'Favorites', to: '/favorites' },
      { text: 'Settings', to: '/settings' }
    ];

    const activeLinks = links.map(item => ({
      ...item,
      active: (matchPath(pathname, { path: item.to }) || {}).isExact || false
    }));

    return (
      <div className="layout">
        <Navigation links={activeLinks} />
        <div className="container content my-4">
          <Route exact path="/" component={Todos} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/settings" component={Settings} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
