AOS.init();

const projects = [
    {
        name: "Project 1",
        description: "This is the first project. It is a simple web application that does X, Y, and Z.",
        image: "https://via.placeholder.com/150",
        link: "https://example.com/project1",
        technologies: ["HTML", "CSS", "JavaScript"],
    }
]

const scrollContainer = document.querySelector('.project-scroll-container');
const scrollTrack = document.getElementById('scroll-track');
const leftscroll = document.querySelector('.leftscroll');
const rightscroll = document.querySelector('.rightscroll');

const card = document.querySelector('.project-card');
const scrollAmount = card.offsetWidth + 50;

// Duplicate cards for seamless loop
scrollTrack.innerHTML += scrollTrack.innerHTML;

// Manual scroll
leftscroll.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
rightscroll.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Auto scroll
let autoScrollInterval;
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    scrollContainer.scrollLeft += 1;

    // Reset scroll when halfway (original width)
    if (scrollContainer.scrollLeft >= scrollTrack.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0;
    }
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

startAutoScroll();

scrollContainer.addEventListener('mouseenter', stopAutoScroll);
scrollContainer.addEventListener('mouseleave', startAutoScroll);
leftscroll.addEventListener('mouseenter', stopAutoScroll);
leftscroll.addEventListener('mouseleave', startAutoScroll);
rightscroll.addEventListener('mouseenter', stopAutoScroll);
rightscroll.addEventListener('mouseleave', startAutoScroll);
