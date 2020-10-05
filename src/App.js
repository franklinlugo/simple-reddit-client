import React from 'react';
import { Layout } from './components';

function App() {
  function ActivePost() {
    return 'ActivePost';
  }

  return <Layout activePost={<ActivePost />} />;
}

export default App;
