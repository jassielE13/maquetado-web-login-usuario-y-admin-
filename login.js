function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("userType").value;

    // Resetear mensajes de error
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    let isValid = true;

    // Verificar que los campos no estén vacíos
    if (username === "") {
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        // Validar credenciales según el tipo de usuario
        if (userType === "user" && username === "Usuario13@gmail.com" && password === "12345678") {
            // Redirigir a la pantalla de usuario
            window.location.href = "HTML.html";
        } else if (userType === "admin" && username === "Admin13@gmail.com" && password === "12345678") {
            // Redirigir a la pantalla de administrador
            window.location.href = "ADMIN.html";
        } else {
            // Mostrar mensaje de error si las credenciales son incorrectas
            document.getElementById("usernameError").style.display = "block";
            document.getElementById("usernameError").textContent = "Usuario o contraseña incorrectos.";
            document.getElementById("passwordError").style.display = "block";
            document.getElementById("passwordError").textContent = "Usuario o contraseña incorrectos.";
        }
    }
}
