export const scene = new THREE.Scene();

scene.background = new THREE.Color(0x87CEEB);

scene.fog = new THREE.Fog(0x87CEEB,80,300);

export const renderer = new THREE.WebGLRenderer({
    canvas:document.getElementById("game"),
    antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

renderer.shadowMap.enabled=true;

const ambient=new THREE.AmbientLight(0xffffff,1.8);

scene.add(ambient);

const sun=new THREE.DirectionalLight(0xffffff,2);

sun.position.set(50,80,50);

sun.castShadow=true;

scene.add(sun);

const ground=new THREE.Mesh(

new THREE.PlaneGeometry(500,500),

new THREE.MeshStandardMaterial({
color:0x4CAF50
})

);

ground.rotation.x=-Math.PI/2;

ground.receiveShadow=true;

scene.add(ground);

window.addEventListener("resize",()=>{

renderer.setSize(window.innerWidth,window.innerHeight);

});
