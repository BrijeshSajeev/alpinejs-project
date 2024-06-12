//DRY - do not repeat yourself
//

document.addEventListener('alpine:init', () => {
  Alpine.data('navigation', () => ({
    name: "Brijesh",
    menuOpen: false,
    get isOpen() { return this.menuOpen },
    links: ['About', 'Experience', 'Projects', 'Contact'],
    closeMenu() {
      this.menuOpen = false;
    },
    openMenu() {
      this.menuOpen = true;
    }

  }))
});

document.addEventListener('alpine:init', () => {
  Alpine.data('experience', () => ({
    name:"Experience",
    description:'Explore My',
    frontend: [{ name: 'HTML', level: 'Experienced' }, { name: 'CSS', level: 'Experienced' }, { name: 'AlpineJS', level: 'Intermediate' }, { name: 'Flutter', level: 'Intermediate' }, { name: 'Bootstrap', level: 'Experienced' }, { name: 'TailwindCSS', level: 'Experienced' }],
    backend: [{ name: 'Java', level: 'Intermediate' }, { name: 'Spring Boot', level: 'Intermediate' }, { name: 'C++', level: 'Intermediate' }, { name: 'MySql', level: 'Intermediate' }, { name: 'NodeJS', level: 'Experienced' }, { name: 'Javascript', level: 'Experienced' }],

  }))
});

document.addEventListener('alpine:init', () => {
  Alpine.data('projects', () => ({
    name:"Projects",
    description:'Browse My Recent',
    projectList:[
      {
        name:'Natours',
        description:'Developed Natours, a dynamic and visually appealing web application designed to facilitate the discovery and booking of nature tours',
        link:'https://github.com/BrijeshSajeev/natours',
        img:'./assets/tour.jpg'
      },
      {
        name:'Nexter',
        description:'Developed and maintained the Nexter API, a robust and scalable RESTful API designed to facilitate seamless integration. ',
        link:'https://github.com/BrijeshSajeev/nexter',
        img:'./assets/nexter.jpeg'
      },
      {
        name:'Omnifood',
        description:'Developed Omnifood, a mobile app that delivers personalized meal plans and recipes based on dietary preferences and nutritional needs.',
        link:'https://omnifood-brijesh.netlify.app/',
        img:'./assets/omnifood.jpg'
      },
      {
        name:'Mapty',
        description:'Developed Mapty, a geolocation app for tracking workouts, integrating map APIs, local storage, and user-friendly interface.',
        link:'https://mapty-brijesh.netlify.app/',
        img:'./assets/mapty.jpeg'
      }
    ]

  }))
});

