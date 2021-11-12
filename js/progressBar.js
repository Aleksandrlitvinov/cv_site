export class ProgressBar {
  constructor(option = {}) {
    const {
      start = 0,
      end = 50,
      background = '#0075ff',
      height = 10,
      width = 200,
      textColor = '#fff',
    } = option
    this.start = start
    this.end = end
    this.background = background
    this.height = height
    this.width = width
    this.textColor = textColor
  }

  init(selector) {
    document.querySelector(selector).append(this.createProgressBar())
  }

  createProgressBar() {
    const progressBar = document.createElement('div')
    const bar = this.createBar()
    progressBar.append(bar)
    progressBar.style.cssText = `
    background-color: #d0d0d0;
    width: ${this.width}px;
    border: 2px solid #808181;
    border-radius: 10px;
    `
    this.animateBar(bar)
    return progressBar
  }

  createBar() {
    const bar = document.createElement('div')
    bar.style.cssText = `
    text-align: center; 
    background-color: ${this.background};
    width: 100%;
    color: ${this.textColor};
    height: ${this.height}px;
    line-height: ${this.height}px;
    border-radius: 5px;
    `
    this.stateProgress(bar)
    return bar
  }

  stateProgress(elem) {
    elem.style.width = `${this.start}%`
    elem.textContent = `${this.start}%`
  }

  animateBar(bar) {
    const animate = () => {
      if (this.start < this.end) {
        this.start++
        this.stateProgress(bar)
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }
}
