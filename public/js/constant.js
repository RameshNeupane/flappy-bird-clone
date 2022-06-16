// values for container
const CONTAINER_WIDTH = 500;
const CONTAINER_HEIGHT = 600;
const CONTAINER_BASE_WIDTH = 600;
const CONTAINER_BASE_HEIGHT = 80; //height of the bottom base
const CONTAINER_BACKGROUND = {
  day: "../assets/background-day.png",
  night: "../assets/background-night.png",
};
const CONTAINER_BASE_BACKGROUND = "../assets/base.png";
const BASE_ANIMATION_SPEED = CONTAINER_WIDTH * 0.005;
const PIPE_ANIMATION_SPEED = BASE_ANIMATION_SPEED;

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
const REFRESH_FLAP = 150;
