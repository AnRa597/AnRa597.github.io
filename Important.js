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
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // 在这里添加登录表单的验证逻辑（如果有的话）
        // ...

        // 模拟登录成功后的重定向到首页
        window.location.href = 'index.html'; // 假设你有一个名为index.html的首页文件
    });
});

// 新增的注册函数
function registerUserAndRedirect() {
    const registerForm = document.getElementById('registerForm');
    const registerEmail = document.getElementById('registerEmail').value;
    const registerPassword = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (registerPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // 在这里添加注册用户的逻辑（如果有的话）
    // ...

    // 模拟注册成功后的重定向到首页
    window.location.href = 'index.html'; // 假设你有一个名为index.html的首页文件
}
