document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startButton');
  const restartContainer = document.getElementById('restartContainer');
  const sections = Array.from(document.querySelectorAll('#demoContent .section'));

  // Reveal sections sequentially (shows/hides spinner and displays content)
  startBtn?.addEventListener('click', async () => {
    startBtn.disabled = true;
    startBtn.classList.add('opacity-70');
    let delay = 700;
    for (const s of sections) {
      const spinner = s.querySelector('.loading-spinner-container');
      const hidden = s.querySelector('.hidden-content');
      if (spinner) spinner.style.display = 'flex';
      await new Promise(r => setTimeout(r, delay));
      if (spinner) spinner.style.display = 'none';
      s.classList.add('active');
      if (hidden) hidden.style.display = 'block';
      // reduce delay slightly for subsequent sections
      delay = Math.max(400, delay - 150);
      // allow a tiny pause so UI feels fluent
      await new Promise(r => setTimeout(r, 200));
    }
    if (restartContainer) restartContainer.style.display = 'block';
  });

  // Chat FAB toggle + simple local demo responses
  const fab = document.getElementById('chat-fab');
  const chatWindow = document.getElementById('chat-window');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatHistory = document.getElementById('chat-history');

  fab?.addEventListener('click', () => {
    if (!chatWindow) return;
    const isOpen = getComputedStyle(chatWindow).display === 'flex';
    chatWindow.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) chatInput?.focus();
  });

  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!chatInput || !chatHistory) return;
    const text = chatInput.value.trim();
    if (!text) return;
    const user = document.createElement('div');
    user.textContent = text;
    user.className = 'mb-2 text-sm text-right';
    chatHistory.appendChild(user);

    const bot = document.createElement('div');
    bot.textContent = 'Procesando...';
    bot.className = 'mb-2 text-sm text-left text-gray-300';
    chatHistory.appendChild(bot);

    chatInput.value = '';
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Demo response (replace with real API integration)
    setTimeout(() => {
      bot.textContent = 'Respuesta de ejemplo (local). Integra tu backend/API aquí.';
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 800);
  });
});
