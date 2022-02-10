document.getElementById('login-button').addEventListener('click', function(){
    const emailField = document.getElementById('user-mail');
    const emailUser = emailField.value;

    const passwordField = document.getElementById('user-password');
    const passwordUser = passwordField.value;

    if(emailUser == "sojib@gmail.com" && passwordUser == "secret" ){
         window.location.href = 'banking.html'
    }
})