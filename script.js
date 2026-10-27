const projects = {
    cafe: {
        title: '3D Isometric Cafe',
        date: '2025.12',
        description: 'A stylized 3D isometric cafe created with a soft, cozy aesthetic.',

        thumbnail: 'assets/images/cafe.png',

        images: [
            'assets/images/cafe_4.png',
            'assets/images/cafe_1.png',
            'assets/images/cafe_2.png',
            'assets/images/cafe_3.png'
        ]
    },

    scillica: {
        title: 'Re:Scillica Environment',
        date: '2026.10.10',
        description: 'An environment created using a modular design system, featuring three distinct levels.',

        thumbnail: 'assets/images/environment.png',

        images: [
            'assets/images/ev1.png',
            'assets/images/ev2.png',
            'assets/images/ev3.png',
        ]
    },

    inova: {
        title: 'INOVA Equipment',
        date: '2026.10.10',
        description: 'Participated in a service-learning project with VSGI, creating 3D medical equipment for a training simulation.',

        thumbnail: 'assets/images/inova.png',

        images: [
            'assets/images/inova1.png',
            'assets/images/inova.png',
        ]
    },

    'self-portrait': {
        title: 'Self-Portrait',

        description: 'Created a 3D self-portrait through modeling, retopology, UV mapping, and texturing.',

        thumbnail: 'assets/images/portrait.png',

        images: [
            'assets/images/pt1.png',
            'assets/images/pt2.png',
            'assets/images/portrait.png',
            'assets/images/pt3.png'
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
const projectGallery = document.getElementById('project-gallery');

if (projectTitle && projectDate && projectDescription) {
    const params = new URLSearchParams(window.location.search);
    const projectKey = params.get('project') || 'cafe';
    const activeProject = projects[projectKey] || projects.cafe;

    // 프로젝트 정보
    projectTitle.textContent = activeProject.title;
    projectDate.textContent = activeProject.date;
    projectDescription.textContent = activeProject.description;

    // 프로젝트 갤러리
    if (projectGallery && activeProject.images) {
        activeProject.images.forEach((imageSrc, index) => {
            const image = document.createElement('img');

            image.className = 'project-image';
            image.src = imageSrc;
            image.alt = `${activeProject.title} image ${index + 1}`;

            projectGallery.appendChild(image);
        });
    }
}
