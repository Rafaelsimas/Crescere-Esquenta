const myElement=(id)=>{
    return document.getElementById(id);
};

emailSend=()=>{
 let sendArea = myElement('send-area');
 sendArea.innerHTML ="<h1>As instruções para recuperar sua senha foram enviadas para o seu e-mail. </h1>";
};