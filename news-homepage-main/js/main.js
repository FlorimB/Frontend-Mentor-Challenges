document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar-container').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.navbar-container').style.display = 'none';
});

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    const navbarContainer = document.querySelector('.navbar-container');

    if (screenWidth > 530) {
        navbarContainer.style.display = 'flex'; // Change display to 'flex'
    } else {
        navbarContainer.style.display = 'none';
    }
});
