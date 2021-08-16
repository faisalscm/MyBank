document.getElementById('login-submit').addEventListener('click',function(){
   //get user email
   
    const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
   console.log(userEmail);
   //get user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;

// check  email and pass

if(userEmail == 'faisal@gmail.com' && userPassword == 'faimud'){
   window.location.href = 'banking.html';
}


});

