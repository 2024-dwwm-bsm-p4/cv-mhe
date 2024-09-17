document.addEventListener('DOMContentLoaded', function() {
    const starContainer = document.getElementById('stars-container');
    
    // Fonction pour générer des étoiles
    function generateStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Positionnement aléatoire des étoiles
            star.style.left = Math.random() * 100 + 'vw'; // Position horizontale aléatoire
            star.style.top = Math.random() * 100 + 'vh'; // Position verticale initiale aléatoire
            star.style.animationDuration = Math.random() * 5 + 5 + 's'; // Durée d'animation aléatoire entre 5s et 10s
            
            // Ajouter l'étoile au conteneur
            starContainer.appendChild(star);
        }
    }

    // Générer 100 étoiles
    generateStars(100);
});
