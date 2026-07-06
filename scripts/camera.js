export const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 6, 12);

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

export function followTarget(target) {

    camera.position.x += (target.position.x - camera.position.x) * 0.08;

    camera.position.y += ((target.position.y + 5) - camera.position.y) * 0.08;

    camera.position.z += ((target.position.z + 8) - camera.position.z) * 0.08;

    camera.lookAt(
        target.position.x,
        target.position.y + 1.5,
        target.position.z
    );

}
