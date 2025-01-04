document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // 在这里添加登录表单的验证逻辑
        // 如果验证通过，可以使用fetch API或其他方法将数据发送到服务器（在这个例子中不会这样做）
        alert('Login form submitted!');
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (registerPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // 在这里添加注册表单的验证逻辑
        // 如果验证通过，可以使用fetch API或其他方法将数据发送到服务器（在这个例子中不会这样做）
        alert('Registration form submitted!');
    });
});
