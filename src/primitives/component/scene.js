const THREE = require("three");

class Scene {
  constructor() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);
    this.scene = scene;
  }
}

module.exports = { Scene }
