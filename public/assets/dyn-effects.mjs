/* dyn-effects.mjs
   Module to initialize dynamic gradients, reveals, parallax and tilt.
   Usage: <script type="module" src="/assets/dyn-effects.mjs"></script>
*/

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function safeQuery(selector) { 
  try { 
    return Array.from(document.querySelectorAll(selector)); 
  } catch(e) { 
    console.info(`Selector "${selector}" not found or invalid`);
    return []; 
  } 
}

/* LERP helper */
const lerp = (a,b,n) => a + (b-a) * (n || 0.12);

/* --- Gradient animation (mouse + idle) --- */
function initDynamicGradient(rootSelector = '.hero-section') {
  if (REDUCED) return;
  
  const root = document.querySelector(rootSelector);
  if (!root) {
    console.info('Hero section not found for dynamic gradient');
    return;
  }

  // Check if gradient already exists
  let grad = root.querySelector('.dyn-gradient');
  if (!grad) {
    grad = document.createElement('div');
    grad.className = 'dyn-gradient';
    grad.setAttribute('aria-hidden','true');
    // Insert as first child so content overlays it
    root.insertBefore(grad, root.firstChild);
  }

  let tx = 50, ty = 40, tx2 = 60, ty2 = 70;
  let targetX = tx, targetY = ty, targetX2 = tx2, targetY2 = ty2;
  let raf = null;

  function onPointerMove(e){
    const rect = root.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    targetX = Math.max(10, Math.min(90, x));
    targetY = Math.max(10, Math.min(90, y));
    targetX2 = Math.max(10, Math.min(90, x + 20));
    targetY2 = Math.max(10, Math.min(90, y + 20));
    startRAF();
  }

  function animate() {
    tx = lerp(tx, targetX, 0.14);
    ty = lerp(ty, targetY, 0.14);
    tx2 = lerp(tx2, targetX2, 0.06);
    ty2 = lerp(ty2, targetY2, 0.06);
    grad.style.setProperty('--dyn-x', tx + '%');
    grad.style.setProperty('--dyn-y', ty + '%');
    grad.style.setProperty('--dyn-x2', tx2 + '%');
    grad.style.setProperty('--dyn-y2', ty2 + '%');
    raf = requestAnimationFrame(animate);
  }
  
  function startRAF(){ 
    if(!raf) raf = requestAnimationFrame(animate); 
  }
  
  function stopRAF(){ 
    if(raf){ 
      cancelAnimationFrame(raf); 
      raf = null; 
    } 
  }

  root.addEventListener('pointermove', onPointerMove, {passive:true});
  root.addEventListener('mouseleave', ()=>{ 
    targetX = 50; targetY = 40; targetX2=60; targetY2=70; 
    startRAF();
  });

  // Gentle idle motion
  let t = 0;
  (function idleTick(){
    if (REDUCED) return;
    t += 0.003;
    targetX = 50 + Math.sin(t) * 8;
    targetY = 40 + Math.cos(t*0.9) * 8;
    targetX2 = 60 + Math.sin(t*1.2) * 6;
    targetY2 = 70 + Math.cos(t*0.7) * 6;
    startRAF();
    setTimeout(idleTick, 2000);
  })();
}

/* --- Reveal on scroll (staggered) --- */
function initReveal(selector = '.dyn-reveal') {
  if (REDUCED) {
    safeQuery(selector).forEach(el => el.classList.add('in-view'));
    return;
  }
  
  const els = safeQuery(selector);
  if (!els.length) {
    console.info('No elements found for reveal animation');
    return;
  }
  
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('in-view'));
    return;
  }
  
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      
      // Handle stagger children
      if (el.classList.contains('dyn-stagger')) {
        el.classList.add('in-view');
      } else {
        el.classList.add('in-view');
      }
      
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  
  els.forEach(e => io.observe(e));
}

/* --- Parallax on scroll for elements with data-dyn-parallax --- */
function initParallax() {
  if (REDUCED) return;
  
  const els = safeQuery('[data-dyn-parallax]');
  if (!els.length) {
    console.info('No elements found for parallax');
    return;
  }
  
  let last = 0;
  let ticking = false;
  
  function tick(){
    if (!document.contains(els[0])) return;
    
    const scrollY = window.scrollY || window.pageYOffset;
    if (Math.abs(scrollY - last) < 1) { 
      ticking = false;
      return; 
    }
    
    last = scrollY;
    const vw = window.innerHeight;
    
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      const offset = parseFloat(el.dataset.dynParallax) || 10;
      
      // Only apply parallax if element is in viewport
      if (rect.bottom >= 0 && rect.top <= vw) {
        const progress = (rect.top - vw/2) / (vw/2);
        const translateY = -progress * offset;
        el.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    });
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(tick);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick, {passive: true});
  requestTick(); // Initial call
}

/* --- Tilt (3D) for elements with .dyn-tilt --- */
function initTilt(selector = '.dyn-tilt') {
  if (REDUCED) return;
  
  const els = safeQuery(selector);
  if (!els.length) {
    console.info('No elements found for tilt effect');
    return;
  }
  
  els.forEach(el => {
    let raf = null;
    let tx = 0, ty = 0, targetX = 0, targetY = 0;
    
    function onMove(e){
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;
      const dx = (e.clientX - cx) / (rect.width/2);
      const dy = (e.clientY - cy) / (rect.height/2);
      
      // Clamp values
      targetX = Math.max(-1, Math.min(1, dy));
      targetY = Math.max(-1, Math.min(1, dx));
      
      if (!raf) raf = requestAnimationFrame(frame);
    }
    
    function frame(){
      tx = lerp(tx, targetX, 0.16);
      ty = lerp(ty, targetY, 0.16);
      const rx = tx * 8; // rotateX degrees
      const ry = ty * 10; // rotateY degrees
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      raf = null;
    }
    
    function reset(){ 
      targetX = 0; 
      targetY = 0; 
      el.style.transition = 'transform 400ms cubic-bezier(.2,.8,.2,1)'; 
      setTimeout(()=>el.style.transition='', 400);
    }
    
    el.addEventListener('pointermove', onMove, {passive:true});
    el.addEventListener('pointerleave', reset);
  });
}

/* --- Header blur on scroll --- */
function initHeader(headerSelector = '.dyn-header') {
  const header = document.querySelector(headerSelector);
  if (!header) {
    console.info('Header not found for glass effect');
    return;
  }
  
  let ticking = false;
  
  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.add('dyn-header--scrolled');
    } else {
      header.classList.remove('dyn-header--scrolled');
    }
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }
  
  updateHeader(); // Initial call
  window.addEventListener('scroll', requestTick, {passive:true});
}

/* --- Enhanced glassmorphism for existing cards --- */
function enhanceGlassCards() {
  const cards = safeQuery('.glass-card');
  cards.forEach(card => {
    if (!card.classList.contains('dyn-enhanced')) {
      card.classList.add('dyn-enhanced');
    }
  });
}

/* --- Init entrypoint --- */
function initDynEffects(opts = {}) {
  console.info('🎨 Initializing dynamic effects...');
  
  document.documentElement.classList.add('dyn-effects-ready');
  
  // Initialize all effects
  initDynamicGradient(opts.heroSelector || '.hero-section');
  initReveal(opts.revealSelector || '.dyn-reveal');
  initParallax();
  initTilt(opts.tiltSelector || '.dyn-tilt');
  initHeader(opts.headerSelector || '.dyn-header');
  enhanceGlassCards();
  
  console.info('✨ Dynamic effects initialized');
}

/* Auto-init when DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDynEffects);
} else {
  initDynEffects();
}

export default initDynEffects;