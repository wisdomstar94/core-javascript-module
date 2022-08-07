import * as THREE from 'three';

// 참조 : http://jsfiddle.net/Q4Jpu/

window.addEventListener('load', () => {
	// dom
	const container = document.createElement( 'div' );
	document.body.appendChild( container );

	// renderer
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	// scene
	const scene = new THREE.Scene();

	// camera
	const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set(16, 8, 16); 
	camera.lookAt( scene.position );
	scene.add(camera);

	// material
	const material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );

	// geometry
	const geometry = new THREE.BoxGeometry( 3, 4, 8, 2, 3, 4 );

	// mesh
	const mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	// axes
	const axes = new THREE.AxesHelper();
	axes.scale.set(1, 1, 1);
	scene.add(axes);

	// render
	renderer.render( scene, camera );

	// remember these initial values
	const tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
	const windowHeight = window.innerHeight;

	// Event Listeners
	// -----------------------------------------------------------------------------
	window.addEventListener( 'resize', onWindowResize, false );

	function onWindowResize( event ) {
		camera.aspect = window.innerWidth / window.innerHeight;
	
		// adjust the FOV
		camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / windowHeight ) );
		
		camera.updateProjectionMatrix();
		camera.lookAt( scene.position );

		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.render( scene, camera );
	}
});