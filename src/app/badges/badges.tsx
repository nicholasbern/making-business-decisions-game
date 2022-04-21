import React, {useContext} from 'react';

import badgeImg from '../../assets/badge.png';
import {gameContext} from '../store';

import styles from '../app.module.css';

// TODO: add padding and fix images
const Badge = () => (
    <img src={badgeImg} className={styles.badge}/>
);

const Badges = () => {
    const {state: {level} } = useContext(gameContext);

    return (
        <div tabIndex={-1}
            className={styles.badgesContainer}
        >
            {level > 0 && 
                <Badge/>
            }
            {level > 1 && 
                <Badge/>
            }
            {level > 2 && 
                <Badge/>
            }
            {level > 3 && 
                <Badge/>
            }
            {level > 4 && 
                <Badge/>
            }
            {level > 5 && 
                <Badge/>
            }
            {level > 6 && 
                <Badge/>
            }
        </div>
    )
}

export {Badges}
