import * as THREE from 'three'
import { WEBGL } from './webgl'

const makeInstance = (color, x) => {
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;

  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const material = new THREE.MeshPhongMaterial({color});

  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = x;
  return cube;
}

const initCamera = () => {
  const canvas = document.querySelector('#c');
  const fov = 100;
  const aspect = canvas.clientWidth / canvas.clientHeight;
  const near = 0.1;
  const far = 10;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;
  return camera;
} 

const initScean = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x004fff);
  return scene;
}

const initLight = () => {
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 20, 40);
  return light;
}

const initRenderer = () => {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  return renderer;
}

const onWindowResize = (renderer, camera) => {
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
}

const render = (renderer, camera, scene) => {
  const cubes = [
    makeInstance(0x44aa88,  0),
    makeInstance(0x8844aa, -2),
    makeInstance(0xaa8844,  2),
  ];

  const light = initLight();  
  scene.add(light);

  const render = (time) => {
    time *= 0.001;
  
    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
      scene.add(cube);
    });
  
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

const main = () => {
  if(!WEBGL.isWebGLAvailable()) return;
  const renderer = initRenderer();
  const camera = initCamera();
  const scene = initScean();

  render(renderer, camera, scene);
  
  window.addEventListener('resize', () => onWindowResize(renderer, camera));
}

main();
