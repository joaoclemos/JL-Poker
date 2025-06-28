document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const forgotPassword = document.getElementById('forgot-password');
    const registerLink = document.getElementById('register-link');

    let users = [];

    // Carregar usuários do db.json
    fetch('/db.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar db.json');
            return response.json();
        })
        .then(data => {
            users = data.users;
        })
        .catch(error => {
            console.error('Erro ao carregar db.json:', error);
            alert('Erro ao carregar dados de login. Tente novamente mais tarde.');
        });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Verificar apenas após o carregamento dos usuários
        if (users.length > 0) {
            const user = users.find(u => u.name === username && u.password === password);
            if (user) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                alert('Login bem-sucedido! Redirecionando...');
                window.location.href = '/public/home.html';
            } else {
                alert('Usuário ou senha incorretos.');
            }
        } else {
            alert('Dados de login não carregados. Verifique sua conexão ou reinicie o servidor.');
        }
    });

    forgotPassword.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Um e-mail de redefinição de senha foi enviado. Verifique sua caixa de entrada!');
    });

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/public/assets/html/registro.html';
    });
});