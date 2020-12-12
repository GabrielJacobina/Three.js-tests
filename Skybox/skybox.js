let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
    camera.position.set(-900,-200,-900);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', renderer);
    

    let materialArray= [];
    let texture_ft = new THREE.TextureLoader().load('arid2_ft.jpg');
    let texture_bk = new THREE.TextureLoader().load('arid2_bk.jpg');
    let texture_up = new THREE.TextureLoader().load('arid2_up.jpg');
    let texture_dn = new THREE.TextureLoader().load('arid2_dn.jpg');
    let texture_rt = new THREE.TextureLoader().load('arid2_rt.jpg');
    let texture_lf = new THREE.TextureLoader().load('arid2_lf.jpg');

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

    let skyboxGeo = new THREE.BoxGeometry(10000,10000,10000);
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();