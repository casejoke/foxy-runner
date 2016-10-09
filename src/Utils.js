class Utils {
  
  static getBodyBounds() {
    let width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  
    let height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    return [width, height];
  }
  
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}