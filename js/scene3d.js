/* ─────────────────────────────────────────────────────────────
   NutriLab — product stage
   The bottle floats in a lit scene, capsules and granules
   orbiting it, and the whole thing re-frames as you scroll.
   ───────────────────────────────────────────────────────────── */
(function () {
  var canvas = document.getElementById('capsule-canvas');
  var bottleImg = document.getElementById('bottle-src');
  if (!canvas || typeof THREE === 'undefined') return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var CREAM   = 0xf6f3ee;
  var BONE    = 0xfffdf8;
  var SWEETPEA= 0x9da57b;
  var OLIVE   = 0x6f7a4e;
  var GOLD    = 0xb8924a;

  /* ── renderer ── */
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  var scene  = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 13);

  /* ── studio environment (built in code, no HDR file) ── */
  function studioEnv() {
    var c = document.createElement('canvas');
    c.width = 64; c.height = 256;
    var g = c.getContext('2d');
    var grd = g.createLinearGradient(0, 0, 0, 256);
    grd.addColorStop(0.00, '#ffffff');
    grd.addColorStop(0.42, '#efeade');
    grd.addColorStop(0.58, '#c9c7b6');
    grd.addColorStop(1.00, '#6e6f60');
    g.fillStyle = grd; g.fillRect(0, 0, 64, 256);
    // a soft key highlight band, so the clearcoat has something to catch
    var hi = g.createRadialGradient(32, 56, 2, 32, 56, 40);
    hi.addColorStop(0, 'rgba(255,255,255,1)');
    hi.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = hi; g.fillRect(0, 0, 64, 120);
    var tex = new THREE.CanvasTexture(c);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    var pmrem = new THREE.PMREMGenerator(renderer);
    var env = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose(); tex.dispose();
    return env;
  }
  scene.environment = studioEnv();

  /* ── lights (for the capsules; the bottle keeps its own) ── */
  var key = new THREE.DirectionalLight(0xffffff, 2.1);
  key.position.set(-4, 6, 6);
  scene.add(key);

  var rim = new THREE.DirectionalLight(0xdfe4c8, 1.5);
  rim.position.set(5, 2, -5);
  scene.add(rim);

  scene.add(new THREE.HemisphereLight(0xffffff, CREAM, 0.7));

  var warm = new THREE.PointLight(GOLD, 10, 22, 2);
  warm.position.set(3.2, -2.4, 3.2);
  scene.add(warm);

  var top = new THREE.DirectionalLight(0xffffff, 0.9);   // catches the cap
  top.position.set(0.5, 9, 2);
  scene.add(top);

  /* ── the product ─────────────────────────────────────────────
     The bottle is modelled, not photographed: a lathed HDPE body,
     a ribbed cap and a label wrapped around a cylinder, printed
     from a canvas at full resolution so it stays sharp at any size
     and reads correctly from every angle as it turns.
     ──────────────────────────────────────────────────────────── */
  var R = 1.0;              // body radius
  var Y_BOT = -1.81;        // base
  var Y_TOP = 1.81;         // top of the cap
  var BODY_SHOULDER = 0.80; // where the shoulder starts to draw in
  var NECK_R = 0.80, CAP_R = 0.86;
  var CAP_BOT = 1.24, CAP_EDGE = 1.70;
  var LABEL_TOP = 0.70, LABEL_BOT = -1.56;

  var product = new THREE.Group();
  scene.add(product);
  var bottle = new THREE.Group();
  product.add(bottle);

  function V(x, y) { return new THREE.Vector2(x, y); }

  // bottom → base corner → straight wall → shoulder → neck
  function bodyProfile() {
    var p = [V(0.0001, Y_BOT), V(0.84, Y_BOT)];
    var i, a;
    for (i = 1; i <= 7; i++) {                       // base corner, r 0.16
      a = (Math.PI / 2) * (i / 7);
      p.push(V(0.84 + 0.16 * Math.sin(a), Y_BOT + 0.16 * (1 - Math.cos(a))));
    }
    p.push(V(R, BODY_SHOULDER));
    for (i = 1; i <= 16; i++) {                      // shoulder, quarter ellipse
      a = (Math.PI / 2) * (i / 16);
      p.push(V(NECK_R + (R - NECK_R) * Math.cos(a),
               BODY_SHOULDER + 0.40 * Math.sin(a)));
    }
    p.push(V(NECK_R, 1.42));                         // neck, under the cap
    return p;
  }

  // Lathe profiles run bottom to top: reversed, the faces end up inside out.
  // The crown: up from where the ribs stop, over the rounded edge, to the
  // flat top.
  function capCrown() {
    var p = [V(CAP_R, CAP_EDGE)];
    for (var i = 8; i >= 1; i--) {
      var a = (Math.PI / 2) * (i / 8);
      p.push(V(CAP_R - 0.12 + 0.12 * Math.sin(a), Y_TOP - 0.12 * (1 - Math.cos(a))));
    }
    p.push(V(CAP_R - 0.12, Y_TOP));
    p.push(V(0.0001, Y_TOP));
    return p;
  }
  // the skirt: the bottom edge of the cap, rolled under
  function capSkirt() {
    var p = [V(NECK_R + 0.005, CAP_BOT)];
    for (var i = 5; i >= 1; i--) {
      var a = (Math.PI / 2) * (i / 5);
      p.push(V(CAP_R - 0.05 * (1 - Math.cos(a)), CAP_BOT + 0.05 - 0.05 * Math.sin(a)));
    }
    p.push(V(CAP_R, CAP_BOT + 0.05));
    return p;
  }

  var plasticMat = new THREE.MeshPhysicalMaterial({
    color: 0xF7F3EC, roughness: 0.45, metalness: 0,
    clearcoat: 0.35, clearcoatRoughness: 0.28,
    sheen: 0.25, sheenColor: new THREE.Color(0xfffaf0),
    envMapIntensity: 0.95
  });
  var capMat = plasticMat.clone();
  capMat.roughness = 0.55;
  capMat.clearcoat = 0.18;


  bottle.add(new THREE.Mesh(new THREE.LatheGeometry(bodyProfile(), 128), plasticMat));
  bottle.add(new THREE.Mesh(new THREE.LatheGeometry(capCrown(), 128), capMat));
  bottle.add(new THREE.Mesh(new THREE.LatheGeometry(capSkirt(), 128), capMat));
  // the knurling is cut into the wall rather than faked with a bump map,
  // so it still catches light when the bottle turns
  var wallGeo = new THREE.CylinderGeometry(
    CAP_R, CAP_R, CAP_EDGE - (CAP_BOT + 0.05), 54 * 6, 1, true);
  var pos = wallGeo.attributes.position;
  for (var vi = 0; vi < pos.count; vi++) {
    var vx = pos.getX(vi), vz = pos.getZ(vi);
    var th = Math.atan2(vz, vx);
    var k2 = 1 + 0.016 * Math.cos(th * 54) / CAP_R;
    pos.setXYZ(vi, vx * k2, pos.getY(vi), vz * k2);
  }
  wallGeo.computeVertexNormals();
  var capWall = new THREE.Mesh(wallGeo, capMat);
  capWall.position.y = (CAP_EDGE + CAP_BOT + 0.05) / 2;
  bottle.add(capWall);

  /* ── the label, drawn rather than photographed ── */
  var LABEL_W = 2048, LABEL_H = 734;          // 2048 / 734 ≈ the wrap ratio
  var labelCanvas = document.createElement('canvas');
  labelCanvas.width = LABEL_W; labelCanvas.height = LABEL_H;

  // canvas has no letter-spacing everywhere yet, so set the word by hand
  function track(g, text, cx, y, size, spacing, font, color, align) {
    g.font = font.replace('{s}', size + 'px');
    g.fillStyle = color;
    var i, w = 0;
    for (i = 0; i < text.length; i++) w += g.measureText(text[i]).width + spacing;
    w -= spacing;
    var x = align === 'left' ? cx : cx - w / 2;
    for (i = 0; i < text.length; i++) {
      g.fillText(text[i], x, y);
      x += g.measureText(text[i]).width + spacing;
    }
  }

  function leaf(g, x, y, len, wid, angle) {
    g.save(); g.translate(x, y); g.rotate(angle);
    g.beginPath();
    g.moveTo(0, 0);
    g.quadraticCurveTo(wid, -len * 0.42, 0, -len);
    g.quadraticCurveTo(-wid, -len * 0.42, 0, 0);
    g.fill(); g.restore();
  }

  // The mark: a capsule, filled at the base, with a sprout growing out of it.
  // Both leaves start from the same point on the stem and splay wide, so they
  // read as two leaves rather than one overlapping blob.
  function capsuleMark(g, mx, my, w, h, ink, bg, lw) {
    var r = w / 2;
    function outline() {
      g.beginPath();
      g.moveTo(mx - r, my + h / 2 - r);
      g.lineTo(mx - r, my - h / 2 + r);
      g.arc(mx, my - h / 2 + r, r, Math.PI, 0);
      g.lineTo(mx + r, my + h / 2 - r);
      g.arc(mx, my + h / 2 - r, r, 0, Math.PI);
      g.closePath();
    }
    var fillTop = my + h * 0.06;      // where the powder starts
    var stemTop = my - h * 0.15;
    var joint = stemTop + h * 0.07;   // where the leaves meet the stem

    g.save();
    outline(); g.strokeStyle = ink; g.lineWidth = lw; g.stroke();
    g.save(); outline(); g.clip();
    g.fillStyle = ink; g.fillRect(mx - r, fillTop, w, h);
    g.restore();

    g.lineCap = 'round';
    g.strokeStyle = ink; g.lineWidth = lw * 0.85;
    g.beginPath(); g.moveTo(mx, fillTop); g.lineTo(mx, stemTop); g.stroke();
    g.strokeStyle = bg;                                   // the stem in the powder
    g.beginPath(); g.moveTo(mx, fillTop + h * 0.15); g.lineTo(mx, fillTop); g.stroke();

    g.fillStyle = ink;
    leaf(g, mx, joint, h * 0.21, w * 0.145,  0.95);
    leaf(g, mx, joint, h * 0.21, w * 0.145, -0.95);
    g.restore();
  }

  function drawLabel() {
    var g = labelCanvas.getContext('2d');
    var W = LABEL_W, H = LABEL_H;
    var SANS_L = '300 {s} "Barlow", "Inter", "Helvetica Neue", Arial, sans-serif';
    var SERIF = 'italic {s} Georgia, "Times New Roman", serif';
    var GREEN = '#818B5E';   // lands on #9DA57B once the scene lights it

    g.clearRect(0, 0, W, H);
    g.fillStyle = GREEN;
    g.fillRect(0, 0, W, H);
    var sheen = g.createLinearGradient(0, 0, 0, H);
    sheen.addColorStop(0, 'rgba(255,255,255,0.06)');
    sheen.addColorStop(0.55, 'rgba(255,255,255,0)');
    sheen.addColorStop(1, 'rgba(0,0,0,0.06)');
    g.fillStyle = sheen; g.fillRect(0, 0, W, H);

    // rules that run the whole way round
    g.strokeStyle = 'rgba(255,255,255,0.38)'; g.lineWidth = 2.5;
    g.beginPath(); g.moveTo(0, 38); g.lineTo(W, 38);
    g.moveTo(0, H - 38); g.lineTo(W, H - 38); g.stroke();

    // the front panel
    var pw = 800, cx = W / 2, x0 = cx - pw / 2, x1 = cx + pw / 2;
    g.beginPath(); g.moveTo(x0, 38); g.lineTo(x0, H - 38);
    g.moveTo(x1, 38); g.lineTo(x1, H - 38); g.stroke();

    // a leaf printed large and faint, behind the type and inside the panel
    g.save();
    g.beginPath(); g.rect(x0, 38, pw, H - 76); g.clip();
    g.globalAlpha = 0.09; g.fillStyle = '#ffffff';
    leaf(g, cx + 215, H - 110, 290, 175, 0.35);
    leaf(g, cx + 262, H - 142, 210, 120, -0.15);
    g.restore();

    capsuleMark(g, cx, 196, 96, 184, 'rgba(255,255,255,0.94)', GREEN, 5.5);

    g.textBaseline = 'alphabetic';
    track(g, 'NUTRILAB', cx, 432, 94, 17, SANS_L, 'rgba(255,255,255,0.97)');

    g.font = SERIF.replace('{s}', '40px');
    g.fillStyle = 'rgba(255,255,255,0.82)';
    g.textAlign = 'center';
    g.fillText('One Capsule. Entirely Yours.', cx, 492);
    g.textAlign = 'left';

    track(g, 'PREPARED FOR', cx, 566, 20, 8, SANS_L, 'rgba(255,255,255,0.60)');

    g.strokeStyle = 'rgba(255,255,255,0.40)'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(x0 + 80, 604); g.lineTo(x1 - 80, 604); g.stroke();

    // kept clear of the border rule at H-38; type sitting on a line reads as a strikethrough
    track(g, 'DIETARY SUPPLEMENT', cx, 644, 22, 9, SANS_L, 'rgba(255,255,255,0.90)');
    track(g, '60 CAPSULES', cx, 678, 22, 9, SANS_L, 'rgba(255,255,255,0.90)');

    // The back of the wrap. Its centre falls on the seam, so it is drawn
    // twice, once off each edge, and the halves meet as the bottle turns.
    function back(bx) {
      capsuleMark(g, bx, 210, 54, 104, 'rgba(255,255,255,0.70)', GREEN, 3.5);
      track(g, 'NUTRILAB', bx, 330, 34, 12, SANS_L, 'rgba(255,255,255,0.72)');
      g.strokeStyle = 'rgba(255,255,255,0.30)'; g.lineWidth = 2;
      var i;
      for (i = 0; i < 7; i++) {                 // the quiet side of a label
        var ly = 400 + i * 34;
        g.beginPath();
        g.moveTo(bx - 210, ly);
        g.lineTo(bx + (i % 3 === 2 ? 70 : 210), ly);
        g.stroke();
      }
      track(g, 'COMPOUNDED IN CANADA', bx, 672, 19, 8, SANS_L, 'rgba(255,255,255,0.55)');
    }
    back(0); back(W);
  }

  var labelTex = new THREE.CanvasTexture(labelCanvas);
  labelTex.colorSpace = THREE.SRGBColorSpace;
  labelTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  labelTex.wrapS = THREE.RepeatWrapping;

  function paintLabel() {
    drawLabel();
    labelTex.needsUpdate = true;
  }
  paintLabel();
  // the wordmark is set in Barlow; repaint once the webfont is in
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(paintLabel);
    setTimeout(paintLabel, 1200);
  }

  var labelMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(R * 1.004, R * 1.004, LABEL_TOP - LABEL_BOT, 160, 1, true),
    new THREE.MeshPhysicalMaterial({
      map: labelTex, roughness: 0.80, metalness: 0,
      clearcoat: 0.08, clearcoatRoughness: 0.55, envMapIntensity: 0.5
    })
  );
  labelMesh.position.y = (LABEL_TOP + LABEL_BOT) / 2;
  labelMesh.rotation.y = Math.PI;       // the printed panel faces the camera
  bottle.add(labelMesh);

  // the model stands 3.62 tall; the scene was framed for 4.6
  bottle.scale.setScalar(1.27);
  var BOTTLE_HALF_W = R * 1.27, BOTTLE_HALF_H = Y_TOP * 1.27;

  /* contact shadow, so the bottle sits in the scene rather than on it */
  function shadowTexture() {
    var c = document.createElement('canvas');
    c.width = c.height = 256;
    var g = c.getContext('2d');
    var grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grd.addColorStop(0.00, 'rgba(74,82,48,0.42)');
    grd.addColorStop(0.35, 'rgba(74,82,48,0.20)');
    grd.addColorStop(1.00, 'rgba(74,82,48,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }
  var shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(6.4, 6.4),
    new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = Y_BOT * 1.27 - 0.14;
  shadow.scale.set(1, 0.5, 1);
  shadow.renderOrder = 0;
  product.add(shadow);

  /* ── what's inside it: capsules and granules, in orbit ───────
     The capsule is a lathe, so the pill profile is exact — a
     cylinder closed by two hemispheres, in two overlapping pieces
     the way a real gelatin capsule sits together.
     ──────────────────────────────────────────────────────────── */
  var CR = 1.0, HALF = 1.45, SEG = 48;

  function pillProfile(radius, straight, from, to) {
    var pts = [], steps = 44;
    var topY = straight + radius, botY = -(straight + radius);
    var total = topY - botY;
    for (var i = 0; i <= steps; i++) {
      var t = from + (to - from) * (i / steps);
      var y = topY - total * t, x;
      if (y > straight)       x = Math.sqrt(Math.max(0, radius * radius - (y - straight) * (y - straight)));
      else if (y < -straight) x = Math.sqrt(Math.max(0, radius * radius - (y + straight) * (y + straight)));
      else                    x = radius;
      pts.push(new THREE.Vector2(Math.max(x, 0.0001), y));
    }
    return pts;
  }

  var bodyGeo = new THREE.LatheGeometry(pillProfile(CR, HALF, 0.40, 1.0), SEG);
  var capGeo  = new THREE.LatheGeometry(pillProfile(CR * 1.035, HALF, 0.0, 0.46), SEG);
  var bodyMat = new THREE.MeshPhysicalMaterial({
    color: BONE, roughness: 0.30, metalness: 0.0,
    clearcoat: 1.0, clearcoatRoughness: 0.12,
    envMapIntensity: 1.0, transparent: true, opacity: 1, depthWrite: false
  });
  var capMat = new THREE.MeshPhysicalMaterial({
    color: SWEETPEA, roughness: 0.26, metalness: 0.0,
    clearcoat: 1.0, clearcoatRoughness: 0.10,
    envMapIntensity: 1.1, transparent: true, opacity: 1, depthWrite: false
  });

  function makeCapsule() {
    var g = new THREE.Group();
    g.add(new THREE.Mesh(bodyGeo, bodyMat.clone()));
    g.add(new THREE.Mesh(capGeo, capMat.clone()));
    return g;
  }

  var swarm = new THREE.Group();
  scene.add(swarm);

  var gGeo = new THREE.IcosahedronGeometry(1, 1);
  var palette = [SWEETPEA, OLIVE, GOLD, 0xc3c9a6, BONE];
  var orbit = [];

  for (var i = 0; i < 30; i++) {
    var isCapsule = i % 4 === 1 && orbit.length < 30;   // roughly a quarter
    var mesh, parts;
    if (isCapsule) {
      mesh = makeCapsule();
      parts = mesh.children;
      mesh.scale.setScalar(0.085 + Math.random() * 0.05);
    } else {
      mesh = new THREE.Mesh(gGeo, new THREE.MeshPhysicalMaterial({
        color: palette[i % palette.length],
        roughness: 0.42, clearcoat: 0.8, envMapIntensity: 0.9,
        transparent: true, opacity: 0.9, depthWrite: false
      }));
      parts = [mesh];
      mesh.scale.setScalar(0.045 + Math.random() * 0.07);
    }
    mesh.rotation.z = Math.random() * Math.PI;
    orbit.push({
      mesh: mesh, parts: parts, cap: isCapsule,
      a: (i / 30) * Math.PI * 2 + Math.random(),
      rad: 2.15 + Math.random() * 1.5,
      y: (Math.random() - 0.5) * 5.6,
      spd: 0.05 + Math.random() * 0.14,
      bob: Math.random() * Math.PI * 2,
      spin: new THREE.Vector3(Math.random(), Math.random(), Math.random()).multiplyScalar(0.4)
    });
    swarm.add(mesh);
  }

  function setOpacity(o, v) {
    if (v < 0.04) { o.mesh.visible = false; return; }
    o.mesh.visible = true;
    for (var k = 0; k < o.parts.length; k++) o.parts[k].material.opacity = v;
  }

  /* ── responsive sizing ── */
  // on a phone the product gets its own band at the top of the screen,
  // so it stays centred instead of sitting beside the copy
  var narrow = false;
  function resize() {
    var w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    narrow = window.innerWidth <= 900;
    camera.position.z = narrow ? 11.6 : (w / h < 0.9 ? 17 : 13);
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── input: pointer parallax + scroll framing ── */
  var pointer = { x: 0, y: 0 }, target = { x: 0, y: 0 };
  if (!reduced) {
    window.addEventListener('pointermove', function (e) {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  // progress through the stage: 0 = hero framing, 1 = annotation framing
  var stageProgress = 0;
  function readScroll() {
    var annot = document.getElementById('annotation-stage');
    if (!annot) return;
    var p = 1 - (annot.getBoundingClientRect().top / window.innerHeight);
    stageProgress = Math.max(0, Math.min(1, p));
    document.documentElement.style.setProperty('--annot', stageProgress.toFixed(3));
  }
  window.addEventListener('scroll', readScroll, { passive: true });
  readScroll();

  /* ── loop ── */
  var clock = new THREE.Clock();
  var wp = new THREE.Vector3(), pv = new THREE.Vector3();

  var SPIN_START = -0.28;                 // a slight three-quarter view at rest
  var SPIN_TURN = Math.PI * 2 - 0.5;      // just short of a full turn by the end
  var spinY = SPIN_START;
  function ease(x) { return x * x * (3 - 2 * x); }

  // a point of the scene, in projected coordinates (-1..1 across the frame)
  function ndc(x, y, z) {
    return pv.set(x, y, z).project(camera);
  }

  function frame() {
    var dt = Math.min(clock.getDelta(), 0.05);
    var t = clock.getElapsedTime();
    var i, o;

    if (!reduced) {
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;
    }

    var p = stageProgress;

    // hero framing stands the bottle to the right of the copy;
    // the annotation framing brings it centred and smaller so the
    // four callouts have room to breathe
    product.position.x = narrow ? 0 : 2.35 * (1 - p);
    product.position.y = Math.sin(t * 0.6) * 0.08 - 0.1 * p;
    product.rotation.x = pointer.y * 0.07 * (1 - p);
    product.rotation.z = (narrow ? 0.015 : 0.03) * (1 - p);
    product.scale.setScalar(narrow ? 1.04 : 1 - 0.22 * p);

    // the bottle turns as the page moves: very nearly one full
    // revolution between the hero and the annotations, eased so it
    // settles label-forward at both ends rather than stopping dead
    var want = SPIN_START + ease(p) * SPIN_TURN + pointer.x * 0.22;
    spinY += (want - spinY) * (reduced ? 1 : 0.12);
    bottle.rotation.y = spinY;

    shadow.material.opacity = 0.9 - 0.3 * p;

    // the swarm hugs the bottle rather than drifting across the copy
    swarm.position.x = product.position.x + (narrow ? 0 : 0.45 * (1 - p));
    swarm.position.y = product.position.y * 0.5;
    swarm.rotation.y = pointer.x * 0.1;

    for (var i = 0; i < orbit.length; i++) {
      var o = orbit[i];
      o.a += dt * o.spd * (reduced ? 0 : 1);
      var rr = o.rad * (1 - 0.14 * p);
      o.mesh.position.set(
        Math.cos(o.a) * rr,
        o.y + Math.sin(t * 0.5 + o.bob) * 0.16,
        Math.sin(o.a) * rr * 0.62
      );
      o.mesh.rotation.x += o.spin.x * dt;
      o.mesh.rotation.y += o.spin.y * dt;
    }

    camera.position.y = -pointer.y * 0.3;
    camera.lookAt(product.position.x * 0.5, 0, 0);

    /* What covers what is a question about the picture, not about the
       scene: a granule far to the side but close to the lens still
       lands on the label. So the fades below are worked out on the
       projected frame, once the camera is where it is going to be. */
    scene.updateMatrixWorld(true);
    camera.updateMatrixWorld();

    var ps = product.scale.x;
    var halfW = BOTTLE_HALF_W * ps;
    var halfH = BOTTLE_HALF_H * ps;
    var cam = camera.position;
    // where the hero copy ends, in projected coordinates
    var copyEdge = ndc(-0.6, 0, 0).x;

    for (i = 0; i < orbit.length; i++) {
      o = orbit[i];
      o.mesh.getWorldPosition(wp);
      var gx = wp.x, gy = wp.y, gz = wp.z;
      var op = (o.cap ? 0.95 : 0.85) - 0.6 * p;

      // Follow the ray from the lens through this piece down to the plane
      // the bottle stands on. If it crosses that plane inside the label,
      // the piece is in the way of the product and steps aside — in front
      // of it or behind it, since behind is hidden by the bottle anyway.
      var k = cam.z / (cam.z - gz);
      if (k > 1) {
        var hx = Math.abs(cam.x + k * (gx - cam.x) - product.position.x);
        var hy = Math.abs(cam.y + k * (gy - cam.y) - product.position.y);
        var ix = 1 - Math.max(0, Math.min(1, (hx - halfW * 1.12) / 0.7));
        var iy = 1 - Math.max(0, Math.min(1, (hy - halfH * 1.06) / 0.7));
        op *= 1 - 0.995 * ix * iy;
      }

      // on the hero, anything swinging over the headline fades away
      if (!narrow) {
        wp.project(camera);
        var f = Math.max(0, Math.min(1, (wp.x - copyEdge) / 0.14));
        op *= f + (1 - f) * p;
      }
      setOpacity(o, op);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  frame();

  // the flat bottle can go once WebGL is actually drawing
  document.documentElement.classList.add('has-3d');
})();
