import { Utils } from "./Utils";

export class Settings {
  
  static get Width() {
    let [ width, height ] = window.isCached ? window.bounds : Utils.getBodyBounds();
    if (width < 1000 && width < height) {
      return 1500;
    }
    return 3072;
  }
  
  static Height = 1536;
  
  static ScrollSpeed = 12;
  
  static MaxScrollSpeed = 45;
  
  static ScrollSpeedAcceleration = 0.011;
  
  static CanvasDomId = 'game-canvas';
}