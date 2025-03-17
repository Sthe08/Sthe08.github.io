// Skills Data
const skills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 85 },
    { name: "Javascript", value: 80 },
    { name: "React", value: 85 },
    { name: "Next JS", value: 80 },
    { name: "Tailwind CSS", value: 85 },
    { name: "Git", value: 75 },
    { name: "Figma", value: 70 },
    { name: "Adobe Xd", value: 65 },
    { name: "Redux", value: 70 },
    { name: "React Native", value: 60 }
];

// Projects Data
const projects = [
    {
        title: "J Plus",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20190425-Pt3r9wlp6NoMeIHh1F0gjhxoz071OD.png",
        description: "Jplus is a specialized job search and recruitment platform that connects Myanmar job seekers with employment opportunities in Japan."
    },
    {
        title: "Premio Plus",
        image: "placeholder.jpg",
        description: "Premio Plus is a basic movie streaming site that offers a selection of films for users looking for simple, straightforward entertainment."
    },
    {
        title: "Hotale",
        image: "placeholder.jpg",
        description: "Hotale provides a comprehensive hotel booking service that allows you to find and reserve accommodations effortlessly."
    },
    {
        title: "Azure Luxe",
        image: "placeholder.jpg",
        description: "A sophisticated hotel booking platform built using React, designed to offer users an effortless and enjoyable experience when exploring and reserving accommodations."
    },
    {
        title: "Good Food Restaurant",
        image: "placeholder.jpg",
        description: "A modern restaurant website with online ordering capabilities and a responsive design for optimal viewing on all devices."
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSkills();
    initializeProjects();
    initializeNavigation();
});

// Initialize Skills Section
function initializeSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        
        // Create circular progress bar
        const progress = document.createElement('div');
        progress.className = 'skill-progress';
        progress.innerHTML = `
            <svg viewBox="0 0 36 36" class="circular-chart">
                <path d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#2D3748"
                    stroke-width="3"
                />
                <path d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3B82F6"
                    stroke-width="3"
                    stroke-dasharray="${skill.value}, 100"
                />
                <text x="18" y="20.35" class="percentage">${skill.value}%</text>
            </svg>
        `;
        
        const name = document.createElement('span');
        name.textContent = skill.name;
        
        skillElement.appendChild(progress);
        skillElement.appendChild(name);
        skillsGrid.appendChild(skillElement);
    });
}

// Initialize Projects Section
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        projectsGrid.appendChild(projectElement);
    });
}

// Smooth Scrolling Navigation
function initializeNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 11, 30, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 11, 30, 0.8)';
    }
});

// Skill Filter Functionality
document.querySelectorAll('.skill-filters button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.skill-filters button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Here you can add filter functionality if needed
    });
});

// Add animation on scroll
function reveal() {
    const reveals = document.querySelectorAll('.service-card, .project-card, .skill-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);