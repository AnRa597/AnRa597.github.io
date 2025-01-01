// script.js

document.addEventListener('DOMContentLoaded', function() {
    var sidebarToggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('.character-world-sidebar');
    var body = document.body;

    sidebarToggle.addEventListener('click', function() {
        body.classList.toggle('sidebar-open');
    });
});
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    sidebar.classList.toggle('hidden');
    content.classList.toggle('expanded');
}
