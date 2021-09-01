const readUsers = () => {
    const miStorage = window.localStorage;
    const users = JSON.parse(miStorage.getItem('user'))
    return users

}
const writeUser = (user) => {
    const miStorage = window.localStorage;
    const users = JSON.parse(miStorage.getItem('user'))

    if (users !== null) {
        console.log(users)
        miStorage.setItem('USER_LIST', JSON.stringify([...users, user]))
    }
    else {
        miStorage.setItem('USER_LIST', JSON.stringify([user]))
    }

}

function login(event) {
    event.preventDefault()
    var usuario = document.getElementById("usuario").value
    var contrasena = document.getElementById("password").value
    const usuarios = readUsers()
    if (usuarios === null) {
        alert("Su usuario o contraseña es invalidos")
        return
    }

    console.log(usuarios)
    const userMatch = usuarios.filter((user) => user.usuario === usuario && user.contrasena === contrasena)
    console.log(userMatch)
    if (userMatch.length > 0) {

        window.location = "situaciones.html"
    }
    else {
        alert("Su usuario o contraseña es invalido")
    }
}

var usuario = document.getElementById("sign_usuario").value
var contrasena = document.getElementById("sign_password").value
var email = document.getElementById("sign_mail").value



function register(event) {
    event.preventDefault()
    const listadoUsers = readUsers()
    if (listadoUsers !== null) {
        const userMatch = listadoUsers.filter((user) => user.usuario === usuario)
        if (userMatch.length >= 1) {
            alert("existe")
            return false
            window.location = "index.html"
        }
    }
    writeUser({ usuario: usuario, contrasena: contrasena, email: email })
}