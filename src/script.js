import './style.css'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Camera } from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene()

// Object
//const geometry = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
//const mesh = new THREE.Mesh(geometry, material)
//scene.add(mesh)
// Object Loader
function init(){
const loader = new GLTFLoader().setPath('models/free_-_skybox_anime_sky/');
loader.load('scene.gltf', (gltf)=>{
    scene.add(gltf.scene);
    console.log('loaded');
})
};
init();

// Lights 
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);



// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 10;
scene.add(camera)



// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)

function animate(){
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    // Camera rotate
    camera.rotation.x += 1;
    controls.update();
}
// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.update;

animate();

/*const activeBtn = document.querySelectorAll('.submitBtn');
activeBtn.addEventListener('click', ()=>{
    activeBtn.classList.toggle('active');
    }
);
*/