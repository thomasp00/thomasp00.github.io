import React from 'react';

import './App.css';
import { HashRouter, Link } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <HashRouter>
      <div className="App">
          <Layout>
            <Homepage />
          </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
