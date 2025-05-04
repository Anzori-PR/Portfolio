AOS.init(
  {once: true}
);


const navbar = document.querySelector('.custom-navbar');
const navbarLogo = document.querySelector('.logo');
const navbarLinks = document.querySelectorAll('.link');
const burgerm = document.querySelector('.burgerm');
const navbarHeight = 20;

window.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('fixednav');
    navbarLogo.style.color = "#695aa6";
    navbarLinks.forEach(link => {
      link.style.color = "#6c757d";
    });
    burgerm.style.color = "#6c757d";
  } else {
    navbar.classList.remove('fixednav');
    navbarLogo.style.color = "white";
    navbarLinks.forEach(link => {
      link.style.color = "White";
    });
    burgerm.style.color = "white";
  }
});


const projects = [
  {
    name: "Geo-Jobs",
    description: "Geo-Jobs is a user-friendly job search platform designed to help you find job opportunities in Georgia! 🚀",
    image: "./assets/project/geo-jobs.png",
    link: "https://geo-jobss.vercel.app/Dashboard",
    technologies: ["Angular", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    name: "Ecommerce-JS",
    description: "Welcome to my E-commerce Website project repository! This project aims to create a simple e-commerce website using HTML, CSS, and JavaScript. 🛒💻",
    image: "./assets/project/shopper.png",
    link: "https://anzori-pr.github.io/Ecommerce-JS/index.html",
    technologies: ["HTML", "CSS", "JavaScript", "firebase"],
  },
  {
    name: "ExploreEra",
    description: "ExploreEra is a fictional travel website that allows users to discover and book unique travel experiences around the world. 🌍✈️",
    image: "./assets/project/ExploreEra.png",
    link: "https://anzori-pr.github.io/Unilab-Project/Home/index.html",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    name: "Online Store",
    description: "This is a simple eCommerce website project built with Angular. It features a front-end interface for browsing products, adding them to the cart, and managing the cart.🛍️",
    image: "./assets/project/angular-Ecommerce.png",
    link: "https://e-commerces-iota.vercel.app/Home",
    technologies: ["Angular", "typescript", "Tailwind", "Local Storage"],
  },
  {
    name: "Qalaqobana",
    description: "Qalaqobana is a Georgian-language multiplayer browser game where players take turns coming up with words in various categories (e.g., cities, names, objects) based on a randomly selected letter.📒",
    image: "./assets/project/qalaqobana.png",
    link: "https://qalaqobana.vercel.app/Home",
    technologies: ["Angular", "Tailwind", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    name: "Rocket Launches",
    description: "This is an Angular project that fetches and displays real-time data from the SpaceX API. The application provides detailed information about upcoming and past rocket launches, missions, launchpads, and rockets using a clean and responsive UI. 🚀",
    image: "./assets/project/rocket-launch.png",
    link: "https://rocket-launches-sooty.vercel.app/Home",
    technologies: ["Angular", "Tailwind", "Rest API", "vercel"],
  },
]

const projectsContainer = document.querySelector('.projects-grid');

projects.forEach(project => {
  const projectCard = document.createElement('a');
  projectCard.href = project.link;
  projectCard.target = "_blank";
  projectCard.classList.add('project-card');
  projectCard.innerHTML = `
          <div class="project-image">
              <img src="${project.image}" alt="Project 1">
          </div>
          <div class="project-info">
              <div class="project-tags">
                  ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
              </div>
              <h3 class="project-title">${project.name}</h3>
              <p class="project-description">${project.description}</p>
          </div>
    `;
  projectsContainer.appendChild(projectCard);
});


// Email Validation

const submitBtn = document.getElementById('submit');
const response = document.getElementById('response');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   submitBtn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_2fm4ume';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      submitBtn.value = 'Send Email';
      response.innerHTML = 'Email sent successfully!';
      form.reset();
      setTimeout(() => {
        response.innerHTML = '';
      }, 3000);
    }, (err) => {
      submitBtn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});