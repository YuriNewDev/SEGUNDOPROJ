
let email = document.querySelector('#email1');
let senha = document.querySelector('#senha1');

function logar() {
    let emailValue = email.value;  
    let senhaValue = senha.value;  

    if(emailValue === 'YURI-MARCELO123@HOTMAIL.COM' && senhaValue === 'yuri123') {
        window.alert('LOGIN FEITO COM SUCESSO');
    } else { 
        window.alert('USUÁRIO OU SENHA INVÁLIDA');
    }
}