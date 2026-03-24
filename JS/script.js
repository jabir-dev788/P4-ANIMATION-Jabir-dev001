// Theme toggle logic
window.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if(themeIcon) themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    };
    // Initial theme
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light'));
    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // Hamburger menu logic
    const menuButton = document.querySelector('.menu-button');
    const nav = document.getElementById('main-nav');
    function handleResize() {
        if (window.innerWidth >= 768) {
            nav && nav.classList.remove('open');
            menuButton && menuButton.setAttribute('aria-expanded', 'false');
        }
    }
    if(menuButton && nav) {
        menuButton.addEventListener('click', () => {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', (!expanded).toString());
            nav.classList.toggle('open');
        });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
});
