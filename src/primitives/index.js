const { Cube01 } = require("./component/cube01");
const { Cone } = require("./component/cone");
const { addEventResize } = require("../common/utils");
const THREE = require("three");

const render = (renderer, camera, scene) => {
  const meshes = [
    new Cube01({color: 0x44aa88,  x: 0}).mesh,
    new Cube01({color: 0x8844aa, x: -2}).mesh,
    new Cone({color: 0xaa8844,  x: 2}).mesh,
  ];

  const renderMeshes = (time) => {
    meshes.forEach((cube) => {
      const speed = 0.3;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
      scene.add(cube);
    });
  }

  const renderFrame = (time) => {
    time *= 0.001;
    renderMeshes(time);
    renderer.render(scene, camera);
    requestAnimationFrame(renderFrame);
  }
  requestAnimationFrame(renderFrame);
}

const primitivesMain = (canvas) => {
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  const camera = new THREE.PerspectiveCamera(100, canvas.clientWidth / canvas.clientHeight, 0.1, 10);
  camera.position.z = 2;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);

  const light = new THREE.DirectionalLight(0xFFFFFF, 1);
  light.position.set(-1, 20, 40);
  scene.add(light);

  render(renderer, camera, scene);
  addEventResize(renderer, camera);
}

module.exports = { primitivesMain };
