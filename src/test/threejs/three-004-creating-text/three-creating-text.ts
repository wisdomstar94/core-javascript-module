import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

window.addEventListener('load', () => {
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight, true );
	document.body.appendChild( renderer.domElement );

	// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
	// camera.position.set( 5, 0, 200 );
	// camera.lookAt( 0, 0, 0 );

	const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x999999 );

	const loader = new GLTFLoader();
	loader.load('./text-test14.glb', function (gltf) {
		console.log('gltf', gltf);
		scene.add(gltf.scene);
		renderer.render( scene, gltf.cameras[0] );
	}, undefined, function ( error ) {
		console.error(error);
	});
});
