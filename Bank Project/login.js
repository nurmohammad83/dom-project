document.getElementById('btn-submit').addEventListener('click',function(){
   const emailField = document.getElementById('user-email');
   const passwordField = document.getElementById('user-password');
   const email = emailField.value;
   const password= passwordField.value;

   if( email ==='my@gmail.com' && password === 'pesfootball'){
    window.location.href = 'bank.html'
   }else{
       alert ('invlide user')
   }

   emailField.value= '';
   passwordField.value='';
})