// About Me 页面增强交互效果

document.addEventListener('DOMContentLoaded', function() {
  
  // 滚动触发动画
  function initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // 观察所有需要滚动触发的元素
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });
  }

  // 鼠标跟随效果
  function initMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    follower.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      mix-blend-mode: difference;
    `;
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
      follower.style.left = e.clientX - 10 + 'px';
      follower.style.top = e.clientY - 10 + 'px';
    });

    // 鼠标悬停在可交互元素上时放大
    document.querySelectorAll('a, button, .interactive').forEach(el => {
      el.addEventListener('mouseenter', () => {
        follower.style.transform = 'scale(2)';
      });
      el.addEventListener('mouseleave', () => {
        follower.style.transform = 'scale(1)';
      });
    });
  }

  // 粒子背景效果
  function initParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.3;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(createParticle());
      }
    }

    function updateParticles() {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });

      // 连接近距离的粒子
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
    }

    function animate() {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // 页面隐藏时停止动画
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });
  }

  // 文字打字机效果
  function initTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach((element, index) => {
      const text = element.textContent;
      element.textContent = '';
      element.style.borderRight = '2px solid currentColor';
      
      setTimeout(() => {
        let i = 0;
        const timer = setInterval(() => {
          element.textContent += text[i];
          i++;
          if (i >= text.length) {
            clearInterval(timer);
            setTimeout(() => {
              element.style.borderRight = 'none';
            }, 1000);
          }
        }, 100);
      }, index * 1000);
    });
  }

  // 3D 倾斜效果
  function init3DTilt() {
    const tiltElements = document.querySelectorAll('.tilt-effect');
    
    tiltElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -10;
        const rotateY = (x - centerX) / centerX * 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  // 颜色主题切换动画
  function initThemeTransition() {
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
      }
    `;
    document.head.appendChild(style);
  }

  // 滚动进度指示器
  function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      z-index: 9999;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    });
  }

  // 懒加载图片增强
  function initLazyLoadEnhancement() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.style.animation = 'fadeInUp 0.6s ease-out';
      });
    });
  }

  // 平滑滚动增强
  function initSmoothScrollEnhancement() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // 初始化所有效果
  function initAllEffects() {
    initScrollReveal();
    initMouseFollower();
    initParticleBackground();
    initTypewriter();
    init3DTilt();
    initThemeTransition();
    initScrollProgress();
    initLazyLoadEnhancement();
    initSmoothScrollEnhancement();
  }

  // 性能优化：根据设备性能决定是否启用某些效果
  function initWithPerformanceCheck() {
    const isHighPerformance = window.navigator.hardwareConcurrency > 4 && 
                             window.devicePixelRatio <= 2;
    
    // 基础效果总是启用
    initScrollReveal();
    initTypewriter();
    initThemeTransition();
    initScrollProgress();
    initLazyLoadEnhancement();
    initSmoothScrollEnhancement();
    
    // 高性能设备启用更多效果
    if (isHighPerformance) {
      initMouseFollower();
      initParticleBackground();
      init3DTilt();
    }
  }

  // 启动
  initWithPerformanceCheck();

  // 添加页面加载完成的类
  setTimeout(() => {
    document.body.classList.add('page-loaded');
  }, 100);
});

// 导出函数供外部使用
window.AboutMeEnhanced = {
  // 可以添加一些公共方法
  refreshAnimations: function() {
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      el.classList.remove('revealed');
    });
    // 重新初始化滚动动画
    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('revealed');
        }
      });
    }, 100);
  }
};

