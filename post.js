document.addEventListener('DOMContentLoaded', function () {
    const messageList = document.getElementById('messageList');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');

    const loadMessages=()=> {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messageList.innerHTML = '';
        Array.from(messages).forEach(message => {
            const li = document.createElement('li');
            li.className = 'message-item';
            li.innerHTML = `
            <p>
            ${message}
            </p>
                <button><span onclick="deleteMessage(${message})}">Delete</span></button>
            `;


            messageList.appendChild(li);
        });
    }
   
    const deleteMessage= (message) =>{
        // console.log(message)
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        const filteredMessages = messages.filter(msg => msg !== message);
        localStorage.setItem('messages', JSON.stringify(filteredMessages));
        loadMessages();
    }

    const saveMessage=(message)=> {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
        loadMessages();
    }

    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (message) {
            saveMessage(message);
            messageInput.value = '';
        }
    });

    loadMessages();
});
