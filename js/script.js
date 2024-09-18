document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
    }

    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark');
        
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    });
});
