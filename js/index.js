function start() {
  const renderer = initRenderer();

  const camera = initCamera();
  camera.position.set(386.505, 59.422, -211.25);

  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0x333333)); 
  initDefaultLighting(scene);  
  
  const trackballControls = initTrackballControls(camera, renderer);
  const clock = new THREE.Clock();
  
  const mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath("./models/raydelto/")
  mtlLoader.load('raydelto.mtl',  (materials) =>{
    materials.preload();
    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('./models/raydelto/raydelto.obj', function (object) {
    object.scale.set(140, 140, 140);
    object.rotation.y = -1.3;
    scene.add(object);    
    });
  });

  render();
  function render() {
    trackballControls.update(clock.getDelta());
    requestAnimationFrame(render);
    renderer.render(scene, camera)
  }
}