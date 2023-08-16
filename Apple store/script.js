
let email = document.getElementById('email')
let password = document.getElementById('password')
let sign = document.getElementById('sign-in');

sign.addEventListener('click', () =>{
    localStorage.setItem(email, password)
})

