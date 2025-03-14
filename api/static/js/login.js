async function logar(evento) {
    alert('logar');
    evento.preventDefault();
    const username = document.getElementById('nome').value;
    const password = document.getElementById('senha').value;
    const resposta = await apiFetch('/api/login/', 'POST', { 'username': username, 'password': password });
    console.log(resposta);
    if (resposta.ok) {
        window.location.href = '/home';
    }
    else {
        console.log('Erro ao logar')
    }
}
document.getElementById('entrar').addEventListener('submit', logar);