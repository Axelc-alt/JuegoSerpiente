const STATE_RUNNING = 1;
const STATE_LOSING = 2;

const TICK = 80;
const SQUARE_SIZE = 10;
const BOARD_WIDTH = 50;
const BOARD_HEIGHT = 50;
const GROW_SCALE = 10;
const DIRECTION_MAPS = {
    'A':[-1, 0],
    'D':[1, 0],
    'S':[0, 1],
    'W':[0, -1],
    'a':[-1, 0],
    'd':[1, 0],
    's':[0, 1],
    'w':[0, -1]
}

let state = {
    canvas: null,
    context: null,
    snake: [{x: 0, y: 0}],
    direction: {x: 0, y: 0},
    prey: {x: 0, y: 0},
    growing: 0,
    runState: STATE_RUNNING,
};

function random() {
    return{
        x: parseInt(Math.random() * BOARD_WIDTH),
        y: parseInt(Math.random() * BOARD_HEIGHT),
    };
}

function tick() {

}

window.onload = function() {
    state.canvas = document.querySelector('canvas');
    state.contex = state.canvas.getContext('2d');

    window.onkeydown = function (e) {
        const direction = DIRECTION_MAP[e.key];
    }
};