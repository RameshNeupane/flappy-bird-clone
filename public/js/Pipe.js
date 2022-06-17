class Pipe {
  constructor(
    left,
    width = PIPE_CONTAINER_WIDTH,
    height = PIPE_CONTAINER_HEIGHT
  ) {
    this.width = width;
    this.height = height;
    this.positionFromLeft = left;
  }

  create() {
    this.createPipeContainer();
    this.createTopPipe();
    this.createBottomPipe();
  }

  // create main pipe container element
  createPipeContainer() {
    this.pipeContainer = document.createElement("div");
    this.pipeContainer.classList.add("pipe-container");
    this.pipeContainer.style.width = toPx(this.width);
    this.pipeContainer.style.height = toPx(this.height);
    this.pipeContainer.style.position = "absolute";
    this.pipeContainer.style.left = toPx(this.positionFromLeft);
    this.randomGeneratedTop = createRandomInt(
      PIPE_RANDOM_TOP_MIN,
      PIPE_RANDOM_TOP_MAX
    );
    this.pipeContainer.style.top = toPx(-this.randomGeneratedTop);
  }

  // create top positioned pipe element
  createTopPipe() {
    this.topPipe = document.createElement("img");
    this.topPipe.setAttribute("src", "../assets/pipe-green.png");
    this.topPipe.setAttribute("alt", "pipe green");
    this.topPipe.style.position = "absolute";
    this.topPipe.style.top = "0";
    this.topPipe.style.left = "0";
    this.topPipe.style.transform = "rotate(180deg)";
    this.topPipe.style.width = toPx(PIPE_WIDTH);
    this.pipeContainer.appendChild(this.topPipe);
  }

  // create bottom positioned pipe element
  createBottomPipe() {
    this.bottomPipe = document.createElement("img");
    this.bottomPipe.setAttribute("src", "../assets/pipe-green.png");
    this.bottomPipe.setAttribute("alt", "pipe green");
    this.bottomPipe.style.position = "absolute";
    this.bottomPipe.style.bottom = "0";
    this.bottomPipe.style.left = "0";
    this.bottomPipe.style.width = toPx(PIPE_WIDTH);
    this.pipeContainer.appendChild(this.bottomPipe);
  }

  // animate pipe movement towards bird
  movePipeContainer() {
    if (this.positionFromLeft >= PIPE_LEFT_BOUNDARY) {
      this.positionFromLeft -= PIPE_ANIMATION_SPEED;
      this.pipeContainer.style.left = toPx(this.positionFromLeft);
      // window.requestAnimationFrame(() => {
      //   this.movePipeContainer();
      // });
    } else {
      this.positionFromLeft = PIPE_POSITION_AFTER_MOVEAWAY;
      this.randomGeneratedTop = createRandomInt(
        PIPE_RANDOM_TOP_MIN,
        PIPE_RANDOM_TOP_MAX
      );
      // this.getGapDimensions();
      this.pipeContainer.style.top = toPx(-this.randomGeneratedTop);
      // window.requestAnimationFrame(() => {
      //   this.movePipeContainer();
      // });
    }
  }

  stopPipeAnimation() {
    window.cancelAnimationFrame(() => {
      this.movePipeContainer();
    });
  }
}
