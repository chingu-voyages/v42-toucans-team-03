// Toggles checkbox to false when screen is larger than 500px
// So the hamburger menu doesn't stay open
window.addEventListener('resize', function() {
    if (window.innerWidth > 500) {
        document.getElementById("nav-toggle").checked = false;
    }
  });