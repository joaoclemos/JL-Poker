document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');
    const backToLogin = document.getElementById('back-to-login');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validação básica
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Simulação de registro bem-sucedido
        alert(`Registro bem-sucedido para ${username}! Redirecionando para login...`);
        window.location.href = '/public/assets/html/login.html';
    });

    backToLogin.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/public/assets/html/login.html';
    });
});