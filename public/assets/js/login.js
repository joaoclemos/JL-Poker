document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const forgotPassword = document.getElementById('forgot-password');
    const registerLink = document.getElementById('register-link');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Simulação de login bem-sucedido
        alert('Login bem-sucedido! Redirecionando...');
        window.location.href = '/public/home.html';
    });

    forgotPassword.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Um e-mail de redefinição de senha foi enviado. Verifique sua caixa de entrada!');
    });

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Redirecionando para a página de registro...');
        // Aqui você pode redirecionar para /register.html ou outra página de registro
        window.location.href = '/register.html';
    });
});