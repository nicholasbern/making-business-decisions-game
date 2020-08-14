import React from 'react';

import {Map} from './map/map';
import {Prompt} from './prompt/prompt';

import styles from './app.module.css';


const Game = () => {

    const game = 'none'; // this will be the 

    return (
        <div className={styles.gameContainer}>
            <div className={styles.game}>
            {/* <Badges/> */}
            <Map/>
            <div style={{padding: '16px'}}/>
            <Prompt/>
            </div>
        </div>
    )
    
}

export {Game}