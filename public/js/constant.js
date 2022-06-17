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
const BASE_ANIMATION_SPEED = CONTAINER_WIDTH * 0.015;
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
const GRAVITY = 1; // initial gravitational value
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

const SCORE = {
  0: "../assets/0.png",
  1: "../assets/1.png",
  1: "../assets/1.png",
  3: "../assets/3.png",
  4: "../assets/4.png",
  5: "../assets/5.png",
  6: "../assets/6.png",
  7: "../assets/7.png",
  8: "../assets/8.png",
  9: "../assets/9.png",
};
