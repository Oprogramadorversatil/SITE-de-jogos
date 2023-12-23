var nome = document.getElementById('nome_txt');
var telefone = document.getElementById('telefone_txt');
var email = document.getElementById('email_txt');
var senha = document.getElementById('senha_txt');
var repetirsenha = document.getElementById('repetirsenha_txt');
var botao = document.getElementById('enviar_btn');

function enviar_dados(){

    if(nome.value.length < 3){
        alert('o nome precisa conter pelo menos 3 caracteres!');
        return false;
    }
    if(email.value.length < 8){
        alert('Preencha corretamente o campo email');
        return false;
    }

    if(celular.value.length < 11){
        alert('Seu celular precisa conter mais de 11 caracteres!');
        return false;
    }



if(senha.value.length < 5 ){
    alert('Sua senha deve conter pelo menos 5 caracteres');
    return false;
}
if(repetirsenha.value != senha.value){
    alert('As senhas precisam ser iguais');
    return false;
}
exibeDados()
return true;


}

function banco_dados(){
    if(enviar_dados() == true){
        alert('Registro criado, efetue o login.');
        limparDados();
    }
}
function exibeDados(){
    console.log('Nome: '+nome.value)
    console.log('Telefone: '+telefone.value)
    console.log('Email: '+email.value)
    console.log('Senha: '+senha.value)
}

function limparDados(){ //aqui fazemos uma função para limpar os campos após a função validando_dados for true
    nome.value = '';
    email.value = '';
    telefone.value = '';
    repetirsenha.value = '';
    senha.value = '';
   }


botao.onclick = banco_dados






