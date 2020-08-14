
export interface Tile {
    type: string;
    ascii: string;
    color: string;
    challenge?: number;
}

const emptyTile: Tile = {type: 'empty', ascii: ';', color: 'grey'}
const roadTile: Tile = {type: 'road', ascii: '#', color: 'black'}
const challengeTile: Tile = {type: 'challenge', ascii: '$', color: 'black', challenge: 0}
const heroTile: Tile = {type: 'hero', ascii: '@', color: 'black'}

const map = [
    [emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile,     emptyTile, emptyTile], 
    [emptyTile, emptyTile, emptyTile, emptyTile, roadTile,  roadTile,  challengeTile, emptyTile, emptyTile],
    [emptyTile, emptyTile, emptyTile, emptyTile, roadTile,  emptyTile, emptyTile,     emptyTile, emptyTile], 
    [emptyTile, emptyTile, emptyTile, emptyTile, roadTile,  emptyTile, emptyTile,     emptyTile, emptyTile], 
    [emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile,     emptyTile, emptyTile], 
    [emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile,     emptyTile, emptyTile], 
];

export {emptyTile, roadTile, challengeTile, heroTile, map}