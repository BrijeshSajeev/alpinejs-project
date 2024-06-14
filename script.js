//AlpineJs Component for the portfolio 

document.addEventListener("alpine:init", () => {
  Alpine.data("section", () => ({
    navigation: {
      title: "Brijesh",
      menuOpen: false,
      get isOpen() {
        return this.menuOpen;
      },
      links: [
        { name: "About", link: "about" },
        { name: "Experience", link: "experience" },
        { name: "Projects", link: "projects" },
        { name: "Contact", link: "contact" },
      ],
      closeMenu() {
        this.menuOpen = false;
      },
      openMenu() {
        this.menuOpen = true;
      },
    },
    profile: {
      topDes: "Hello, I'm",
      title: "Brijesh",
      position: "Fullstack Developer",
      cvLink: "./assets/Brijesh_Resume.pdf",
      socials: [
        {
          img: "./assets/github.png",
          alt: "github",
          link: "https://github.com/BrijeshSajeev",
        },
        {
          img: "./assets/linkedin.png",
          alt: "Linkedin",
          link: "https://www.linkedin.com/in/brijesh-s-a-053aaa238",
        },
      ],
    },
    about: {
      title: "About me",
      description: "Get To Know More",
      aboutContent: [
        {
          title: "Experience",
          img: "./assets/experience.png",
          desc1: "1+ Year",
          desc2: "FullStack Development",
        },
        {
          title: "Education",
          img: "./assets/education.png",
          desc1: "BE Computer Science",
          desc2: "and Engineering",
        },
      ],
      aboutText:
        "About As a results-oriented software developer with expertise in various technologies, I specialize in creating innovative solutions that drive business growth and efficiency. With a strong background in C, C++, Java, Spring Boot, Javascript, HTML/CSS, I bring a unique blend of technical expertise and strategic thinking to every project. I thrive in collaborative environments where I can leverage my excellent communication and leadership skills. Let's connect and discuss how I can help you achieve your technology goals. ",
    },

    experience: {
      title: "Experience",
      description: "Explore My",
      frontend: [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "AlpineJS", level: "Intermediate" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Bootstrap", level: "Experienced" },
        { name: "TailwindCSS", level: "Experienced" },
      ],
      backend: [
        { name: "Java", level: "Intermediate" },
        { name: "Spring Boot", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "MySql", level: "Intermediate" },
        { name: "NodeJS", level: "Experienced" },
        { name: "Javascript", level: "Experienced" },
      ],
    },
    project: {
      title: "Projects",
      description: "Browse My Recent",
      projectList: [
        {
          name: "Natours",
          description:
            "Developed Natours, a dynamic and visually appealing web application designed to facilitate the discovery and booking of nature tours",
          link: "https://github.com/BrijeshSajeev/natours",
          img: "./assets/tour.jpg",
        },
        {
          name: "Nexter",
          description:
            "Developed and maintained the Nexter API, a robust and scalable RESTful API designed to facilitate seamless integration. ",
          link: "https://github.com/BrijeshSajeev/nexter",
          img: "./assets/nexter.jpeg",
        },
        {
          name: "Omnifood",
          description:
            "Developed Omnifood, a mobile app that delivers personalized meal plans and recipes based on dietary preferences and nutritional needs.",
          link: "https://omnifood-brijesh.netlify.app/",
          img: "./assets/omnifood.jpg",
        },
        {
          name: "Mapty",
          description:
            "Developed Mapty, a geolocation app for tracking workouts, integrating map APIs, local storage, and user-friendly interface.",
          link: "https://mapty-brijesh.netlify.app/",
          img: "./assets/mapty.jpeg",
        },
      ],
    },
    contact: {
      title: "Contact Me",
      description: "Get in Touch",
      socialLinks: [
        {
          link: "mailto:mailtobrijesh2003@gmail.com",
          img: "./assets/email.png",
          text: "mailtobrijesh2003@gmail.com",
        },
        {
          link: "http://linkedin.com/in/brijesh-s-a-053aaa238",
          img: "./assets/linkedin.png",
          text: "LinkedIn",
        },
      ],
    },
  }));
});

