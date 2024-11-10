// Function to toggle menu visibility and animation
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    const toggle = document.querySelector('.navbar-toggle');
    
    menu.classList.toggle('active'); // Toggle the menu visibility
    toggle.classList.toggle('active'); // Add animation to the toggle button
}

// Combined scroll event listener for parallax effects
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Parallax effect for the banner
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px'; // Adjust the speed of parallax
    }

    // Parallax effect for the how-to section
    const howToSection = document.querySelector('.how-to-section');
    if (howToSection) {
        howToSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"; // Adjust the multiplier for speed
    }

    // Parallax effect for the about-us section (pseudo-element)
    const aboutUs = document.querySelector('.about-us');
    if (aboutUs) {
        // Directly modifying the background position of the parent element instead of pseudo-element
        aboutUs.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    }
});
