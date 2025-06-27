document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        console.log('Nome de usuário:', username);
        console.log('Senha:', password);
        alert('Login bem-sucedido! Redirecionando...');
        window.location.href = '/index.html';
    });
});