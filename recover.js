const myElement=(id)=>{
    return document.getElementById(id);
};

emailSend=()=>{
 let sendArea = myElement('send-area');
 let userMail= myElement('user-email');
 let mail = userMail.value;
    
 if(!mail){
     alert('Por favor insira um e-mail cadastrado');
 }
 else{ sendArea.innerHTML ="<h1>As instruções para recuperar sua senha foram enviadas para o seu e-mail. </h1>";
 } 

};