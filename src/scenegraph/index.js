const { addEventResize } = require("../common/utils");
const THREE = require("three");

const render = (renderer, camera, scene) => {
  const objects = [];

  // 하나의 geometry로 모든 태양, 지구, 달을 생성
  const radius = 1;
  const widthSegments = 6;
  const heightSegments = 6;
  const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
  const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
  sunMesh.scale.set(5, 5, 5);  // 태양의 크기를 키움
  scene.add(sunMesh);
  objects.push(sunMesh);

  const renderSceneGraph = (time) => {
    objects.forEach((obj) => {
      obj.rotation.y = time;
    });
  }

  const renderFrame = (time) => {
    time *= 0.001;
    renderSceneGraph(time);
    renderer.render(scene, camera);
    requestAnimationFrame(renderFrame);
  }
  requestAnimationFrame(renderFrame);
}

const scenegraphMain = (canvas) => {
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  const camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000);
  camera.position.set(0, 50, 0);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);

  const light = new THREE.PointLight(0xFFFFFF, 3);
  scene.add(light);

  render(renderer, camera, scene);
  addEventResize(renderer, camera);
}

module.exports = { scenegraphMain };