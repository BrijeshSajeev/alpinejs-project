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
})

document.addEventListener('alpine:init', () => {
    Alpine.data('experience', () => ({
        name:"Experience",
        description:'Explore My',
        frontend: [{ name: 'HTML', level: 'Experienced' }, { name: 'CSS', level: 'Experienced' }, { name: 'AlpineJS', level: 'Intermediate' }, { name: 'Flutter', level: 'Intermediate' }, { name: 'Bootstrap', level: 'Experienced' }, { name: 'TailwindCSS', level: 'Experienced' }],
        backend: [{ name: 'Java', level: 'Intermediate' }, { name: 'Spring Boot', level: 'Intermediate' }, { name: 'C++', level: 'Intermediate' }, { name: 'MySql', level: 'Intermediate' }, { name: 'NodeJS', level: 'Experienced' }, { name: 'Javascript', level: 'Experienced' }],

    }))
})
