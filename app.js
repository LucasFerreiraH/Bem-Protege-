// O bloco de código abaixo é responsavel por armazenar as informações que o usuário anexar nos campos e conferir
// se está no padrão, caso esteja, aparecerá um 'alert' de sucesso na tela, caso não, um 'alert' de erro. 

function validarFormulario() {
   
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;


    if (nome === '' || email === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
        return false; 
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, digite um email válido.');
        return false;
    }

    alert('Dados enviados com sucesso!');
    return true; 
}

// As linhas de código abaixo são responsável por enviar os dados quando o botão for acionado 
// (apenas se os dados forem validados como exigido nas linhas acima).

const botaoEnviar = document.getElementById('enviar');
botaoEnviar.addEventListener('click', function(event) {
    
    event.preventDefault();

    
    if (validarFormulario()) {
       
        document.getElementById('formulario').submit();
    }
});


