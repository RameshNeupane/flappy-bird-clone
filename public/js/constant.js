/**
 * CONSTANT VALUES USED IN CLASS CONTAINER
 */
const CONTAINER_WIDTH = 500;
const CONTAINER_HEIGHT = 600;
const CONTAINER_BASE_WIDTH = 600;
const CONTAINER_BASE_HEIGHT = 80; //height of the bottom base
const CONTAINER_BACKGROUND = {
  day: "../assets/background-day.png",
  night: "../assets/background-night.png",
};
const CONTAINER_BASE_BACKGROUND = "../assets/base.png";
const CONTAINER_BASE_BG_POSIITON_Y = 0;
const BASE_ANIMATION_SPEED = CONTAINER_WIDTH * 0.005;
const PIPE_ANIMATION_SPEED = BASE_ANIMATION_SPEED;

/**
 * CONSTANT VALUES USED IN CLASS BIRD
 */

// values for bird useful for bird animation
const FLAP_BIRD = [
  {
    src: "../assets/redbird-midflap.png",
    alt: "red bird mid flap",
  },
  {
    src: "../assets/redbird-upflap.png",
    alt: "red bird up flap",
  },
  {
    src: "../assets/redbird-midflap.png",
    alt: "red bird mid flap",
  },
  {
    src: "../assets/redbird-downflap.png",
    alt: "red bird down flap",
  },
];

// alter image after the given value
const REFRESH_FLAP = 120;
const GRAVITY = 0.1; // initial gravitational value
const BIRD_WIDTH = 50;
const BIRD_HEIGHT = 35.3;
const BIRD_POSITION_TOP = CONTAINER_HEIGHT * 0.5;
const BIRD_POSITION_LEFT = CONTAINER_WIDTH * 0.3;
const BIRD_POSITION_RIGHT = BIRD_POSITION_LEFT + BIRD_WIDTH;
const BIRD_POSITION_BOTTOM = BIRD_POSITION_TOP + BIRD_HEIGHT;
const BIRD_JUMP = 50;
const BIRD_MOVE_DOWN_DELAY = 50;

/**
 * CONSTANT VALUES FOR CLASS PIPE
 */
const PIPE_CONTAINER_WIDTH = 50;
const PIPE_CONTAINER_HEIGHT = 750;
const PIPE_RANDOM_TOP_MIN = 0; // minimum value to randomize pipe container top position
const PIPE_RANDOM_TOP_MAX = 200; // maximum value to randomize pipe container top position
const PIPE_WIDTH = PIPE_CONTAINER_WIDTH;
const PIPE_HEIGHT = 307.7;
const GAP_HEIGHT = 134.6; // space between two pipes
const GAP_WIDTH = PIPE_CONTAINER_WIDTH;
const PIPE_POSITION_AFTER_MOVEAWAY = 550; // new postion for the pipe after it moves away from the container
const PIPE_LEFT_BOUNDARY = -50;

/**
 * CONSTANT VALUES FOR CLASS GAME
 */

const INITIAL_SCORE = 0;
const INITIAL_IS_COLLISION = false;
const SCORE_WIDTH = 100;
const SCORE_IMG_HEIGHT = 40;
const HIGH_SCORE_POSITION_TOP = 80;
const CURRENT_SCORE_POSITION_TOP = 210;
const HIGH_SCORE_POSITION_LEFT = CONTAINER_WIDTH / 2;
const CURRENT_SCORE_POSITION_LEFT = CONTAINER_WIDTH / 2;
const GAME_NAME_WIDTH = 300;
const GAME_NAME_HEIGHT = 90;
const GAME_NAME_POSITION_TOP = 330;
const GAME_NAME_POSITION_LEFT = CONTAINER_WIDTH / 2;
const SCORE_ELEMENT_POSITION_TOP = 100;
const SCORE_ELEMENT_POSITION_LEFT = CONTAINER_WIDTH / 2;
const GAME_OVER_POSITION_TOP = 300;
const GAME_OVER_POSITION_LEFT = CONTAINER_WIDTH / 2;
const START_BTN_WIDTH = 100;
const START_BTN_HEIGHT = 60;
const START_BTN_POSITION_TOP = 450;
const START_BTN_POSITION_LEFT = CONTAINER_WIDTH / 2;
