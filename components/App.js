import React from 'react';
import NewsMap from './../containers/NewsMap';
import Header from './Header';
import { container } from './app-style';

const App = () => (
  <div style={container}>
    <Header />
    <NewsMap />
  </div>
);

export default App;
