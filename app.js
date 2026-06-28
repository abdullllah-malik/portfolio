(function(){
  var menuBtn = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuOverlay = document.getElementById('menu-overlay');
  function openMenu(){ mobileMenu.classList.add('open'); document.body.style.overflow='hidden'; }
  function closeMenu(){ mobileMenu.classList.remove('open'); document.body.style.overflow=''; }
  menuBtn.addEventListener('click', function(){
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  menuOverlay.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });
  var phrases = [
    'Full-Stack Developer',
    'API Builder',
    'WhatsApp Bot Dev',
    'PHP & Node.js Expert',
    'Android App Dev'
  ];
  var el = document.getElementById('typewriter-text');
  var pi = 0, ci = 0, deleting = false, pause = false;
  function type(){
    if(pause) return;
    var current = phrases[pi];
    if(!deleting){
      el.textContent = current.slice(0, ci+1);
      ci++;
      if(ci === current.length){ pause=true; setTimeout(function(){ pause=false; deleting=true; type(); }, 1800); return; }
    } else {
      el.textContent = current.slice(0, ci-1);
      ci--;
      if(ci === 0){ deleting=false; pi=(pi+1)%phrases.length; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.skill-fill').forEach(function(bar){
            bar.style.width = bar.getAttribute('data-width') + '%';
          });
        }
      });
    }, {threshold:0.12});
    reveals.forEach(function(el){ observer.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('visible'); });
    document.querySelectorAll('.skill-fill').forEach(function(bar){
      bar.style.width = bar.getAttribute('data-width') + '%';
    });
  }
  var header = document.getElementById('site-header');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 20) header.style.top = '.5rem';
    else header.style.top = '1rem';
  });
})();
