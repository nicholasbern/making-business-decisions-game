import React from 'react';

import { Game } from './game';

import styles from './app.module.css';

// https://github.com/gitname/react-gh-pages
// https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/
// https://github.com/craig-feldman/personal-website-react/blob/master/src/App.tsx

const App = () => (
  <div className={styles.app}>
    <Game/>
  </div>
);

export default App;
