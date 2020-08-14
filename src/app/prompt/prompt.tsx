import React from 'react';

import styles from '../app.module.css';
import {Terminal} from './terminal';


const prompt = ">"

let text = ''

// https://github.com/craig-feldman/personal-website-react/blob/master/src/App.tsx
const Prompt = () => 
    <div className={styles.promptContainer}>
        <Terminal/>
    </div>

export {Prompt}
