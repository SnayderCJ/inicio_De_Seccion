document.addEventListener('DOMContentLoaded', () => {
    const registerContainer = document.getElementById('register-container')
    const loginContainer = document.getElementById('login-container')
    const registerErrorMessage = document.getElementById('register-error-message')
    const loginErrorMessage = document.getElementById('login-errror-message')

    const showRegister = () => {
        registerContainer.style.display = 'block'
        loginContainer.style.display = 'none';
        registerErrorMessage.innerText = '';
        loginErrorMessage.innerText = '';
    }

    const showLogin = () => {
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        registerErrorMessage.innerText = '';
        loginErrorMessage.innerText = '';
    }

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

        console.log(`Registrado: ${username}`);
        registerErrorMessage.innerText = 'Registrado exitosamente. Ahora puedes iniciar sesión.';
    }
    

    const login = () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username === "" || password === "") {
            loginErrorMessage.innerText = 'Usuario o contraseña incorrecta';
            return;
        }

        console.log(`Ingresado: ${username}`);
        loginErrorMessage.innerText = 'Inicio de sesión exitoso. Redirigiendo...';
    }

    window.register = register;
    window.login = login;
})