/* Egypt, in Motion — Live Photo playback
 * data-mode="once": 进入视野播放一次，然后回到照片
 * data-mode="loop": 在视野内循环，离开即暂停
 * data-mode="tap":  只在点击时播放
 * 自动播放失败（微信 / 省电模式等）时，显示 ▶，点 LIVE 或照片即可播放
 */
(function () {
  var lives = [].slice.call(document.querySelectorAll('.live'));
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
      if (e.isIntersecting && e.intersectionRatio >= 0.6) {
        if (mode === 'tap' || reduce) { fig.classList.add('needs-tap'); return; }
        if (mode === 'once' && seen.has(fig)) return;
        seen.add(fig);
        setTimeout(function () { play(fig, false); }, 250);
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

  // 5) 顶部进度条 + 当前章节
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
