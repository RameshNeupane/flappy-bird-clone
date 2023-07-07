/**
 * GAME CLASS
 */
class Game {
  constructor() {
    this.container = new Container();
    this.container.create();
    this.score = INITIAL_SCORE;
    // window.localStorage.setItem("highScore", 0);
    this.highScore = window.localStorage.getItem("highScore") || 0;
    this.isCollision = INITIAL_IS_COLLISION;
  }

  /**
   * get start screen
   */
  getStartScreen() {
    this.createStartScreenContainer();
    this.createHighScoreDisplay();
    this.createScoreDisplay();
    this.createGameName();
    this.createStartBtn();
  }

  /**
   * create start screen container
   */
  createStartScreenContainer() {
    this.startScreen = document.createElement("div");
    this.container.insert(this.startScreen);
    this.startScreen.style.width = toPx(CONTAINER_WIDTH);
    this.startScreen.style.height = toPx(CONTAINER_HEIGHT);
    this.startScreen.style.position = "absolute";
    this.startScreen.style.zIndex = "99";
  }

  /**
   * create high score disply element
   */
  createHighScoreDisplay() {
    // high score container
    this.highScoreDisplay = document.createElement("div");
    this.startScreen.appendChild(this.highScoreDisplay);
    this.highScoreDisplay.style.width = toPx(SCORE_WIDTH);
    this.highScoreDisplay.style.position = "absolute";
    this.highScoreDisplay.style.top = toPx(HIGH_SCORE_POSITION_TOP);
    this.highScoreDisplay.style.left = toPx(HIGH_SCORE_POSITION_LEFT);
    this.highScoreDisplay.style.transform = "translate(-50%, -50%)";

    // best image container
    this.highScoreImg = document.createElement("div");
    this.highScoreDisplay.appendChild(this.highScoreImg);
    this.highScoreImg.style.backgroundImage = "url(../assets/best-score.png)";
    this.highScoreImg.style.width = toPx(SCORE_WIDTH);
    this.highScoreImg.style.height = toPx(SCORE_IMG_HEIGHT);

    // high score display element
    this.highScoreNumber = document.createElement("div");
    this.highScoreDisplay.appendChild(this.highScoreNumber);
    this.highScoreNumber.innerHTML = this.highScore;
    this.highScoreNumber.style.textAlign = "center";
  }

  /**
   * create current score element
   */
  createScoreDisplay() {
    // current score container
    this.scoreDisplay = document.createElement("div");
    this.startScreen.appendChild(this.scoreDisplay);
    this.scoreDisplay.style.width = toPx(SCORE_WIDTH);
    this.scoreDisplay.style.position = "absolute";
    this.scoreDisplay.style.top = toPx(CURRENT_SCORE_POSITION_TOP);
    this.scoreDisplay.style.left = toPx(CURRENT_SCORE_POSITION_LEFT);
    this.scoreDisplay.style.transform = "translate(-50%, -50%)";
    this.scoreDisplay.style.display = "none";

    // score image container
    this.scoreImg = document.createElement("div");
    this.scoreDisplay.appendChild(this.scoreImg);
    this.scoreImg.style.backgroundImage = "url(../assets/score.png)";
    this.scoreImg.style.width = toPx(SCORE_WIDTH);
    this.scoreImg.style.height = toPx(SCORE_IMG_HEIGHT);

    // current score display element
    this.scoreNumber = document.createElement("div");
    this.scoreDisplay.appendChild(this.scoreNumber);
    this.scoreNumber.innerHTML = this.score;
    this.scoreNumber.style.textAlign = "center";
  }

