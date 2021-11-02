//import styles to apply to canvas
import '../css/style.css'

//threej (for animations and 3d objects)
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
//gsap (for animations)
import { gsap } from 'gsap'
//howler (for sound)
import * as howler from 'howler'

//threejs boilerplate

//scene and camera
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 2000)

camera.position.z = 25
//renderer
const renderer = new THREE.WebGLRenderer({antialias: true})
document.body.appendChild(renderer.domElement)

renderer.setPixelRatio(devicePixelRatio)
renderer.setSize(innerWidth, innerHeight)

//controls
const controls = new OrbitControls(camera, renderer.domElement)
/* 
  right click and drag to move around one point
  scroll to zoom in / zoom out
  left click to move along the x and y axis
*/


//sample object(cube)
const cube = new THREE.BoxGeometry(10, 10, 10)
const cubeMaterial = new THREE.MeshStandardMaterial({color: 0xFFBBCC})
const cubemesh = new THREE.Mesh(cube, cubeMaterial)

//light(ambient to light up the whole scene)
const ambientLight = new THREE.AmbientLight(0xffffff, 1)

//make screen responsive when resized(applies for threejs)
function makeResponsive() {
    window.addEventListener('resize', () =>{
        renderer.setSize(innerWidth, innerHeight)
        camera.aspect = innerWidth / innerHeight
      
        camera.updateProjectionMatrix()
    })
}

//animate the objects must be done with gsap for simplicity
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

    cubemesh.rotation.x += 0.01
    cubemesh.rotation.z += 0.01
}
animate()
makeResponsive()

//add objects to the scene
scene.add(cubemesh, ambientLight)

