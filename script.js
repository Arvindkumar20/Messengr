document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Create an object to store the data
    const formData = {
        name: name.value,
        email: email.value,
        message: message.value
    };
    let data = JSON.parse(localStorage.getItem('formData'));
    //[{name: 'John', email: 'john@doe', message: 'Hello!'},{name: 'Jane', email: 'jane@doe', message: 'Hi!'},{name: 'John', email: 'john@doe', message: 'Hello!'}]
    if (data == null) {
        localStorage.setItem('formData', JSON.stringify([formData]));
        document.getElementById('result').innerHTML = 'Data saved successfully!';
        email.value='';
        name.value='';
        message.value='';

    }
    else {
        data.push(formData);
        localStorage.setItem('formData', JSON.stringify(data));
        document.getElementById('result').innerHTML = 'Data saved successfully!';
        email.value='';
        name.value='';
        message.value='';
    }
});

