import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import anime from 'animejs/lib/anime.es.js';
import * as CANNON from 'cannon-es';

window.addEventListener('load', async() => {
	const renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.querySelector('body')?.appendChild(renderer.domElement);

	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
	camera.position.set(40, 40, 40);
	camera.setFocalLength(20);
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x999999 );



	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
	cube.position.set(10, 10, 10);
  scene.add( cube );


	scene.add(new THREE.AxesHelper(100));




	const world = new CANNON.World();
	world.gravity.set(0, -9.82, 0);

	const sphereShape = new CANNON.Sphere(0.5);
	const sphereBody = new CANNON.Body({
		mass: 1,
		position: new CANNON.Vec3(10, 10, 10),
		shape: sphereShape,
	});
	world.addBody(sphereBody);

	// sphereBody.applyImpulse(new CANNON.Vec3(0, 0, 0), new CANNON.Vec3(0, 0, -50));
	const force = new CANNON.Vec3(-500, 350, 0)
	sphereBody.applyForce(force);



	const clock = new THREE.Clock();
	let oldElapsedTime = 0;
	const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - oldElapsedTime;
    oldElapsedTime = elapsedTime;

    // Update physics
    world.step(1 / 60, deltaTime, 3)
    // step은 업데이트 해주는 메소드
    console.log(sphereBody.position.y)
  
    // cannon.js world에 있는 값으로 Three.js의 sphere 값을 업데이트
    // sphere.position.x = sphereBody.position.x
    // sphere.position.y = sphereBody.position.y
    // sphere.position.z = sphereBody.position.z
  
    cube.position.copy(new THREE.Vector3(sphereBody.position.x, sphereBody.position.y, sphereBody.position.z));
	};




	renderer.render( scene, camera );

	function animation() {
		requestAnimationFrame( animation );
		
		tick();
		// anime({
		// 	targets: [mesh.rotation],
		// 	y: 10, x: 20, z: 30,
		// 	easing: "easeInOutSine",
		// 	duration: 1000,
		// 	direction: "alternate",
		// 	loop: true
		// });

		renderer.render( scene, camera );
	}

	animation();
});