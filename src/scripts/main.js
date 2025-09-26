document.addEventListener('DOMContentLoaded', () => {
    const planetsContainer = document.getElementById('planets-container');

    fetch('components/planets.html')
        .then(response => response.text())
        .then(data => {
            planetsContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading planets:', error);
        });

    const animateElements = () => {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(element => {
            element.classList.add('fade-in');
        });
    };

    window.addEventListener('load', () => {
        animateElements();
    });
});