import React from "react";

type BaseTile = {
    type: string;
    ascii: string;
    color: string;
}

type InvisibleTile = BaseTile;
type EmptyTile = BaseTile;
type RoadTile = BaseTile & {
    available: boolean;
}
type ChallengeTile = BaseTile & {
    challenge: number;
}
type HeroTile = BaseTile;

export type Tile = InvisibleTile | EmptyTile | RoadTile | ChallengeTile | HeroTile;

const invisibleTile = {type: 'invisible', ascii: '~', color: 'white'} // TODO: use or delete
const emptyTile: Tile = {type: 'empty', ascii: '~', color: 'grey'}
const roadTile: RoadTile = {type: 'road', ascii: '#', color: 'black', available: false}
const challengeTile: ChallengeTile = {type: 'challenge', ascii: '$', color: 'black', challenge: 0}
const heroTile: Tile = {type: 'hero', ascii: '@', color: '#006848'}

export interface PositionTile {
    position: number[],
    tile: Tile
}

// TODO: move this around
const mapLevel1: PositionTile[] = [
    {position: [0, 0], tile: roadTile}, 
    {position: [-1, 0], tile: roadTile}, 
    {position: [-2, 0], tile: roadTile},
    {position: [-2, 1], tile: roadTile},
    {position: [-2, 2], tile: roadTile},
    {position: [-2, 3], tile: challengeTile},
];

const mapLevel2: PositionTile[] = [
    {position: [-2, 4], tile: roadTile},
    {position: [-2, 5], tile: roadTile},
    {position: [-2, 6], tile: roadTile},
    {position: [-1, 6], tile: challengeTile},
];

const mapLevel3: PositionTile[] = [
    {position: [-1, 7], tile: roadTile},
    {position: [-1, 8], tile: roadTile},
    {position: [-1, 9], tile: roadTile},
    {position: [-1, 10], tile: challengeTile},
];

// TODO: figure out a better way to do this
const maps = [mapLevel1, mapLevel2, mapLevel3];

const MapVision = 3;

const echoCommands = [
    "help",
  ] as const;
type EchoCommand = typeof echoCommands[number];

// TODO: delete or use
const commands: {[key in EchoCommand]: JSX.Element} = {
    help: (
        <div>
            <p>
            You already need help? I thought you were the one who's supposed to be the expert decision maker :/.
            </p>
            <p>
            OK OK, that's not fair. Here's how the game works. Answer the question correctly, and then move on to 
            the next point in the path. Make it to the end and you win!
            </p>
        </div>
    ),
};

const TerminalPrompt = '>';

const IntroMessage = ["Welcome to the MDM game. A series of levels in an open world will test your ability to make decisions"];

export {emptyTile, roadTile, challengeTile, heroTile, TerminalPrompt, maps, MapVision, IntroMessage}
