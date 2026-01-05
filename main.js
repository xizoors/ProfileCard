const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;
const img = document.getElementById('img');

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

toggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-moon active';
    } else {
        themeIcon.className = 'fa-solid fa-sun'; 
    }
}

window.addEventListener('scroll' , () => {
    if(scrollY > 50){
        img.classList.add('active');
    } else{
        img.classList.remove('active');
    }
})
