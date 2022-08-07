import * as THREE from 'three';

window.addEventListener('load', () => {
	// https://webdoli.tistory.com/51
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.setFocalLength( 10 );
	camera.position.set( 50, 50, 50 );
	camera.lookAt(0, 0, 0);

	const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf0f0f0 );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.3 ) );

	const light = new THREE.DirectionalLight( 0xffffff, 0.35 );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );

	const axesHelper = new THREE.AxesHelper( 500 );
	scene.add( axesHelper );

	const geometry = new THREE.BoxGeometry( 20, 20, 20 );
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
	const cubeX = 0;
	const cubeY = 0;
	const cubeZ = 0;

	cube.position.x = cubeX;
	cube.position.y = cubeY;
	cube.position.z = cubeZ;

	const cubeToCameraLength = 50;

	const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

	let default_value = 0;
	function animate() {
    requestAnimationFrame( animate );

		console.log(`camera.position`, camera.position);

		camera.position.x = Math.sin(default_value) * cubeToCameraLength;
		camera.position.z = Math.cos(default_value) * cubeToCameraLength;
		camera.lookAt(new THREE.Vector3(0,0,0));

		default_value += 0.01;

    renderer.render( scene, camera );
  };

	function getAngle(x1: number, y1: number, x2: number, y2: number) {
    const rad = Math.atan2(y2 - y1, x2 - x1);
    return (rad * 180) / Math.PI ;
	}

  animate();
});