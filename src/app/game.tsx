import React from 'react';

import {Badges} from './badges/badges';
import {Map} from './map/map';
import {Terminal} from './terminal/terminal';
import {StateProvider} from './store';

import styles from './app.module.css';


const Game = () => 
    <StateProvider>
        <div className={styles.gameContainer}>
            <div className={styles.game}>
                <Badges/>
                <div className={styles.separator}/>
                <Map />
                <div className={styles.separator}/>
                <Terminal />
            </div>
        </div>
    </StateProvider>

export {Game}
