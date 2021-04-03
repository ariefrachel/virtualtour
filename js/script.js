var scene, viewer;
scene = new PANOLENS.ImagePanorama('asset/header.jpg');
viewer = new PANOLENS.Viewer({
    controlBar: false,
    autoRotate: true,
    autoRotateSpeed: 0.5,
});
viewer.add(scene);