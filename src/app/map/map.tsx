import React, { KeyboardEventHandler, useState } from 'react';

import styles from '../app.module.css';
import { challengeTile, heroTile, map, roadTile, Tile } from './constants';


const checkWithinBounds = (
    rowIdx: number, 
    columnIdx: number, 
    rowMin: number, 
    rowMax: number, 
    columnMin: number, 
    columnMax: number
) => (
    rowIdx >= rowMin && rowIdx <= rowMax &&
    columnIdx >= columnMin && columnIdx <= columnMax)

const Square = (props: {row: number, column: number, rowIdx: number, columnIdx: number, tile: Tile}) => {
    if (checkWithinBounds(props.rowIdx, props.columnIdx, Math.max(props.row - 3, 0), Math.min(props.row + 3, 6),
        Math.max(props.column - 4, 0), Math.min(props.column + 4, 6))) {
        if (props.row === props.rowIdx && props.column === props.columnIdx) {
            return <span key={props.columnIdx} style={{color: '#006848'}}>{'@'}</span>
        } else {
            return <span key={props.columnIdx} style={{color: props.tile.color}}>{props.tile.ascii}</span>;
        }
    } else {
        return <span key={props.columnIdx} style={{color: props.tile.color}}>{ }</span>;
    }
}

// need fix this
const Path = (props: {gameMap: Tile[][], row: number, column: number}) => (
    <div className={styles.map}>
        <div>
            {props.gameMap.map((row, rowIdx) => 
                <div key={rowIdx}>
                    {row.map((tile, columnIdx) =>
                        <Square row={props.row} column={props.column} rowIdx={rowIdx} columnIdx={columnIdx} tile={tile}/>
                    )}
                </div>
            )}
        </div>
    </div>
)

const Map = () => {
    const [position, setPosition] = useState([3, 4]);

    const traverseMap = (row: number, column: number) => {
        if (checkWithinBounds(row, column, 0, map.length, 0, map[0].length)) {
            if (map[row][column].type === roadTile.type) {
                setPosition([row, column]);
            } else if (map[row][column].type === challengeTile.type) {
                setPosition([row, column]);
                // start the game
            }
        }
    }

    const handleKeyDown: KeyboardEventHandler<HTMLElement> = event => {
        if (event.key === 'w') {
            traverseMap(position[0] - 1, position[1])
        } else if (event.key === 's') {
            traverseMap(position[0] + 1, position[1])
        } else if (event.key === 'd') {
            traverseMap(position[0], position[1] + 1)
        } else if (event.key === 'a') {
            traverseMap(position[0], position[1] - 1)
        }
        console.log(position);
    }

    const displayMap = map.map(
        (row, rowIdx) => row.map(
            (element, elementIdx) => {
                if (rowIdx === position[0] && elementIdx === position[1])
                    return heroTile;
                return element;
            }
        )
    );

    return (
        <div tabIndex={-1}
            onKeyPress={handleKeyDown}
            className={styles.mapContainer}>
            <Path row={position[0]} column={position[1]} gameMap={displayMap}/>
        </div>
    )
}

export {Map}
