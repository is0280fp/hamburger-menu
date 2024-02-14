document.addEventListener('DOMContentLoaded', () => {
        const button = document.querySelector('.menu-button');
        const elementToToggle = document.getElementById('menu');
    
        button?.addEventListener('click', () => {
            elementToToggle.classList.toggle('open');
        })
    }
)