document.addEventListener('DOMContentLoaded', () => {
        const menuButtonToToggle = document.getElementById('menu-button');
        const menuToToggle = document.getElementById('menu');
        const menuBarToToggle = document.getElementsByClassName('menu-bar');

        menuButtonToToggle.addEventListener('click', () => {
            menuToToggle.classList.toggle('open');
            for (var i = 0; i < menuBarToToggle.length; i++) {
                menuBarToToggle[i].classList.toggle('open');
            }
        })
    }
)