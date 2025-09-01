// This file contains the JavaScript code for the website. 
// It may include functionality for interactive elements and dynamic content loading.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a responsive navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Example of dynamically loading content
    const loadContentButton = document.querySelector('.load-content');
    const contentArea = document.querySelector('.content-area');

    loadContentButton.addEventListener('click', function() {
        fetch('src/components/content.html')
            .then(response => response.text())
            .then(data => {
                contentArea.innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    });
});