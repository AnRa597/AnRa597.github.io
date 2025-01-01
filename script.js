document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarContent = document.querySelector('.sidebar-content');

    sidebarToggle.addEventListener('click', function () {
        sidebarContent.style.height = sidebarContent.scrollHeight + 'px';
        sidebarToggle.style.display = 'none';
    });

    // Close the sidebar if clicked outside the sidebar content (on smaller screens)
    window.addEventListener('click', function (event) {
        if (!sidebarContent.contains(event.target) && !sidebarToggle.contains(event.target)) {
            sidebarContent.style.height = '0px';
            sidebarToggle.style.display = 'block';
        }
    });
});
