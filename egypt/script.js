/* Egypt, in Motion — Live Photo playback
 * data-mode="once": 进入视野播放一次，然后回到照片
 * data-mode="loop": 在视野内循环，离开即暂停
 * data-mode="tap":  只在点击时播放
 * 自动播放失败（微信 / 省电模式等）时，显示 ▶，点 LIVE 或照片即可播放
 */
(function () {
  var lives = [].slice.call(document.querySelectorAll('.live'));
  var reduceEarly = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceEarly) lives.forEach(function (f) { if (f.closest('.body')) f.classList.add('veil'); });
  var isWx = /MicroMessenger/i.test(navigator.userAgent);
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function load(fig) {
    var v = fig.querySelector('video');
    if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.load(); }
    return v;
  }

  function stop(fig) {
    var v = fig.querySelector('video');
    fig.classList.remove('playing');
    if (v && !v.paused) v.pause();
  }

  function play(fig, userInitiated) {
    var v = load(fig);
    if (fig.classList.contains('playing')) return;
    try { v.currentTime = 0; } catch (e) {}
    var go = function () {
      var p = v.play();
      if (p && p.then) {
        p.then(function () {
          fig.classList.add('playing');
          fig.classList.remove('needs-tap');
        }).catch(function () {
          fig.classList.remove('playing');
          if (!userInitiated) fig.classList.add('needs-tap');
        });
      } else {
        fig.classList.add('playing');
      }
    };
    // iOS 微信：在 WeixinJSBridge 回调中调用 play() 可以绕过部分自动播放限制
    if (isWx && window.WeixinJSBridge && !userInitiated) {
      WeixinJSBridge.invoke('getNetworkType', {}, go);
    } else {
      go();
    }
  }

  lives.forEach(function (fig) {
    var v = fig.querySelector('video');
    var mode = fig.dataset.mode || 'once';
    v.muted = true;
    v.setAttribute('muted', '');
    v.loop = mode === 'loop';
    v.addEventListener('ended', function () {
      if (mode !== 'loop') fig.classList.remove('playing');
    });
    v.addEventListener('error', function () { fig.classList.remove('playing'); });
  });

  if (!('IntersectionObserver' in window)) {
    lives.forEach(function (f) { f.classList.add('needs-tap'); });
    return;
  }

  // 1) 提前约一屏开始加载视频
  var preload = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { load(e.target); preload.unobserve(e.target); }
    });
  }, { rootMargin: '600px 0px' });

  // 2) 进入视野 60% 时播放
  var seen = new WeakSet();
  var watch = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var fig = e.target, mode = fig.dataset.mode || 'once';
      fig._vis = e.isIntersecting && e.intersectionRatio >= 0.6;
      if (fig._vis) {
        if (mode === 'tap' || reduce) { fig.classList.add('needs-tap'); return; }
        if (mode === 'once' && seen.has(fig)) return;
        seen.add(fig);
        // 等照片的显露动效走完再播放实况，否则动的那两秒被动效盖住了
        var wait = fig.classList.contains('veil') ? 1500 : 250;
        setTimeout(function () {
          if (fig._vis) play(fig, false); else seen.delete(fig);
        }, wait);
      } else if (!e.isIntersecting || e.intersectionRatio < 0.2) {
        if (mode === 'loop') stop(fig);
      }
    });
  }, { threshold: [0, 0.2, 0.6] });

  lives.forEach(function (f) { preload.observe(f); watch.observe(f); });

  // 3) 段落淡入
  var rev = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  [].forEach.call(document.querySelectorAll('.body > p, .body > blockquote, .intro'), function (el) {
    el.classList.add('reveal'); rev.observe(el);
  });

  // 4) 照片显露动效 + 点开大图
  var veil = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('shown'); veil.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  var figs = document.querySelectorAll('.body .media');
  [].forEach.call(figs, function (f) {
    if (!reduce) { f.classList.add('veil'); veil.observe(f); }
    f.classList.remove('reveal');
  });
  [].forEach.call(document.querySelectorAll('.set, .duo'), function (el) { el.classList.remove('reveal'); });

  var lb = document.createElement('div');
  lb.className = 'lb';
  lb.innerHTML = '<button class="lb-close" aria-label="关闭">×</button><div class="lb-stage"><img alt=""><video muted playsinline webkit-playsinline></video></div><p class="lb-cap"></p><p class="lb-hint">点空白处关闭</p>';
  document.body.appendChild(lb);
  var stage = lb.querySelector('.lb-stage'), lbImg = stage.querySelector('img'), lbVid = stage.querySelector('video'), lbCap = lb.querySelector('.lb-cap');
  lbVid.addEventListener('ended', function () { stage.classList.remove('playing'); });
  function openLb(fig) {
    var img = fig.querySelector('img'), v = fig.querySelector('video'), cap = fig.querySelector('figcaption');
    lbImg.src = img.currentSrc || img.src;
    lbCap.textContent = cap ? cap.textContent : '';
    stage.classList.remove('playing');
    lbVid.removeAttribute('src');
    lb.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    if (v && (v.dataset.src || v.src)) {
      lbVid.src = v.dataset.src || v.src;
      setTimeout(function () {
        var pr = lbVid.play();
        if (pr && pr.then) pr.then(function () { stage.classList.add('playing'); }).catch(function () {});
      }, 380);
    }
  }
  function closeLb() {
    lb.classList.remove('open'); lbVid.pause();
    document.documentElement.style.overflow = '';
  }
  [].forEach.call(figs, function (f) { f.addEventListener('click', function () { openLb(f); }); });
  stage.addEventListener('click', function (e) {
    e.stopPropagation();
    if (lbVid.src) { stage.classList.remove('playing'); try { lbVid.currentTime = 0; } catch (x) {}
      var pr = lbVid.play(); if (pr && pr.then) pr.then(function () { stage.classList.add('playing'); }).catch(function () {}); }
    else closeLb();
  });
  lb.addEventListener('click', closeLb);
  addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });

  // 5) 章节封面的氛围粒子：卢克索热气球 / 红海波光 / 开罗风沙
  function fx(canvas) {
    var kind = canvas.dataset.fx, ctx = canvas.getContext('2d'), W = 0, H = 0, dpr = Math.min(devicePixelRatio || 1, 2);
    var parts = [], running = false, t0 = 0;
    function size() {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    var COLORS = [['#d9573b', '#f2c14e'], ['#2f7f8f', '#f4e3c1'], ['#c2410c', '#fde68a'], ['#7c3aed', '#fbbf24'], ['#16a34a', '#fef3c7']];
    function make(initial) {
      if (kind === 'balloons') return { x: Math.random() * W, y: initial ? Math.random() * H : H + 30,
        r: 6 + Math.random() * 12, v: .12 + Math.random() * .22, ph: Math.random() * 6.3, c: COLORS[(Math.random() * COLORS.length) | 0] };
      if (kind === 'glints') { var g = (Math.random() + Math.random() + Math.random()) / 3;
        return { x: W * (.5 + (g - .5) * 1.6), y: H * (.55 + Math.random() * .42), s: .6 + Math.random() * 1.6, ph: Math.random() * 6.3, sp: 1.5 + Math.random() * 3 }; }
      return { x: initial ? Math.random() * W : -10, y: Math.random() * H, s: .4 + Math.random() * 1.4,
        v: .3 + Math.random() * 1.1, a: .15 + Math.random() * .4, ph: Math.random() * 6.3 };
    }
    function init() { size(); parts = []; var n = kind === 'balloons' ? 9 : kind === 'glints' ? 70 : 110;
      if (W < 500) n = Math.round(n * .7); for (var i = 0; i < n; i++) parts.push(make(true)); }
    function balloon(b, t) {
      var x = b.x + Math.sin(t * .0006 + b.ph) * 6, y = b.y, r = b.r;
      ctx.globalAlpha = .82;
      ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, r * .86, r, 0, 0, Math.PI * 2); ctx.clip();
      for (var k = -3; k <= 3; k++) { ctx.fillStyle = b.c[(k + 3) % 2]; ctx.fillRect(x + k * r * .3 - r * .15, y - r, r * .3, r * 2); }
      ctx.restore();
      ctx.strokeStyle = 'rgba(40,25,10,.6)'; ctx.lineWidth = .6;
      ctx.beginPath(); ctx.moveTo(x - r * .45, y + r * .85); ctx.lineTo(x - r * .18, y + r * 1.35);
      ctx.moveTo(x + r * .45, y + r * .85); ctx.lineTo(x + r * .18, y + r * 1.35); ctx.stroke();
      ctx.fillStyle = '#5b3a1e'; ctx.fillRect(x - r * .2, y + r * 1.35, r * .4, r * .3);
    }
    function frame(t) {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (kind === 'balloons') { p.y -= p.v; if (p.y < -40) parts[i] = make(false); balloon(p, t); }
        else if (kind === 'glints') {
          var a = Math.max(0, Math.sin(t * .001 * p.sp + p.ph)); a = a * a * a;
          if (a < .02) continue;
          ctx.globalAlpha = a * .9; ctx.fillStyle = '#fff3d6';
          var s = p.s * (1 + a); ctx.fillRect(p.x - s * 2.2, p.y - .4, s * 4.4, .8); ctx.fillRect(p.x - .4, p.y - s * 1.2, .8, s * 2.4);
        } else {
          p.x += p.v; p.y += Math.sin(t * .0012 + p.ph) * .25;
          if (p.x > W + 10) parts[i] = make(false);
          ctx.globalAlpha = p.a; ctx.fillStyle = '#f3dcb4';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, 6.3); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
    init(); addEventListener('resize', function () { init(); });
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !running) { running = true; requestAnimationFrame(frame); }
        else if (!e.isIntersecting) running = false;
      });
    }).observe(canvas);
  }
  if (!reduce) [].forEach.call(document.querySelectorAll('canvas.fx'), fx);

  // 6) 顶部进度条 + 当前章节
  var bar = document.querySelector('.progress'), fill = bar.querySelector('.bar'), label = bar.querySelector('.label');
  var cover = document.querySelector('.cover'), chapters = document.querySelectorAll('.chapter, .afterword');
  var ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.classList.toggle('show', y > cover.offsetHeight * .8);
    fill.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    var cur = 'Egypt, in Motion';
    [].forEach.call(chapters, function (c) { if (c.offsetTop - innerHeight * .4 < y) cur = c.dataset.title; });
    if (label.textContent !== cur) label.textContent = cur;
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
})();
