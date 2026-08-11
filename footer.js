// ============ SHARED FOOTER BEHAVIOR ============
(function () {
  const container = document.getElementById('footerCharacter');
  const bubble = document.getElementById('footerSpeechBubble');

  function playBye(navigateTo) {
    if (!container) return;
    container.style.animationPlayState = 'paused';
    bubble.style.opacity = '1';
    setTimeout(() => {
      bubble.style.opacity = '0';
      container.style.animationPlayState = 'running';
      if (navigateTo) window.location.href = navigateTo;
    }, 1200);
  }

  if (container) {
    container.addEventListener('click', () => playBye(null));
  }

  document.querySelectorAll('.footer-grid a[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      playBye(link.getAttribute('href'));
    });
  });

  // Real visitor counter using the free CountAPI service (countapi.xyz).
  // Namespace + key together form a unique global counter for this site.
  // Swap 'shivam-pandey-portfolio' for something unique to you if you fork this.
  const counterEl = document.getElementById('visitorCount');
  if (counterEl) {
    fetch('https://api.countapi.xyz/hit/shivam-pandey-portfolio/site-visits')
      .then(res => res.json())
      .then(data => {
        counterEl.textContent = data.value.toLocaleString();
      })
      .catch(() => {
        counterEl.textContent = '—';
      });
  }
})();
