const addEventResize = (renderer, camera) => {
  window.addEventListener('resize', () => onWindowResize(renderer, camera));
}

const onWindowResize = (renderer, camera) => {
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
}

module.exports = {addEventResize}