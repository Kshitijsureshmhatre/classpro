const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let conversation = [];

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        conversation.push({ user: 'You', message });
        renderMessage(conversation[conversation.length - 1]);
        messageInput.value = '';
       
      
    }
});

function renderMessage(message) {
    const messageHTML = `
        <div class="message">
            <span class="username">${message.user}</span>
            <span class="message-text">${message.message}</span>
        </div>
    `;
    messageContainer.insertAdjacentHTML('beforeend', messageHTML);
}