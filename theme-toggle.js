// Theme Toggle Styles
const themeStyles = `
  .theme-toggle {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--accent-color);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }
  
  [data-theme="light"] .theme-toggle {
    background: var(--text-color-dark);
    color: white;
  }
  
  [data-theme="dark"] .theme-toggle {
    background: #ffd700;
    color: #1a1a1a;
  }
  
  /* Smooth transition for theme changes */
  body {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  /* Override existing dark mode detection with manual control */
  [data-theme="dark"] {
    --background-color: #19182b;
    --foreground-color: rgba(0, 0, 0, 0.3);
    --text-color-dark: rgba(255, 255, 255, 1);
    --text-color: rgba(255, 255, 255, .85);
    --text-color-light: rgba(255, 255, 255, .7);
    --accent-color-dark: #b91d1d;
    --accent-color: #ff4343;
    --accent-color-light: #ff78781a;
    --overlay-color: rgba(0, 0, 0, .2);
    --overlay-edge-color: rgba(255, 255, 255, .2);
  }
  
  [data-theme="light"] {
    --background-color: #fff4ed;
    --foreground-color: #240909;
    --text-color-dark: #052840;
    --text-color: #02395E;
    --text-color-light: #999;
    --accent-color-dark: #940f0f;
    --accent-color: #fd4a4a;
    --accent-color-light: rgb(0 22 216 / 10%);
    --overlay-color: rgba(255, 255, 255, .8);
    --overlay-edge-color: rgba(0, 0, 0, .08);
  }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = themeStyles;
document.head.appendChild(styleSheet);

// Add toggle button to body
const toggleButton = document.createElement('button');
toggleButton.className = 'theme-toggle';
toggleButton.id = 'themeToggle';
toggleButton.setAttribute('aria-label', 'Toggle dark mode');
toggleButton.innerHTML = '<span id="themeIcon">🌙</span>';
document.body.appendChild(toggleButton);

// Theme Toggle Functionality
(function() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
  
  // Toggle theme
  themeToggle.addEventListener('click', function() {
    const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
})();