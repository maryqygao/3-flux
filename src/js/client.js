import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Layout from './pages/Layout';

const app = document.getElementById('app');
render(
  <Router>
    <Layout />
  </Router>,
  app
);
