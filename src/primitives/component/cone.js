const THREE = require("three");

class Cone {
  constructor(props) {
    const { color, x } = props;
    const radius = 0.5;
    const height = 1;
    const radialSegments = 100;
    const geometry = new THREE.ConeGeometry(radius, height, radialSegments);
    const material = new THREE.MeshPhongMaterial({color});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 1;
    mesh.position.x = x;
    mesh.position.z = -1;

    this.mesh = mesh;
  }
}

module.exports = { Cone }