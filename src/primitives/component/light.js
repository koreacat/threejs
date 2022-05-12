const THREE = require("three");

class Light {
  constructor(scene) {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 20, 40);
    scene.add(light);
    this.light = light;
  }
}

module.exports = {Light}