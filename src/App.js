import React from 'react';

import PostList from './components/PostList/index.js';
import Header from './components/Header/index.js';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <div className="App">
      <Header />
      <PostList />
      <GlobalStyle />
    </div>
  );
}
