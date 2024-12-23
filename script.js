document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create an object to store the data
    const formData = {
        name: name,
        email: email,
        message: message
    };
    let contacts=localStorage.getItem('formData');
    console.log(contacts);
    if(contacts==null){
        data=[];
    }
    else{
        data=JSON.parse(contacts);
    }
    data.push(formData);
    localStorage.setItem('formData', JSON.stringify(data));
    console.log(data);
    // Display the data in the console
    console.log(formData);
    });
// write code for fech data from localstorage 
// and display it in the page   
