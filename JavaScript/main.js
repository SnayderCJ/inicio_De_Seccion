document.addEventListener('DOMContentLoaded', () => {
    const registerContainer = document.getElementById('register-container');
    const loginContainer = document.getElementById('login-container');
    const registerErrorMessage = document.getElementById('register-error-message');
    const loginErrorMessage = document.getElementById('login-errror-message');

    const showRegister = () => {
        registerContainer.style.display = 'block';
        loginContainer.style.display = 'none';
        registerErrorMessage.innerText = '';
        loginErrorMessage.innerText = '';
    };

    const showLogin = () => {
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        registerErrorMessage.innerText = '';
        loginErrorMessage.innerText = '';
    };

    window.showRegister = showRegister;
    window.showLogin = showLogin;

    const register = () => {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            registerErrorMessage.innerText = 'Las contraseñas no coinciden.';
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        registerErrorMessage.innerText = '¡Registrado exitosamente! Ahora puedes iniciar sesión.';
        console.log(`Registrado: ${username}`);
    };

    const login = () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Validar las credenciales
        if (username === storedUsername && password === storedPassword) {
            loginErrorMessage.innerText = '¡Inicio de sesión exitoso! Redirigiendo...';
            console.log(`Ingresado: ${username}`);
        } else {
            loginErrorMessage.innerText = 'Usuario o contraseña incorrecta.';
        }
    };

    window.register = register;
    window.login = login;
});