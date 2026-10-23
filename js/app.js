document.addEventListener('DOMContentLoaded', () => {
  // Menu responsivo
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  function closeMenu() {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Flashcards: clique para revelar/esconder resposta
  document.querySelectorAll('.flashcard').forEach((card) => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  // PWA: install
  const installBtn = document.getElementById('installBtn');
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    if (installBtn) installBtn.hidden = false;
  });

  window.addEventListener('appinstalled', () => {
    if (installBtn) installBtn.hidden = true;
    deferredPrompt = null;
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
      }
      installBtn.hidden = true;
    });
  }

  // Indicador de conteudo offline
  const offlineBanner = document.getElementById('offlineBanner');

  function updateOnlineState() {
    const offline = !navigator.onLine;
    if (offlineBanner) offlineBanner.hidden = !offline;
    document.body.classList.toggle('is-offline', offline);
  }

  window.addEventListener('online', updateOnlineState);
  window.addEventListener('offline', updateOnlineState);
  updateOnlineState();

  // Service worker (cache da interface)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
});
