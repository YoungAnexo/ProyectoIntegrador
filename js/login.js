const user = document.getElementById("logUser");
const pass = document.getElementById("logPass");
var usuario = JSON.parse(localStorage.getItem("users"));
console.log(user)
function login(event) {
    event.preventDefault()

    for (var i = 0; i < localStorage.length; i++){
        
        if (user.value == usuario[i]["user"] && pass.value == usuario[i]["pass"]) {
            window.location = "situaciones.html"
            console.log("estoy dentro")
        }
        else if (usuario != null) {
            alert("Su usuario o contraseña es invalidos")
        }
    }
}