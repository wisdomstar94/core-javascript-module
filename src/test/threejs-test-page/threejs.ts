import * as THREE from 'three';

window.addEventListener('load', function() {
  console.log('THREE', THREE);

  const canvas = document.querySelector('canvas.webgl');
  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(3, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const sizes = {
    width: 800,
    height: 600,
  };
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
  camera.position.set(10, 10, -10);
  camera.lookAt(scene.position);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas!,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
});
