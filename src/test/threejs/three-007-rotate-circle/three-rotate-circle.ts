import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import anime from 'animejs/lib/anime.es.js';

window.addEventListener('load', async() => {
	const renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.querySelector('body')?.appendChild(renderer.domElement);

	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
	camera.position.set(5, 5, 5);
	camera.setFocalLength(20);
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x999999 );

	// {
	// 	const light = new THREE.DirectionalLight( 0xffffff, 1 );
	// 	light.position.set( 1, 50, 1 ).normalize();
	// 	scene.add( light );
	// }

	// {
	// 	const light = new THREE.DirectionalLight( 0xffffff, 1 );
	// 	light.position.set( 50, 1, 1 ).normalize();
	// 	scene.add( light );
	// }

	// {
	// 	const light = new THREE.DirectionalLight( 0xffffff, 1 );
	// 	light.position.set( 1, 1, 50 ).normalize();
	// 	scene.add( light );
	// }

	{
		const spotLight = new THREE.SpotLight( 0xffffff );
		spotLight.position.set( 0, 1000, 100 );

		spotLight.castShadow = true;

		spotLight.shadow.mapSize.width = 1024;
		spotLight.shadow.mapSize.height = 1024;

		spotLight.shadow.camera.near = 500;
		spotLight.shadow.camera.far = 40000;
		spotLight.shadow.camera.fov = 30;

		scene.add( spotLight );
	}

	const light = new THREE.AmbientLight( 0xffffff, 5 ); // soft white light
	scene.add( light );

	const axesHelper = new THREE.AxesHelper(50);
	scene.add(axesHelper);

	const gltf = await new Promise<GLTF>(function(resolve, reject) {
		const loader = new GLTFLoader();
		loader.load('./cube.glb', function (gltf) {
			resolve(gltf);
		});
	});

	const mesh = gltf.scene.children[0];

	const controls = new DragControls([mesh], camera, renderer.domElement);
	controls.addEventListener('dragstart', function (event) {
		console.log('dragstart.event', event);
		// event.object.material.opacity = 0.33
	})
	controls.addEventListener('dragend', function (event) {
		// event.object.material.opacity = 1
		console.log('dragend.event', event);
	});

	scene.add(mesh);


	const tl = anime.timeline({
		easing: 'spring(1, 80, 10, 0)',
		duration: 3000,
	});

	tl
		.add({
			targets: [mesh.position],
			x: 3,
			direction: "alternate",
			duration: 1000,
		})
		.add({
			targets: [mesh.position],
			y: 3,
			direction: "alternate",
			duration: 1000,
		})
		.add({
			targets: [mesh.position],
			z: 3,
			direction: "alternate",
			duration: 1000,
		})
	;

	renderer.render( scene, camera );

	function animation() {
		requestAnimationFrame( animation );
		
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