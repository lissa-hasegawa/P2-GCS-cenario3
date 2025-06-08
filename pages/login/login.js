function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  if (!email || !password) {
    errorMessage.textContent = 'Preencha todos os campos.';
    return;
  }

  // Simulando requisição de autenticação real (ainda é mockado internamente)
  fakeAuthenticateUser(email, password)
    .then(success => {
      if (success) {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login bem-sucedido! Redirecionando...';

        setTimeout(() => {
          window.location.href = 'admin-dashboard.html'; // Página de destino fictícia
        }, 1500);
      } else {
        errorMessage.textContent = 'Credenciais inválidas.';
      }
    })
    .catch(() => {
      errorMessage.textContent = 'Erro ao tentar autenticar. Tente novamente.';
    });
}

// ⚠️isso aqui é só para simular um fix, tranquilo? professor
// Ela simula uma chamada assíncrona como se fosse ao backend.
function fakeAuthenticateUser(email, password) {
  return new Promise((resolve) => {
    const mockUser = {
      email: 'admin@elasclub.com',
      password: '123456'
    };

    setTimeout(() => {
      resolve(email === mockUser.email && password === mockUser.password);
    }, 500); // Simula tempo de resposta da API
  });
}
