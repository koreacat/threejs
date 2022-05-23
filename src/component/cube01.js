const THREE = require("three");

class Cube01 {
  constructor(props) {
    const { color, x } = props;
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshPhongMaterial({color});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = x;
    this.mesh = mesh;
  }
}

module.exports = { Cube01 }
