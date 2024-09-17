document.addEventListener('DOMContentLoaded', function() {
    const starContainer = document.getElementById('stars-container');
    
  
    function generateStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            

            star.style.left = Math.random() * 100 + 'vw'; 
            star.style.top = Math.random() * 100 + 'vh';
            star.style.animationDuration = Math.random() * 5 + 5 + 's'; 
            
            
            starContainer.appendChild(star);
        }
    }

    
    generateStars(100);
});
