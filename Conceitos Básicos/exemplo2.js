var scene;
var camera;
var renderer;

var cube;


var init = function() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //camera = new THREE.OrthographicCamera( -window.innerWidth/512, window.innerWidth/512, 
       // window.innerHeight/512, -window.innerHeight/512, 0.1, 1000 )

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    this.createACube();

    this.createPlane();

    this.createLight();

    camera.position.z = 5;

    this.render();

};

var render = function() {
    requestAnimationFrame( render );

    this.animateCube();

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.render( scene, camera );
};

var createACube = function() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshLambertMaterial( { color: "red" } );
    cube = new THREE.Mesh( geometry, material );

    cube.castShadow = true;

    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;

    scene.add( cube );
};

var createLight = function () {
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 20, 20);
    spotLight.castShadow = true;
    scene.add(spotLight);
}

var animateCube = function() {

    cube.rotation.y += 0.1;

};

var createPlane = function() {
    var planeGeometry = new THREE.PlaneGeometry(20, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc});
    plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = -1;

    plane.receiveShadow = true;

    scene.add(plane);
};

window.onload = this.init;