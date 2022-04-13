import React from "react";

type BaseTile = {
    type: string;
    ascii: string;
    color: string;
}

type EmptyTile = BaseTile;
type RoadTile = BaseTile & {
    available: boolean;
}
type ChallengeTile = BaseTile & {
    challenge: number;
}
type HeroTile = BaseTile;

export type Tile = EmptyTile | RoadTile | ChallengeTile | HeroTile;

const emptyTile: Tile = {type: 'empty', ascii: '~', color: 'grey'}
const roadTile: RoadTile = {type: 'road', ascii: '#', color: 'black', available: false}
const challengeTile: ChallengeTile = {type: 'challenge', ascii: '$', color: 'black', challenge: 0}
const heroTile: Tile = {type: 'hero', ascii: '@', color: '#006848'}

// TODO: rewrite to be generative
const map = [
    [emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile,     emptyTile, emptyTile], 
    [emptyTile, emptyTile, emptyTile, emptyTile, roadTile,  roadTile,  challengeTile, emptyTile, emptyTile],
    [emptyTile, emptyTile, emptyTile, emptyTile, roadTile,  emptyTile, emptyTile,     emptyTile, emptyTile], 
    [emptyTile, emptyTile, emptyTile, emptyTile, roadTile,  emptyTile, emptyTile,     emptyTile, emptyTile], 
    [emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile,     emptyTile, emptyTile], 
    [emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile, emptyTile,     emptyTile, emptyTile], 
];

// TODO: rewrite to be generative
const numMapColumns = map[0].length;

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

export {emptyTile, roadTile, challengeTile, heroTile, map, TerminalPrompt, numMapColumns, IntroMessage}
