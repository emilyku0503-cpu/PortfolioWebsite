const projects = {
    cafe: {
        title: '3D Isometric Cafe',
        date: '2026.10.10',
        description: 'describe',

        thumbnail: 'assets/images/cafe.png',

        images: [
            'assets/images/cafe-01.png',
            'assets/images/cafe-02.png',
            'assets/images/cafe-03.png'
        ]
    },

    scillica: {
        title: 'Re:Scillica Environment',
        date: '2026.10.10',
        description: 'describe',

        thumbnail: 'assets/images/environment.png',

        images: [
            'assets/images/scillica-01.png',
            'assets/images/scillica-02.png',
            'assets/images/scillica-03.png'
        ]
    },

    inova: {
        title: 'INOVA Equipment',
        date: '2026.10.10',
        description: 'describe',

        thumbnail: 'assets/images/inova.png',

        images: [
            'assets/images/inova-01.png',
            'assets/images/inova-02.png',
            'assets/images/inova-03.png'
        ]
    },

    'self-portrait': {
        title: 'Self-Portrait',
        date: '2026.10.10',
        description: 'describe',

        thumbnail: 'assets/images/portrait.png',

        images: [
            'assets/images/portrait-01.png',
            'assets/images/portrait-02.png',
            'assets/images/portrait-03.png'
        ]
    }
};

// Homepage card titles
document.querySelectorAll('[data-project-title]').forEach((element) => {
    const projectKey = element.dataset.projectTitle;
    const project = projects[projectKey];

    if (project) {
        element.textContent = project.title;
    }
});

// Homepage card images
document.querySelectorAll('[data-project-image]').forEach((element) => {
    const projectKey = element.dataset.projectImage;
    const project = projects[projectKey];

    if (project) {
        element.src = project.thumbnail;
        element.alt = project.title;
    }
});

document.querySelectorAll('.card-title[data-project]').forEach((cardTitle) => {
    const projectKey = cardTitle.dataset.project;
    const project = projects[projectKey];

    if (project) {
        cardTitle.textContent = project.title;
    }
});

const projectTitle = document.getElementById('project-title');
const projectDate = document.querySelector('.project-date');
const projectDescription = document.querySelector('.project-description');

if (projectTitle && projectDate && projectDescription) {
    const params = new URLSearchParams(window.location.search);
    const projectKey = params.get('project') || 'cafe';
    const activeProject = projects[projectKey] || projects.cafe;

    projectTitle.textContent = activeProject.title;
    projectDate.textContent = activeProject.date;
    projectDescription.textContent = activeProject.description;
}
