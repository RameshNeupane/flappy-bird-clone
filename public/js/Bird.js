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
  }

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
    // this.bird.style.transform = "translate(-50%, -50%)";
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
   * move bird with the BIRD_JUMP VALUE
   */
  keyPressed(event) {
    if (event.code === "Space") {
      // this.moveBirdUp();
      this.positionTop -= BIRD_JUMP;
      if (this.positionTop <= 0) {
        this.positionTop = 0;
        this.positionBottom = this.positionTop + BIRD_HEIGHT;
      }

      this.gravity = GRAVITY; // gravity at initial value after each jump;
      this.bird.style.top = toPx(this.positionTop);
    }
  }
  moveBirdUp() {
    document.addEventListener("keydown", (event) => {
      this.keyPressed(event);
    });
  }

  /**
   * move bird downward with gravitational effect
   */
  moveBirdDown() {
    this.positionTop += this.gravity;
    this.positionBottom = this.positionTop + BIRD_HEIGHT;

    this.gravity += GRAVITY;

    if (this.positionTop >= CONTAINER_HEIGHT - CONTAINER_BASE_HEIGHT) {
      // clearInterval(this.moveBirdDownId);
      // this.stopBirdAnimation();
    }
    this.bird.style.top = toPx(this.positionTop);
  }

  /**
   * move bird up with clicking Space key
   */
  moveBird() {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        this.moveBirdUp();
      }
    });
    window.requestAnimationFrame(() => {
      this.moveBirdDown();
    });
  }

  // checkCollision(pipe) {
  //   console.log("abcd");
  //   console.log(this.positionLeft);
  //   console.log(pipe.gapPositionLeft);
  //   if (
  //     this.positionLeft >= pipe.gapPositionLeft &&
  //     this.positionLeft <= pipe.gapPositionRight
  //   ) {
  //     if (
  //       this.positionTop <= pipe.gapPositionTop ||
  //       this.positionBottom >= pipe.gapPositionBottom
  //     ) {
  //       console.log("collision detected");
  //     }
  //   }
  // }
}
