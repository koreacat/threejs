const THREE = require("three");

class Renderer {
  constructor() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    this.renderer = renderer;
  }
}

module.exports = { Renderer }
