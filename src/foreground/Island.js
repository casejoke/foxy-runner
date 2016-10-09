class Island {
  
  constructor(type, sprite) {
    this.type = type;
    this.sprite = sprite;
    this.sprite.position.y = 0;
  
    this.yMiddle = (1 << 8) + 120;
    this.offset = 1 << 6;
    
    this.yPosition = this.generateY();
  }
  
  generateY() {
    return Utils.getRandomInt(this.yMiddle - this.offset, this.yMiddle + this.offset);
  }
  
  getWidth() {
    return this.sprite.width;
  }
  
  getHeight() {
    return this.sprite.height;
  }
}