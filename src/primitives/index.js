const { WEBGL } = require("../common/webgl");
const { Renderer } = require("./component/renderer");
const { Camera } = require("./component/camera");
const { Scene } = require("./component/scene");
const { Light } = require("./component/light");
const { Cube01 } = require("./component/cube01");
const { Cone } = require("./component/cone");
const { addEventResize } = require("../common/utils");

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

const primitivesMain = () => {
  if(!WEBGL.isWebGLAvailable()) return;
  const renderer = new Renderer().renderer;
  const camera = new Camera().camera;
  const scene = new Scene().scene;
  new Light(scene);

  render(renderer, camera, scene);
  addEventResize(renderer, camera);
}

module.exports = { primitivesMain };