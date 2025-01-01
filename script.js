// script.js

document.addEventListener('DOMContentLoaded', function() {
    var sidebarToggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('.character-world-sidebar');
    var body = document.body;

    sidebarToggle.addEventListener('click', function() {
        body.classList.toggle('sidebar-open');
    });
});
