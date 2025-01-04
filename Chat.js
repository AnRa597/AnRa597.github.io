document.addEventListener('DOMContentLoaded', () => {
    const messagesDiv = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // 模拟的消息存储（由于没有后端，消息将存储在浏览器的内存中）
    let messages = [];

    // 轮询检查新消息（这里只是模拟，实际上不会有新消息，因为后端不存在）
    setInterval(() => {
        // 在实际应用中，这里会检查服务器上的新消息
        // 但由于我们没有后端，所以这里什么也不做
        // 只是为了演示轮询的概念
    }, 2000); // 每2秒轮询一次

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            messages.push(message);
            renderMessages();
            messageInput.value = '';
        }
    });
document.addEventListener('DOMContentLoaded', () => {
    const messagesDiv = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // 模拟的用户（在这个例子中，我们将使用索引作为用户名）
    let userIndex = 0;
    let currentUser = `User${++userIndex}`; // 第一个用户

    // 存储消息的对象数组，每个对象包含用户名、头像和消息文本
    let messages = [];

    // 生成随机颜色的函数
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 生成随机头像字母的函数（基于用户名）
    function getRandomAvatarLetter(username) {
        return username.charAt(0).toUpperCase();
    }

    // 渲染消息到页面上
    function renderMessages() {
        messagesDiv.innerHTML = '';
        messages.forEach((msg) => {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';

            const avatarElement = document.createElement('div');
            avatarElement.className = 'avatar';
            avatarElement.style.backgroundColor = msg.color;
            avatarElement.textContent = getRandomAvatarLetter(msg.username);

            const messageTextElement = document.createElement('div');
            messageTextElement.className = 'message-text';
            messageTextElement.textContent = msg.text;

            messageElement.appendChild(avatarElement);
            messageElement.appendChild(messageTextElement);

            messagesDiv.appendChild(messageElement);
        });
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到底部
    }

    // 发送消息的函数
    function sendMessage(text) {
        const color = getRandomColor();
        const message = {
            username: currentUser,
            color: color,
            text: text,
        };
        messages.push(message);
        renderMessages();
    }

    // 处理发送按钮的点击事件
    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            sendMessage(message);
            messageInput.value = '';
        }
    });

    // 可选：按下回车键发送消息
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    // 初始渲染消息（虽然一开始没有消息，但这是一个好习惯）
    renderMessages();

    // 在这个例子中，我们没有真正的多用户或实时通信，
    // 但您可以想象如果有后端支持，这里的sendMessage函数
    // 会将消息发送到服务器，服务器再将其广播给其他用户。
});
