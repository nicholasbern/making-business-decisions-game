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

const emptyTile: EmptyTile = {type: 'empty', ascii: '.', color: 'grey'}
const roadTile: RoadTile = {type: 'road', ascii: '#', color: 'black', available: false}
const challengeTile: ChallengeTile = {type: 'challenge', ascii: '$', color: 'black', challenge: 0}
const endTile: Tile = {type: 'challenge', ascii: '\u2618', color: '#006848'}
const heroTile: Tile = {type: 'hero', ascii: '@', color: '#006848'}

export interface PositionTile {
    position: number[],
    tile: Tile
}

// TODO: move this around
const mapLevel1: PositionTile[] = [
    {position: [0, 0], tile: {...roadTile, ascii: "I"}}, 
    {position: [-1, 0], tile: roadTile}, 
    {position: [-2, 0], tile: roadTile},
    {position: [-2, 1], tile: roadTile},
    {position: [-2, 2], tile: roadTile},
    {position: [-2, 3], tile: challengeTile},
    {position: [-4, 3], tile: endTile},
    // {position: [0, 2], tile: {emptyTile, ascii: "\26A4"}},
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

const mapLevel4: PositionTile[] = [
    {position: [0, 10], tile: roadTile},
    {position: [1, 10], tile: roadTile},
    {position: [2, 10], tile: roadTile},
    {position: [3, 10], tile: roadTile},
    {position: [4, 10], tile: roadTile},
    {position: [4, 9], tile: roadTile},
    {position: [4, 8], tile: roadTile},
    {position: [4, 7], tile: roadTile},
    {position: [4, 6], tile: challengeTile},
];

const mapLevel5: PositionTile[] = [
    {position: [3, 6], tile: roadTile},
    {position: [2, 6], tile: roadTile},
    {position: [2, 5], tile: roadTile},
    {position: [2, 4], tile: roadTile},
    {position: [2, 3], tile: challengeTile},
];

const mapLevel6: PositionTile[] = [
    {position: [2, 2], tile: roadTile},
    {position: [2, 1], tile: roadTile},
    {position: [2, 0], tile: roadTile},
    {position: [2, -1], tile: roadTile},
    {position: [3, -1], tile: roadTile},
    {position: [4, -1], tile: roadTile},
    {position: [5, -1], tile: challengeTile},
];

const mapLevel7: PositionTile[] = [
    {position: [5, -2], tile: roadTile},
    {position: [5, -3], tile: roadTile},
    {position: [5, -4], tile: roadTile},
    {position: [4, -4], tile: roadTile},
    {position: [3, -4], tile: roadTile},
    {position: [2, -4], tile: roadTile},
    {position: [1, -4], tile: challengeTile},
];

const mapLevel8: PositionTile[] = [
    {position: [0, -4], tile: roadTile},
    {position: [-1, -4], tile: roadTile},
    {position: [-2, -4], tile: roadTile},
    {position: [-3, -4], tile: roadTile},
    {position: [-4, -4], tile: roadTile},
    {position: [-4, -3], tile: roadTile},
    {position: [-4, -2], tile: challengeTile}
]

const mapLevel9: PositionTile[] = [
    {position: [-4, -1], tile: roadTile},
    {position: [-4, 0], tile: roadTile},
    {position: [-4, 1], tile: roadTile},
    {position: [-4, 2], tile: roadTile}
];

// TODO: figure out a better way to do this
const maps = [
    mapLevel1, 
    mapLevel2, 
    mapLevel3, 
    mapLevel4, 
    mapLevel5, 
    mapLevel6,
    mapLevel7,
    mapLevel8,
    mapLevel9
];

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

const IntroMessage = [
    "Welcome to the MDM game, a test of you're ability to make decisions and apply what you learned in Management Decision Making!",
    "You see a path ahead of you. Let's see what's at that \"#\" sign, it looks important.",
    "If you get stuck, type \"help\". \n "
];

export {emptyTile, roadTile, challengeTile, heroTile, TerminalPrompt, maps, MapVision, IntroMessage}
