// src/components/Hero3D.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
uniform float uTime;
uniform float uAmp;
uniform float uFreqX;
uniform float uFreqY;

varying vec2 vUv;
varying float vHeight;

void main(){
  vUv = uv;

  vec3 pos = position;

  // Olas senoidales (rápidas). Luego podemos cambiar a ruido simplex.
  float waveX = sin((pos.x * uFreqX) + uTime*0.8);
  float waveY = cos((pos.y * uFreqY) - uTime*1.2);
  float h = (waveX + waveY) * 0.25 * uAmp;

  pos.z += h;
  vHeight = h;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uDotScale;
uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec2 vUv;
varying float vHeight;

// Patrón de puntos para simular "partículas"
float dotMask(vec2 uv, float scale){
  vec2 g = fract(uv * scale) - 0.5;
  float d = length(g) * 2.0;
  float m = smoothstep(0.45, 0.4, d);
  return m;
}

void main(){
  float mask = dotMask(vUv, uDotScale);
  float shade = 0.55 + vHeight * 0.9;
  vec3 base = mix(uColorA, uColorB, clamp(shade, 0.0, 1.0));
  vec3 color = mix(base*0.35, base, mask);
  gl_FragColor = vec4(color, 1.0);
}
`;

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000");

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 1.1, 3.0);

    // Malla: más segmentos = más suave
    const geometry = new THREE.PlaneGeometry(6, 3, 300, 160);

    const uniforms = {
      uTime:     { value: 0 },
      uAmp:      { value: 1.0 },
      uFreqX:    { value: 3.0 },
      uFreqY:    { value: 2.0 },
      uDotScale: { value: 120.0 },
      uColorA:   { value: new THREE.Color("#0a0a0a") },
      uColorB:   { value: new THREE.Color("#0041A3") }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      wireframe: false,
      depthWrite: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 3.2;
    mesh.position.y = -0.2;
    scene.add(mesh);

    const amb = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(amb);

    const clock = new THREE.Clock();

    // Resize
    const onResize = () => {
      const W = mount.clientWidth, H = mount.clientHeight;
      renderer.setSize(W, H);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Parallax con mouse
    const target = new THREE.Vector2();
    const onPointerMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      target.set(x * 0.08, y * 0.04);
    };
    window.addEventListener("pointermove", onPointerMove);

    // Loop
    const tick = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      camera.position.x += (target.x - camera.position.x) * 0.05;
      camera.position.y = 1.1 + (target.y * 0.5);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();

    // Limpieza
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* lienzo WebGL */}
      <div ref={mountRef} className="absolute inset-0" />
      {/* contenido UI encima */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-xs border border-blue-500/30">
            <span className="size-2 rounded-full bg-blue-400" /> BETA RELEASE
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
            Unlock your <span className="text-white/70 italic">future</span> growth
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Trading mentorship strategies that help you outperform the market.
          </p>
          <a href="#contact" className="inline-block mt-8 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500">
            [CONTACT US]
          </a>
        </div>
      </div>
      {/* degradado superior/inferior para contraste */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/60" />
    </section>
  );
}
