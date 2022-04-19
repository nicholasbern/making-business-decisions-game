import React, {KeyboardEventHandler, useContext, useState} from 'react';

import {challengeTile, emptyTile, heroTile, MapVision, PositionTile, roadTile, Tile} from '../constants';
import {gameContext, leaveLevel, enterLevel} from '../store';

import styles from '../app.module.css';


interface PathProps {
    visualMap: Tile[][],
}

const Path = (props: PathProps) => (
    <div className={styles.map}>
        <div>
            {props.visualMap.map((row, rowIdx) => 
                // TODO: fix key
                <div key={rowIdx}>
                    {row.map((tile, columnIdx) =>
                       // TODO: pull ou the tile
                        <span 
                            key={columnIdx} 
                            style={{color: props.visualMap[rowIdx][columnIdx].color}}
                        >
                            {props.visualMap[rowIdx][columnIdx].ascii}
                        </span>
                    )}
                </div>
            )}
        </div>
    </div>
)

const createVisualMap = (map: PositionTile[], position: number[]): {visualMap: Tile[][], minRow: number, minColumn: number} => {
    const rows = map.map((positionTile: PositionTile) => positionTile.position[0])
    const columns = map.map((positionTile: PositionTile) => positionTile.position[1])

    const minRow = Math.min(...rows) - MapVision;
    const maxRow = Math.max(...rows) + MapVision;
    const minColumn = Math.min(...columns) - MapVision;
    const maxColumn = Math.max(...columns) + MapVision;

    const visualMap = Array.from(
        {length: maxRow - minRow}, 
        () => Array.from(
            {length: maxColumn - minColumn}, 
            () => emptyTile
        )
    )

    map.forEach((positionTile: PositionTile) => {
       const {tile, position: [row, column]} = positionTile;
       visualMap[row - minRow][column - minColumn] = tile;
    });

    // TODO: probably put this somewhere else
    visualMap[position[0] - minRow][position[1] - minColumn] = heroTile;

    // TODO: incorporate invisible tiles

    // TODO: don't do this
    return {visualMap, minRow, minColumn};
}

const Map = () => {
    const [position, setPosition] = useState([0, 0]);
    const { dispatch, state: {playingLevel, map} } = useContext(gameContext);

    const {visualMap, minRow, minColumn} = createVisualMap(map, position);

    const traverseMap = (row: number, column: number) => {
        const tile = visualMap[row - minRow][column - minColumn]; // TODO: need to fix this, and probably get special getters and setterss
        if (tile.type === roadTile.type) {
            setPosition([row, column]);
            if (playingLevel) {
                dispatch(leaveLevel()); //TODO: only do this if just leaving level
            }
        } else if (visualMap[row - minRow][column - minColumn].type === challengeTile.type) {
            setPosition([row, column]);
            dispatch(enterLevel());
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

    return (
        <div tabIndex={-1}
            onKeyDown={handleKeyDown}
            className={styles.mapContainer}
        >
            <Path visualMap={visualMap}/>
        </div>
    )
}

export {Map}
