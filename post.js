document.addEventListener('DOMContentLoaded', function () {
    const messageList = document.getElementById('messageList');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const loadMessages = async() => {
        try {
            const messages =await JSON.parse(localStorage.getItem('messages')) || [];
             messageList.innerHTML = '';
             messages.forEach((message, index) => {
                 const li = document.createElement('li');
                 li.className = 'message-item';
     
                 // Using textContent to prevent XSS
                 const messageText = document.createElement('p');
                 messageText.className = 'message-text';
                 messageText.textContent = message;
     
                 // Create Delete button
                 const deleteButton = document.createElement('button');
                 deleteButton.textContent = 'Delete';
                 deleteButton.className = 'delete-button';
                 deleteButton.onclick = () => deleteMessage(index);
     
                 // Append message text and button to list item
                 li.appendChild(messageText);
                 li.appendChild(deleteButton);
     
                 messageList.appendChild(li);
             });
        } catch (error) {
            console.log(error);
        }
       
    };

    // login logout
    // let userEmail='arvind@gmail.com';
    // let userDetails = JSON.parse(localStorage.getItem('formData'));
    // if (userDetails) {
    //     userDetails.filter((user) => {
    //         if (user.email === userEmail) {
    //             messageList.style.display = 'block';
    //         }
    //         else {
    //             messageList.style.display = 'none';
    //         }
    //     }
    //     )
    // }
    // else {
    //     messageList.style.display = 'none';
    // }

    // Delete message by index
    const deleteMessage = (index) => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.splice(index, 1); // Remove the message at the given index
        localStorage.setItem('messages', JSON.stringify(messages)); // Save updated messages
        loadMessages(); // Reload the messages
    };

    // Call loadMessages to populate the list on page load
    loadMessages();




    const saveMessage = (message) => {
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
