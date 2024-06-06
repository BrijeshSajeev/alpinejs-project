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