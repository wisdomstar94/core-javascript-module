import * as THREE from 'three';
import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera.js';

window.addEventListener('load', () => {
	const camera = new CinematicCamera( 
		60, // 카메라 절두체 수직 시야각(도 단위).
		window.innerWidth / window.innerHeight, // 카메라 절두체 종횡비, 창 너비를 창 높이로 나눈 값입니다.
		1, // 비행기 근처의 카메라 절두체.
		0, // 카메라 절두체 원거리 평면.
	);
	camera.setFocalLength( 10 );
	camera.position.set( -50, 50, 50 );
	camera.lookAt(0, 0, 0);

	const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf0f0f0 );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.3 ) );

	const light = new THREE.DirectionalLight( 0xffffff, 0.35 );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );

	const geometry = new THREE.BoxGeometry( 20, 20, 20 );
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
	const cubeX = 0;
	const cubeY = 0;
	const cubeZ = 0;
	const cubeToCameraLength = 50;

	const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );


	

	let isXPlus = true;
	let isYPlus = false;
	function animate() {
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
		let nextX = camera.position.x;
		if (isXPlus) {
			nextX += 1;
		} else {
			nextX -= 1;
		}

		let nextZ = Math.sqrt(cubeToCameraLength ** 2 - (nextX ** 2));
		if (isNaN(nextZ)) {
			// console.log('..');
			if (nextX > cubeX) {
				isXPlus = false;
				nextX = cubeX + cubeToCameraLength;
				nextZ = Math.sqrt(cubeToCameraLength ** 2 - (nextX ** 2));
			} else {
				isXPlus = true;
				nextX = cubeX - cubeToCameraLength;
				nextZ = Math.sqrt(cubeToCameraLength ** 2 - (nextX ** 2));
			}
		}

		console.log(`nextX: ${nextX}, nextZ: ${-nextZ}`);

		// if (isXPlus) {
		// 	nextX += 1;
		// } else {
		// 	nextX -= 1;
		// }

		// if (nextX > 50) {
		// 	isXPlus = false;
		// 	nextX = 50;
		// } else if (nextX < -50) {
		// 	isXPlus = true;
		// 	nextX = -50;
		// }

		camera.position.set( 
			nextX,
			camera.position.y,
			isXPlus ? -nextZ : nextZ,
		);
		camera.lookAt(0, 0, 0);
		// camera.position.set( 
		// 	camera.position.x + 0.1,
		// 	Math.sqrt(2500 - ((camera.position.x + 0.1) ** 2)),
		// 	camera.position.z,
		// );

    renderer.render( scene, camera );
  };

  animate();
});