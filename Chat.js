document.addEventListener('DOMContentLoaded', () => {
    const messagesDiv = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // 模拟的消息存储（由于没有后端，消息将存储在浏览器的内存中）
    let messages = [];

    // 渲染消息到页面上
    function renderMessages() {
        messagesDiv.innerHTML = '';
        messages.forEach((msg, index) => {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = `${index + 1}. ${msg}`;
            messagesDiv.appendChild(messageElement);
        });
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到底部
    }

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

    // 可选：按下回车键发送消息
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    // 初始渲染消息（虽然一开始没有消息，但这是一个好习惯）
    renderMessages();
});
