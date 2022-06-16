class Container {
  constructor(
    width = CONTAINER_WIDTH,
    height = CONTAINER_HEIGHT,
    containerBaseWidth = CONTAINER_BASE_WIDTH,
    containerBaseHeight = CONTAINER_BASE_HEIGHT,
    bgDay = CONTAINER_BACKGROUND.day,
    bgNight = CONTAINER_BACKGROUND.night,
    bgContainerBase = CONTAINER_BASE_BACKGROUND
  ) {
    this.containerWidth = width;
    this.ContainerHeight = height;
    this.containerBaseWidth = containerBaseWidth;
    this.containerBaseHeight = containerBaseHeight;
    this.containerBackgroundDay = bgDay;
    this.containerBackgroundNight = bgNight;
    this.containerBaseBackground = bgContainerBase;
    this.containerBaseBgPositionY = 0;
    // this.moveBase = true;
  }

  create() {
    this.createContainer();
    this.createContainerBase();
    this.insert(this.containerBase);
    this.moveContainerBase();
    // this.toggleMoveFlag();
  }

  insert(element) {
    this.container.appendChild(element);
  }

  createContainer() {
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
    this.container.classList.add("container");
    this.container.style.width = toPx(this.containerWidth);
    this.container.style.height = toPx(this.ContainerHeight);
    this.container.style.position = "relative";
    this.container.style.margin = "50px auto 0 auto";
    this.container.style.backgroundImage =
      Math.random() > 0.4
        ? `url(${this.containerBackgroundDay})`
        : `url(${this.containerBackgroundNight})`;
    this.container.style.backgroundPositionY = "0";
    this.container.style.backgroundSize = "contain";
    this.container.style.overflow = "hidden";
  }

  createContainerBase() {
    this.containerBase = document.createElement("div");
    this.containerBase.style.width = toPx(this.containerBaseWidth);
    this.containerBase.style.height = toPx(this.containerBaseHeight);
    this.containerBase.style.position = "absolute";
    this.containerBase.style.bottom = "0";
    this.containerBase.style.left = "0";
    this.containerBase.style.zIndex = "1";
    this.containerBase.style.backgroundImage = `url(${this.containerBaseBackground})`;
    this.containerBase.style.backgroundRepeat = "repeat-x";
  }

  // move base to the left with BASE_ANIMATION_SPEED on each frame
  moveContainerBase() {
    this.containerBaseBgPosition =
      (this.containerBaseBgPosition - BASE_ANIMATION_SPEED) %
      this.containerBaseWidth;
    this.containerBase.style.backgroundPositionX = toPx(
      this.containerBaseBgPosition
    );
    window.requestAnimationFrame(() => {
      this.moveContainerBase();
    });
  }

  toggleMoveFlag() {
    const id = setInterval(() => {
      this.moveBase = !this.moveBase;
      this.moveContainerBase();
    }, 2000);
  }
}
