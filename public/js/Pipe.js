class Pipe {
  constructor(left) {
    // super();
    this.left = left;
  }

  create() {
    // super.create();

    this.createPipeContainer();
    this.createTopPipe();
    this.createBottomPipe();
  }

  createPipeContainer() {
    this.pipeContainer = document.createElement("div");
    this.pipeContainer.classList.add("pipe-container");
    this.pipeContainer.style.width = "50px";
    this.pipeContainer.style.height = "750px";
    // this.pipeContainer.style.backgroundColor = "red";
    this.pipeContainer.style.position = "absolute";
    this.pipeContainer.style.left = toPx(this.left);
    this.pipeContainer.style.top = toPx(-createRandomInt(0, 200));
  }

  createTopPipe() {
    this.topPipe = document.createElement("img");
    this.topPipe.setAttribute("src", "../assets/pipe-green.png");
    this.topPipe.setAttribute("alt", "pipe green");
    this.topPipe.style.position = "absolute";
    this.topPipe.style.top = "0";
    this.topPipe.style.left = "0";
    this.topPipe.style.transform = "rotate(180deg)";
    this.topPipe.style.width = "50px";
    this.pipeContainer.appendChild(this.topPipe);
    console.log(this.topPipe.getBoundingClientRect());
  }

  createBottomPipe() {
    this.bottomPipe = document.createElement("img");
    this.bottomPipe.setAttribute("src", "../assets/pipe-green.png");
    this.bottomPipe.setAttribute("alt", "pipe green");
    this.bottomPipe.style.position = "absolute";
    this.bottomPipe.style.bottom = "0";
    this.bottomPipe.style.left = "0";
    this.bottomPipe.style.width = "50px";
    this.pipeContainer.appendChild(this.bottomPipe);
    console.log(this.bottomPipe.getBoundingClientRect());
  }

  movePipeContainer() {
    this.left -= PIPE_ANIMATION_SPEED;
    this.pipeContainer.style.left = toPx(this.left);
    if (this.left >= -50) {
      window.requestAnimationFrame(() => {
        this.movePipeContainer();
      });
    } else {
      this.left = 550;
      this.pipeContainer.style.top = toPx(-createRandomInt(0, 200));

      window.requestAnimationFrame(() => {
        this.movePipeContainer();
      });
    }
  }
}
