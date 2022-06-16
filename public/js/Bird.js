class Bird {
  constructor() {
    this.top = 288;
    // super();
  }

  create() {
    // super.create();
    this.createBird();
    this.animateBird();
  }

  createBird() {
    this.bird = document.createElement("img");
    this.bird.classList.add("bird");
    this.bird.setAttribute("src", FLAP_BIRD[0]["src"]);
    this.bird.setAttribute("alt", FLAP_BIRD[0]["alt"]);
    this.bird.style.position = "absolute";
    this.bird.style.top = "50%";
    this.bird.style.left = "30%";
    this.bird.style.transform = "translate(-50%, -50%)";
  }

  animateBird() {
    let count = 0;
    this.animateBirdId = setInterval(() => {
      this.bird.setAttribute("src", FLAP_BIRD[count]["src"]);
      this.bird.setAttribute("alt", FLAP_BIRD[count]["alt"]);
      count = (count + 1) % FLAP_BIRD.length;
    }, REFRESH_FLAP);
  }

  moveBird() {
    // document.addEventListener("keypress", (event) => {
    //   if (event.code === "Space") {
    //     this.decideMoveUp = true;
    //     console.log(this.decideMoveUp);
    //     this.top -= 20;
    //     this.bird.style.top = toPx(this.top);
    //     console.log(this.top);
    //   }
    // });
    // this.top += 2;
    // this.bird.style.top = toPx(this.top);
    const moveBirdUp = () => {
      this.top -= 20;
      this.bird.style.top = toPx(this.top);
      this.decideMoveUp = false;
    };

    const moveBirdDown = () => {
      this.top += 2;
      this.bird.style.top = toPx(this.top);
    };

    const checkKey = (event) => {
      if (event.code === "Space") {
        this.decideMoveUp = true;
      }
    };
    document.onkeydown = checkKey;

    if (this.decideMoveUp) {
      moveBirdUp();
    } else {
      moveBirdDown();
    }

    // console.log(this.decideMoveUp);
    // console.log(this.top);
    // setInterval(() => {
    //   document.addEventListener("keypress", (event) => {
    //     if (event.code === "Space") {
    //       this.top -= 1;
    //       if (this.top <= 12) {
    //         this.top = 12;
    //       }
    //       this.bird.style.top = toPx(this.top);

    //       // console.log(this.top);
    //     } else {
    //       this.top += 0.05;
    //       if (this.top >= CONTAINER_HEIGHT - CONTAINER_BASE_HEIGHT) {
    //         this.top = CONTAINER_HEIGHT - CONTAINER_BASE_HEIGHT;
    //       }
    //       // console.log(this.top);
    //       this.bird.style.top = toPx(this.top);
    //     }
    //   });
    // }, 200);
    // window.requestAnimationFrame(() => {
    //   this.moveBird();
    // });
  }
}
