document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'en';
    
    function getCurrentLanguageFromURL() {
        const path = window.location.pathname;
        return path.startsWith('/pt/') ? 'pt' : 'en';
    }
    
    function switchLanguage(newLang) {
        const currentPath = window.location.pathname;
        const currentLang = getCurrentLanguageFromURL();
        
        let newPath;
        if (newLang === 'pt') {
            if (currentLang === 'en') {
                newPath = currentPath === '/' ? '/pt/' : '/pt' + currentPath;
            } else {
                newPath = currentPath;
            }
        } else {
            if (currentLang === 'pt') {
                newPath = currentPath.replace(/^\/pt/, '') || '/';
            } else {
                newPath = currentPath;
            }
        }
        
        localStorage.setItem('language', newLang);
        window.location.href = newPath;
    }
    
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeIcon.textContent = '☀️';
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    }
    
    function updateLanguageButton() {
        const currentLang = getCurrentLanguageFromURL();
        langText.textContent = currentLang === 'pt' ? 'PT' : 'EN';
    }
    
    applyTheme(savedTheme);
    updateLanguageButton();
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
    
    langToggle.addEventListener('click', function() {
        const currentLang = getCurrentLanguageFromURL();
        const newLang = currentLang === 'en' ? 'pt' : 'en';
        switchLanguage(newLang);
    });
});