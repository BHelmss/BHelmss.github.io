document.addEventListener('DOMContentLoaded', function () {
    // Intro panel transition
    const introPanel = document.querySelector('.intro-panel');
    const scrollButton = document.querySelector('.scroll-btn');

    if (scrollButton) {
        scrollButton.addEventListener('click', function () {
            introPanel.classList.add('hidden');
            setTimeout(() => {
                introPanel.style.display = 'none';
            }, 1000); // Matches the transition duration
        });
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeIcon.className = savedTheme === 'light-mode' ? 'icon-sun' : 'icon-moon';
    }

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                themeIcon.className = 'icon-moon'; // Switch to moon icon
                localStorage.setItem('theme', ''); // Save preference
            } else {
                body.classList.add('light-mode');
                themeIcon.className = 'icon-sun'; // Switch to sun icon
                localStorage.setItem('theme', 'light-mode'); // Save preference
            }
        });
    }

    // Form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields before submitting.');
            } else {
                alert('Thank you for your message, ' + name + '!');
            }
        });
    }

    // Dynamic content loading for portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
        const projects = [
            { title: 'Project 1', description: 'Description of project 1' },
            { title: 'Project 2', description: 'Description of project 2' },
            { title: 'Project 3', description: 'Description of project 3' }
        ];

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            portfolioSection.appendChild(projectElement);
        });
    }

    // Fade-in effect for sections
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach((section) => observer.observe(section));
});