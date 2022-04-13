import React, { KeyboardEventHandler, useContext, useState } from 'react';

import styles from '../app.module.css';
import { checkWithinBounds } from './utils';
import { challengeTile, heroTile, map, numMapColumns, roadTile, Tile } from '../constants';
import {gameContext, leaveLevel, enterLevel } from '../store';


interface SquareProps {
    row: number, 
    column: number, 
    rowIdx: number, 
    columnIdx: number, 
    tile: Tile
}

// TODO: fix this
const Square = (props: SquareProps) => {
    const key = props.row * numMapColumns + props.column;
    // TODO: fix this
    if (checkWithinBounds(
            props.rowIdx, 
            props.columnIdx, 
            Math.max(props.row - 3, 0), 
            Math.min(props.row + 3, 6),
            Math.max(props.column - 4, 0), 
            Math.min(props.column + 4, 6))) {
        if (props.row === props.rowIdx && props.column === props.columnIdx) {
            // TODO: redundant with the constants file
            return <span key={key} style={{color: '#006848'}}>{'@'}</span>
        } else {
            return <span key={key} style={{color: props.tile.color}}>{props.tile.ascii}</span>;
        }
    } else {
        return <span key={key} style={{color: props.tile.color}}>{ }</span>;
    }
}

// TODO: fix this
const Path = (props: {gameMap: Tile[][], row: number, column: number}) => (
    <div className={styles.map}>
        <div>
            {props.gameMap.map((row, rowIdx) => 
                <div key={rowIdx}>
                    {row.map((tile, columnIdx) =>
                        <Square key={columnIdx} row={props.row} column={props.column} rowIdx={rowIdx} columnIdx={columnIdx} tile={tile}/>
                    )}
                </div>
            )}
        </div>
    </div>
)

interface MapProps {}

const Map = (props: MapProps) => {
    const [position, setPosition] = useState([3, 4]);
    const { dispatch } = useContext(gameContext);

    const traverseMap = (row: number, column: number) => {
        if (checkWithinBounds(row, column, 0, map.length, 0, map[0].length)) {
            if (map[row][column].type === roadTile.type) {
                setPosition([row, column]);
                dispatch(leaveLevel()); //TODO: only do this if just leaving level
            } else if (map[row][column].type === challengeTile.type) {
                setPosition([row, column]);
                dispatch(enterLevel());
            }
        }
    }

    const handleKeyDown: KeyboardEventHandler<HTMLElement> = event => {
        if (['w', 'ArrowUp'].includes(event.key)) {
            traverseMap(position[0] - 1, position[1])
        } else if (['s', 'ArrowDown'].includes(event.key)) {
            traverseMap(position[0] + 1, position[1])
        } else if (['a', 'ArrowLeft'].includes(event.key)) {
            traverseMap(position[0], position[1] - 1)
        } else if (['d', 'ArrowRight'].includes(event.key)) {
            traverseMap(position[0], position[1] + 1)
        }
    }

    // TODO: don't do this
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
            onKeyDown={handleKeyDown}
            className={styles.mapContainer}>
            <Path row={position[0]} column={position[1]} gameMap={displayMap}/>
        </div>
    )
}

export {Map}
