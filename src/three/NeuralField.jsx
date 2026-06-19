import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// A drifting field of nodes connected by faint lines when close together —
// a "neural network" visual that ties directly to the AI/ML identity of the
// portfolio owner, rather than a generic particle starfield.
export default function NeuralField() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 38

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const NODE_COUNT = window.innerWidth < 768 ? 70 : 150
    const RADIUS = 24

    const nodes = []
    const positions = new Float32Array(NODE_COUNT * 3)
    for (let i = 0; i < NODE_COUNT; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * RADIUS * 2,
        (Math.random() - 0.5) * RADIUS * 2,
        (Math.random() - 0.5) * RADIUS
      )
      nodes.push({
        pos: v,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
      })
      positions[i * 3] = v.x
      positions[i * 3 + 1] = v.y
      positions[i * 3 + 2] = v.z
    }

    const pointGeo = new THREE.BufferGeometry()
    pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pointMat = new THREE.PointsMaterial({
      color: 0x00d9ff,
      size: 0.45,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    })
    const points = new THREE.Points(pointGeo, pointMat)
    scene.add(points)

    const maxLines = NODE_COUNT * 6
    const linePositions = new Float32Array(maxLines * 6)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7b61ff,
      transparent: true,
      opacity: 0.18,
    })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    const CONNECT_DIST = 7.5
    let frameId

    const animate = () => {
      for (let i = 0; i < NODE_COUNT; i++) {
        const n = nodes[i]
        n.pos.add(n.vel)
        if (Math.abs(n.pos.x) > RADIUS) n.vel.x *= -1
        if (Math.abs(n.pos.y) > RADIUS) n.vel.y *= -1
        if (Math.abs(n.pos.z) > RADIUS / 2) n.vel.z *= -1
        positions[i * 3] = n.pos.x
        positions[i * 3 + 1] = n.pos.y
        positions[i * 3 + 2] = n.pos.z
      }
      pointGeo.attributes.position.needsUpdate = true

      let lineIdx = 0
      for (let i = 0; i < NODE_COUNT && lineIdx < maxLines; i++) {
        for (let j = i + 1; j < NODE_COUNT && lineIdx < maxLines; j++) {
          const d = nodes[i].pos.distanceTo(nodes[j].pos)
          if (d < CONNECT_DIST) {
            const o = lineIdx * 6
            linePositions[o] = nodes[i].pos.x
            linePositions[o + 1] = nodes[i].pos.y
            linePositions[o + 2] = nodes[i].pos.z
            linePositions[o + 3] = nodes[j].pos.x
            linePositions[o + 4] = nodes[j].pos.y
            linePositions[o + 5] = nodes[j].pos.z
            lineIdx++
          }
        }
      }
      lineGeo.setDrawRange(0, lineIdx * 2)
      lineGeo.attributes.position.needsUpdate = true

      camera.position.x += (mouse.x * 6 - camera.position.x) * 0.02
      camera.position.y += (-mouse.y * 6 - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)

      scene.rotation.y += 0.0009

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      pointGeo.dispose()
      lineGeo.dispose()
      pointMat.dispose()
      lineMat.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 -z-0" aria-hidden="true" />
}
