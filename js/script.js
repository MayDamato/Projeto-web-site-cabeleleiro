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
    var name = document.getElementById("nome").value;
    var phone = document.getElementById("email").value;
    var email = document.getElementById("assunto").value;
    var service = document.getElementById("mensagem").value;

    var url = "https://wa.me/5511930491954"
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email + "%0a"
    + "Service" + service;

    window.open(url, '_blank').focus();
}