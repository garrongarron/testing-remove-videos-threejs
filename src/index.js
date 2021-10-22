import camera from "./basic/Camera.js";
import ambientLight from "./basic/Light.js";
import loopMachine from "./basic/LoopMachine.js";
import renderer from "./basic/Renderer.js";
import resize from "./basic/Resize.js";
import scene from "./basic/Scene.js";
import cube from "./shapes/Cube.js";





let video = document.getElementById('video');



let texture = new THREE.VideoTexture(video);
const parameters = { color: 0xffffff, map: texture };
let material = new THREE.MeshLambertMaterial(parameters);
cube.material = material
let tick = () => {
    renderer.render(scene, camera)
}
scene.add(cube)
scene.add(ambientLight)
camera.position.z = 5
camera.position.set(4, 3, 2)
camera.lookAt(cube.position)
resize.start(renderer)
loopMachine.addCallback(tick)
loopMachine.start()