function iniciar() {

    var scene = new THREE.Scene();
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    var camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);

    camera.position.z = 600;

    var renderer = new THREE.WebGLRenderer({antilias:true});

    renderer.setSize(500, 500);

    var show = document.getElementById('area')

    show.appendChild(renderer.domElement);

    renderer.setClearColor(0x1F5A94);

    var geometry = new THREE.BoxGeometry(200,200,200);

    var material = new THREE.MeshBasicMaterial({color:0xC9C097, wireframe: true});

    var cube = new THREE.Mesh(geometry,material);

    scene.add(cube);

    renderer.render(scene, camera);

    function render(){
        renderer.render(scene, camera);

        cube.rotation.z += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.x += 0.01;

        requestAnimationFrame(render);
    }

    render();

}

window.onload = iniciar;