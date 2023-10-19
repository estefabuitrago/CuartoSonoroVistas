// Validación del formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Realiza la validación aquí (puedes agregar tu lógica de validación)

    // Redirige a index.html
    window.location.href = "../index.html";
});

// Validación del formulario de registro
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    // Realiza la validación aquí (puedes agregar tu lógica de validación)
});
