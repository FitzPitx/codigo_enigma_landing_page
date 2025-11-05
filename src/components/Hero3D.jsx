import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
uniform float uTime;
uniform float uAmp;

attribute float aSize;

void main(){
  vec3 pos = position;
  
  float distance = length(pos.xz);
  
  float wave = sin(distance * 0.3 - uTime * 2.0) * uAmp;
  float wave2 = cos(distance * 0.2 + uTime * 1.5) * uAmp * 0.5;
  
  pos.y = wave + wave2;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  gl_PointSize = aSize * (300.0 / -mvPosition.z);
}
`;

const fragmentShader = `
uniform float uOpacity;

void main(){
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center);
  
  float alpha = smoothstep(0.8, 0.3, dist);
  
  if (alpha < 0.01) discard;
  
  gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * uOpacity);
}
`;

export default function Hero3D() {
  const mountRef = useRef(null);
  const uiRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    
    // Usar dimensiones de ventana completas
    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.set(0, 40, 80);
    camera.lookAt(0, 0, 0);

    const count = 100;
    const separation = 3;
    const numParticles = count * count;
    
    const positions = new Float32Array(numParticles * 3);
    const sizes = new Float32Array(numParticles);
    
    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iz = 0; iz < count; iz++) {
        const x = (ix - count / 2) * separation;
        const z = (iz - count / 2) * separation;
        const y = 0;
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        
        sizes[i] = Math.random() * 1.5 + 0.5;
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    const uniforms = {
      uTime: { value: 0 },
      uAmp: { value: 8.0 },
      uOpacity: { value: 0.6 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const clock = new THREE.Clock();

    // Función de resize actualizada para usar window dimensions
    const onResize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      
      renderer.setSize(W, H);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const target = new THREE.Vector3(0, 40, 80);
    const onPointerMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      target.x = x * 15;
      target.y = 40 + y * 10;
    };
    window.addEventListener("pointermove", onPointerMove);

    let scrollY = 0, current = 0;
    const SPEED_UI = 0.15;
    const FACTOR_UI = 0.25;
    const onScroll = () => { scrollY = window.scrollY || 0; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      const SPEED = 0.35;  // ⬅️ menor = más lento (0.2–0.6)
      uniforms.uTime.value = clock.getElapsedTime() * SPEED;  

      camera.position.x += (target.x - camera.position.x) * 0.05;
      camera.position.y += (target.y - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      current += (scrollY - current) * SPEED_UI;
      const translate = Math.min(current * FACTOR_UI, 120);
      if (uiRef.current) {
        uiRef.current.style.transform = `translate3d(0, ${translate}px, 0)`;
        const fade = Math.max(1 - current / 600, 0);
        uiRef.current.style.opacity = String(fade);
      }

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden bg-black">
      {/* WebGL con altura completa */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* UI */}
      <div ref={uiRef} className="relative z-10 h-full flex items-center justify-center text-center px-6 will-change-transform">
        <div>
          <h1 className=" mt-6 text-5xl md:text-7xl font-display leading-tight">Desarrolla tu mejor versión y domina el <span className="text-white/70 italic">Arte del Trading</span></h1>
          <a href="#contact" className="inline-block mt-8 px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300">
            ¡Quiero más info!
          </a>
        </div>
      </div>
    </section>
  );
}
