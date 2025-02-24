// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar-container');
    const overlay = document.querySelector('.sidebar-overlay');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    // 按钮事件
    menuToggle.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // 响应式处理
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });

    // 触摸滑动处理
    let touchStartX = 0;
    const TOUCH_THRESHOLD = 30;

    document.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        if (Math.abs(deltaX) > TOUCH_THRESHOLD) {
            if (deltaX > 0 && !sidebar.classList.contains('active')) {
                toggleSidebar();
            } else if (deltaX < 0 && sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        }
    });
});
