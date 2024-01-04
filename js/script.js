let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
    navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
};

function gotowhatsapp(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    var url = "https://wa.me/551193000000?text="
    + "Nome: " + nome + "%0a"
    + "Email: " + email + "%0a"
    + "Assunto: " + assunto + "%0a"
    + "Mensagem: " + mensagem;

    window.open(url, '_blank').focus();
}