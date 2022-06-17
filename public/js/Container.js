/**
 * MAIN CONTAINER CLASS
 */
class Container {
  constructor(
    width = CONTAINER_WIDTH,
    height = CONTAINER_HEIGHT,
    containerBaseWidth = CONTAINER_BASE_WIDTH,
    containerBaseHeight = CONTAINER_BASE_HEIGHT,
    bgDay = CONTAINER_BACKGROUND.day,
    bgNight = CONTAINER_BACKGROUND.night,
    bgContainerBase = CONTAINER_BASE_BACKGROUND,
    containerBaseBgPositionY = CONTAINER_BASE_BG_POSIITON_Y
  ) {
    this.containerWidth = width;
    this.ContainerHeight = height;
    this.containerBaseWidth = containerBaseWidth;
    this.containerBaseHeight = containerBaseHeight;
    this.containerBackgroundDay = bgDay;
    this.containerBackgroundNight = bgNight;
    this.containerBaseBackground = bgContainerBase;
    this.containerBaseBgPositionY = containerBaseBgPositionY;
  }

  /**
   *creates container with animated base
   */
  create() {
    this.createContainer(); // create main container
    this.createContainerBase(); // create container's base section
    this.insert(this.containerBase); // insert container base into the container
    this.moveContainerBase(); // animate container base
  }

  /**
   * element is inserted into the container
   * @param {HTML_DOM_ELEMENT} element
   */
  insert(element) {
    this.container.appendChild(element);
  }

  /**
   * create container
   */
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

  /**
   * create container base ie. bottom section of the container
   */
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

  /**
   * move base to the left with BASE_ANIMATION_SPEED on each frame
   */
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
}
