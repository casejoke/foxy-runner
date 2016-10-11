class ChickenParticles extends PIXI.particles.ParticleContainer {
  
  constructor() {
    super(isWebGLRenderer ? 100 : 10, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true
    });
    
    this.init();
  }
  
  init() {
    let totalParticles = isWebGLRenderer ? 100 : 10;
    this.particles = [];
    for (let i = 0; i < totalParticles; ++i) {
      let texture = PIXI.loader.resources[`chicken-particle`].texture;
      let chickenParticle = new PIXI.Sprite(texture);
      chickenParticle.position.x = 512 / 2 + (Math.random() - .5) * 50;
      chickenParticle.position.y = 512 / 2 + (Math.random() - .5) * 50;
      chickenParticle.anchor.set(0.5, 0.5);
      let startScale = 0.05 + Math.random() / 30;
      chickenParticle.internalState = {
        startScale,
        startX: chickenParticle.position.x,
        startY: chickenParticle.position.y,
        accelerationX: (Math.random() - .5) * 30,
        accelerationY: (Math.random() - .5) * 30,
        maxDeviationX: 512 / 4 + (Math.random() - .5) * 256,
        maxDeviationY: 512 / 4 + (Math.random() - .5) * 256,
        maxScale: startScale * 1.5
      };
      this.particles.push(chickenParticle);
      this.addChild(chickenParticle);
    }
  }
  
  scatter() {
    var animationDone = true;
    this.particles.forEach(particle => {
      let progress = Math.max(
        Math.abs(particle.internalState.startX - particle.position.x) / particle.internalState.maxDeviationX,
        Math.abs(particle.internalState.startY - particle.position.y) / particle.internalState.maxDeviationY
      );
      if (progress < 1) {
        particle.position.x += particle.internalState.accelerationX;
        particle.position.y += particle.internalState.accelerationY;
        particle.scale.set(Math.min(particle.internalState.maxScale, progress / 30 + particle.internalState.startScale));
        particle.alpha = Math.sin((1 - progress) * Math.PI);
        animationDone = false;
      } else {
        particle.alpha = 0;
      }
    });
    if (animationDone) {
      this.alpha = true;
    }
  }
  
  reset() {
    this.particles.forEach(particle => {
      particle.position.x = particle.internalState.startX;
      particle.position.y = particle.internalState.startY;
      particle.scale.set(particle.internalState.startScale);
      particle.alpha = 1;
    })
  }
}