  /**
   * create game logo container
   */
  createGameName() {
    this.gameName = document.createElement("div");
    this.startScreen.appendChild(this.gameName);
    this.gameName.style.width = toPx(GAME_NAME_WIDTH);
    this.gameName.style.height = toPx(GAME_NAME_HEIGHT);
    this.gameName.style.backgroundImage = "url(../assets/flappy-bird.png)";
    this.gameName.style.backgroundPosition = "center";
    this.gameName.style.backgroundSize = "cover";
    this.gameName.style.position = "absolute";
    this.gameName.style.top = toPx(GAME_NAME_POSITION_TOP);
    this.gameName.style.left = toPx(GAME_NAME_POSITION_LEFT);
    this.gameName.style.transform = "translate(-50%, -50%)";

    // bird top of the game title iamge
    const titleBird = new Bird(300, 250);
    titleBird.create();
    this.startScreen.appendChild(titleBird.bird);
    titleBird.bird.style.transform = "translate(-50%, -50%)";
  }

  /**
   * create start button
   */
  createStartBtn() {
    this.startBtn = document.createElement("div");
    this.startScreen.appendChild(this.startBtn);
    this.startBtn.style.width = toPx(START_BTN_WIDTH);
    this.startBtn.style.height = toPx(START_BTN_HEIGHT);
    this.startBtn.style.backgroundImage = "url(../assets/start-btn.png)";
    this.startBtn.style.position = "absolute";
    this.startBtn.style.top = toPx(START_BTN_POSITION_TOP);
    this.startBtn.style.left = toPx(START_BTN_POSITION_LEFT);
    this.startBtn.style.transform = "translate(-50%, -50%)";
    this.startBtn.style.cursor = "pointer";
    this.startBtn.setAttribute("title", "Play");
  }

  /**
   * start game
   */
  start() {
    this.startScreen.style.display = "none";
    this.isCollision = INITIAL_IS_COLLISION;

    this.bird = new Bird();
    this.bird.create();
    this.container.insert(this.bird.bird);

    this.pipeFirst = new Pipe(600);
    this.pipeFirst.create();
    this.container.insert(this.pipeFirst.pipeContainer);

    this.pipeSecond = new Pipe(850);
    this.pipeSecond.create();
    this.container.insert(this.pipeSecond.pipeContainer);

    this.createScoreElement(this.score);
    this.container.insert(this.scoreElement);
    this.bird.moveBirdUp();
    this.play();
  }

  /**
   * play game
   */
  play() {
    let playId = window.requestAnimationFrame(() => {
      this.play();
    });

    // check collision and handle collision
    if (this.isCollision) {
      window.cancelAnimationFrame(playId);
      this.handleCollision();
    }
    this.bird.moveBirdDown();
    this.pipeFirst.movePipeContainer();
    this.pipeSecond.movePipeContainer();
    this.checkCollision(this.bird, this.pipeFirst, this.pipeSecond);
  }

  /**
   * check collision between bird and pipe
   * @param {Object} bird new Bird object
   * @param {Object} pipe new Pipe object
   */
  checkCollision(bird, pipe1, pipe2) {
    // if bird touches the ground, detect collision
    if (this.bird.positionBottom === CONTAINER_HEIGHT - CONTAINER_BASE_HEIGHT) {
      this.isCollision = true;
    }

    // check if bird overlaps with pipe1
    else if (
      bird.positionLeft + BIRD_WIDTH >= pipe1.positionFromLeft &&
      bird.positionLeft <= pipe1.positionFromLeft + pipe1.width
    ) {
      if (
        bird.positionTop <= PIPE_HEIGHT - pipe1.randomGeneratedTop ||
        bird.positionBottom >=
          PIPE_HEIGHT - pipe1.randomGeneratedTop + GAP_HEIGHT
      ) {
        this.isCollision = true;
      }
    }

    // check if bird overlaps with pipe2
    else if (
      bird.positionLeft + BIRD_WIDTH >= pipe2.positionFromLeft &&
      bird.positionLeft <= pipe2.positionFromLeft + pipe2.width
    ) {
      if (
        bird.positionTop <= PIPE_HEIGHT - pipe2.randomGeneratedTop ||
        bird.positionBottom >=
          PIPE_HEIGHT - pipe2.randomGeneratedTop + GAP_HEIGHT
      ) {
        this.isCollision = true;
      }
    }

    // increment score if bird passes through the gap without collision
    else {
      if (
        (pipe1.positionFromLeft + pipe1.width <= BIRD_POSITION_LEFT - 2 &&
          pipe1.positionFromLeft + pipe1.width >= BIRD_POSITION_LEFT - 4) ||
        (pipe2.positionFromLeft + pipe2.width <= BIRD_POSITION_LEFT - 2 &&
          pipe2.positionFromLeft + pipe2.width >= BIRD_POSITION_LEFT - 4)
      ) {
        this.score++;
        this.scoreElement.innerHTML = this.score;
      }
    }
  }

