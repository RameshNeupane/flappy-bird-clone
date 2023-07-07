/**
 * BIRD CLASS
 */
class Bird {
  constructor(
    posTop = BIRD_POSITION_TOP,
    posLeft = BIRD_POSITION_LEFT,
    posRight = BIRD_POSITION_RIGHT,
    posBottom = BIRD_POSITION_BOTTOM,
    g = GRAVITY
  ) {
    this.positionTop = posTop;
    this.positionLeft = posLeft;
    this.gravity = g; // to simulate gravitational effect
    this.positionRight = posRight;
    this.positionBottom = posBottom;
    this.isAlive = true;
  }

  /**
   * create bird element, append into the container and animate
   */
  create() {
    this.createBird();
    this.animateBird();
  }

  /**
   * create bird image element
   */
  createBird() {
    this.bird = document.createElement("img");
    this.bird.classList.add("bird");
    this.bird.setAttribute("src", FLAP_BIRD[0]["src"]);
    this.bird.setAttribute("alt", FLAP_BIRD[0]["alt"]);
    this.bird.style.position = "absolute";
    this.bird.style.top = toPx(this.positionTop);
    this.bird.style.left = toPx(this.positionLeft);
    this.bird.style.width = toPx(BIRD_WIDTH);
    this.bird.style.zIndex = "99";
  }

  /**
   * simulate bird flying
   */
  animateBird() {
    let birdIndex = 0;
    this.animateBirdId = setInterval(() => {
      this.bird.setAttribute("src", FLAP_BIRD[birdIndex]["src"]);
      this.bird.setAttribute("alt", FLAP_BIRD[birdIndex]["alt"]);
      birdIndex = (birdIndex + 1) % FLAP_BIRD.length;
    }, REFRESH_FLAP);
  }

  // stop bird flapping animation
  stopBirdAnimation() {
    clearInterval(this.animateBirdId);
  }

  /**
   * check if Space key is pressed and move bird up with the BIRD_JUMP VALUE
   */
  keyPressed(event) {
    if (event.code === "Space") {
      this.positionTop -= BIRD_JUMP;

      // bird is restricted to go outside of the container
      if (this.positionTop <= 0) {
        this.positionTop = 0;
        this.positionBottom = this.positionTop + BIRD_HEIGHT;
      }

      this.gravity = GRAVITY; // gravity at initial value after each jump;
      this.bird.style.top = toPx(this.positionTop);
    }
  }

  /**
   * handle keydown event listener to move bird up
   */
  moveBirdUp() {
    document.addEventListener("keydown", (event) => {
      this.keyPressed(event);
    });

    // if bird is dead, romove event listener
    if (!this.isAlive) {
      document.removeEventListener("keydown", (event) => {
        this.keyPressed(event);
      });
    }
  }

  /**
   * move bird downward with gravitational effect
   */
  moveBirdDown() {
    this.positionTop += this.gravity;
    this.positionBottom = this.positionTop + BIRD_HEIGHT;

    this.gravity += GRAVITY;

    // bird is restricted to move down from the ground
    if (this.positionBottom >= CONTAINER_HEIGHT - CONTAINER_BASE_HEIGHT) {
      this.positionBottom = CONTAINER_HEIGHT - CONTAINER_BASE_HEIGHT;
      this.positionTop = this.positionBottom - BIRD_HEIGHT;
    }
    this.bird.style.top = toPx(this.positionTop);
  }
}
