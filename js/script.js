document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('button150');
    const body = document.body;

    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Mode clair';
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Mode clair';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = 'Mode sombre';
            localStorage.setItem('theme', 'light');
        }
    });
});
