class Game {
  constructor() {
    this.container = new Container();
    this.container.create();
  }

  getStartScreen() {
    this.startScreen = document.createElement("div");
    this.container.insert(this.startScreen);
    this.startScreen.style.width = toPx(CONTAINER_WIDTH);
    this.startScreen.style.height = toPx(CONTAINER_HEIGHT);
    // this.startScreen.style.backgroundColor = "red";
    this.startScreen.style.position = "absolute";
    this.startScreen.style.zIndex = "99";

    this.createStartBtn();
    this.createHighScoreDisplay();
  }

  createStartBtn() {
    this.startBtn = document.createElement("div");
    this.startScreen.appendChild(this.startBtn);
    this.startBtn.style.width = toPx(100);
    this.startBtn.style.height = toPx(60);
    this.startBtn.style.backgroundImage = "url(../assets/start-btn.png)";
    this.startBtn.style.position = "absolute";
    this.startBtn.style.top = toPx(450);
    this.startBtn.style.left = toPx(250);
    this.startBtn.style.transform = "translate(-50%, -50%)";
    this.startBtn.style.cursor = "pointer";
  }

  createHighScoreDisplay() {
    this.bestScore = document.createElement("div");
    this.startScreen.appendChild(this.bestScore);
    this.bestScore.style.width = toPx(100);
    this.bestScore.style.height = toPx(40);
    this.bestScore.style.backgroundImage = "url(../assets/best-score-100.png)";
    // this.bestScore.style.backgroundSize = "cover";
    // this.bestScore.style.backgroundRepeat = "no-repeat";

    this.bestScore.style.position = "absolute";
    this.bestScore.style.top = toPx(100);
    this.bestScore.style.left = toPx(250);
    this.bestScore.style.transform = "translate(-50%, -50%)";
  }

  start() {
    this.startScreen.style.display = "none";
    this.bird = new Bird();
    this.bird.create();
    this.container.insert(this.bird.bird);

    this.pipeFirst = new Pipe(600);
    this.pipeFirst.create();
    this.container.insert(this.pipeFirst.pipeContainer);

    this.pipeSecond = new Pipe(850);
    this.pipeSecond.create();
    this.container.insert(this.pipeSecond.pipeContainer);

    this.bird.moveBirdUp();
    setInterval(() => {
      // this.bird.moveBird();
      this.bird.moveBirdDown();
      this.pipeFirst.movePipeContainer();
      this.pipeSecond.movePipeContainer();
      this.checkCollision(this.bird, this.pipeFirst);
      this.checkCollision(this.bird, this.pipeSecond);
    }, 50);
  }

  checkCollision(bird, pipe) {
    console.log(bird.positionBottom);
    console.log(bird.positionLeft);
    console.log(bird.positionTop);
    // console.log(pipe.position;
    if (
      bird.positionLeft >= pipe.positionFromLeft &&
      bird.positionLeft <= pipe.positionFromLeft + pipe.width
    ) {
      if (
        bird.positionTop <= PIPE_HEIGHT - pipe.randomGeneratedTop ||
        bird.positionBottom >=
          PIPE_HEIGHT - pipe.randomGeneratedTop + GAP_HEIGHT
      ) {
        console.log("collision detected");
      }
    }
    // window.requestAnimationFrame(() => {
    //   this.checkCollision(bird, pipe);
    // });
  }
}
