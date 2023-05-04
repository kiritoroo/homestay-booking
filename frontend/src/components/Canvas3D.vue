<template>
  <div id="three-container"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted } from 'vue'

onMounted(() => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x88ccee)
  scene.fog = new THREE.Fog(0x88ccee, 0, 50)

  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.001,
    1000
  )
  camera.position.set(0, 5, 10)

  const container = document.getElementById('three-container') as HTMLDivElement
  const renderer = new THREE.WebGL1Renderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.VSMShadowMap
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  container.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)

  function animate () {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  const planeGeometry = new THREE.PlaneGeometry(20, 20, 1, 1)
  const planMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
  })
  const plane = new THREE.Mesh(planeGeometry, planMaterial)
  plane.receiveShadow = true
  plane.rotation.x = -Math.PI / 2
  scene.add(plane)

  animate()
})

</script>
