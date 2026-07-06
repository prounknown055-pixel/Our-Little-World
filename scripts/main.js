// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 6, 12);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("game"),
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Lights
const ambient = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(20, 40, 20);
scene.add(sun);

// Ground
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(300,300),
    new THREE.MeshLambertMaterial({
        color:0x4caf50
    })
);

ground.rotation.x = -Math.PI/2;
scene.add(ground);

// Temporary Player
const player = new THREE.Mesh(
    new THREE.BoxGeometry(1,2,1),
    new THREE.MeshLambertMaterial({
        color:0x2196f3
    })
);

player.position.y = 1;
scene.add(player);

// Camera Follow
function updateCamera(){

    camera.position.x = player.position.x;

    camera.position.z = player.position.z + 8;

    camera.lookAt(player.position);

}

// Resize
window.addEventListener("resize",()=>{

    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth,window.innerHeight);

});

// Loading Screen Hide
window.onload=()=>{

    document.getElementById("loading").style.display="none";

};

// Animation Loop
function animate(){

    requestAnimationFrame(animate);

    updateCamera();

    renderer.render(scene,camera);

}

animate();
