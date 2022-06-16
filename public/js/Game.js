class Game {
  constructor() {
    this.container = new Container();
    this.container.create();
  }

  start() {
    this.bird = new Bird();
    this.bird.create();
    this.container.insert(this.bird.bird);

    this.pipeFirst = new Pipe(600);
    this.pipeFirst.create();
    this.container.insert(this.pipeFirst.pipeContainer);
    this.pipeFirst.movePipeContainer();

    this.pipeSecond = new Pipe(850);
    this.pipeSecond.create();
    this.container.insert(this.pipeSecond.pipeContainer);
    this.pipeSecond.movePipeContainer();

    this.bird.moveBird();
  }
}
