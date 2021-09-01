const form = document.getElementById("form");
const usuario = document.getElementById("signUser");
const contrasena = document.getElementById("signPass");
const nombre = document.getElementById("signName");
const correo = document.getElementById("signEmail")

form .addEventListener('submit', function(event){
    event.preventDefault();
    let users = Array(
        {
            user: usuario.value,
            pass: contrasena.value,
            name: nombre.value,
            email: correo.value
        }
    );
    localStorage.setItem('users', JSON.stringify(users));
    window.location = "index.html"

});