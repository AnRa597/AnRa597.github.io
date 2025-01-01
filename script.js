document.getElementById('signUp').onclick = function () {
    document.querySelector('.sign-up-container').style.display = 'block';
    document.querySelector('.sign-in-container').style.display = 'none';
    document.querySelector('.overlay-container').classList.add('right-panel-active');
    window.location.href = "/home"; // 假设首页路径为/home
};
document.getElementById('signIn').onclick = function () {
    document.querySelector('.sign-up-container').style.display = 'none';
    document.querySelector('.sign-in-container').style.display = 'block';
    document.querySelector('.overlay-container').classList.remove('right-panel-active');
};

// 取消按钮的功能（这里只是简单地返回到登录表单）
document.querySelectorAll('.cancelbtn').forEach(function (button) {
    button.onclick = function () {
        document.querySelector('.sign-up-container').style.display = 'none';
        document.querySelector('.sign-in-container').style.display = 'block';
        document.querySelector('.overlay-container').classList.remove('right-panel-active');
    };
});
