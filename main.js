const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', e => {
    e.preventDefault();
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data);
})

// const email = document.forms['form']['username'];

// function validate() {
//     if(email.value.length  < 9 ) {
//         email.style.border = '1px solid red';
//         email.focus();
//         return false;
//     }
// }