  /**
   * handle collision after collision detection
   */
  handleCollision() {
    this.bird.stopBirdAnimation();
    this.displayGameOver();
    this.moveBirdDownAfterCollision();
  }

  /**
   * move ball down to the ground after collision
   */
  moveBirdDownAfterCollision() {
    this.bird.moveBirdDown();
    const birdDownId = window.requestAnimationFrame(() => {
      this.moveBirdDownAfterCollision();
    });
    if (this.bird.positionBottom === CONTAINER_HEIGHT - CONTAINER_BASE_HEIGHT) {
      window.cancelAnimationFrame(birdDownId);

      // reset container after game over
      this.resetContainer();
    }
  }

  /**
   * reset container after collision
   */
  resetContainer() {
    this.container.remove(this.bird.bird);
    this.container.remove(this.pipeFirst.pipeContainer);
    this.container.remove(this.pipeSecond.pipeContainer);
    this.container.remove(this.gameOverImgWrapper);
    this.container.remove(this.scoreElement);
    this.startScreen.style.display = "block";
    this.scoreDisplay.style.display = "block";
    this.scoreNumber.innerHTML = this.score;
    this.highScore = getMaximumValue(this.score, this.highScore);
    window.localStorage.setItem("highScore", this.highScore);
    this.highScoreNumber.innerHTML = window.localStorage.getItem("highScore");
    this.score = INITIAL_SCORE;
  }

  /**
   * create score element
   * @param {number} score game score
   */
  createScoreElement(score = INITIAL_SCORE) {
    this.scoreElement = document.createElement("div");
    this.scoreElement.innerHTML = score;
    this.scoreElement.width = toPx(score);
    this.scoreElement.style.position = "absolute";
    this.scoreElement.style.top = toPx(SCORE_ELEMENT_POSITION_TOP);
    this.scoreElement.style.left = toPx(SCORE_ELEMENT_POSITION_LEFT);
    this.scoreElement.style.transform = "translate(-50%, -50%)";
    this.scoreElement.style.textAlign = "center";
  }

  displayGameOver() {
    this.gameOverImgWrapper = document.createElement("div");
    this.gameOverImg = document.createElement("img");
    this.gameOverImgWrapper.appendChild(this.gameOverImg);
    this.container.insert(this.gameOverImgWrapper);
    this.gameOverImg.setAttribute("src", "../assets/gameover.png");
    this.gameOverImg.setAttribute("alt", "game over");
    this.gameOverImgWrapper.style.position = "absolute";
    this.gameOverImgWrapper.style.top = toPx(GAME_OVER_POSITION_TOP);
    this.gameOverImgWrapper.style.left = toPx(GAME_OVER_POSITION_LEFT);
    this.gameOverImgWrapper.style.transform = "translate(-50%, -50%)";
    this.gameOverImgWrapper.style.backgroundColor = "green";
    this.gameOverImgWrapper.style.padding = "10px 15px";
    this.gameOverImgWrapper.style.borderRadius = "10px";
    this.gameOverImgWrapper.style.transition = "all 0.5s ease-in";
  }
}
