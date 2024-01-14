document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'Apiw' && password === '251101') {
        window.location.href = "home.html";
        alert('Login successful');
    } else {
        alert('Incorrect username or password');
    }
});