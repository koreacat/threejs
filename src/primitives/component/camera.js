const THREE = require("three");

class Camera {
  constructor() {
    const canvas = document.querySelector('#c');
    const fov = 100;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 10;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
    this.camera = camera;
  }
}

module.exports = { Camera }
