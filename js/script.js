//tres constantes para referenciar os ITEM nas Divs Projetos 
// sinal = usado para atribuir algo
//Document. identifica a parta aberta no servidor 
const albumFotos = document.ge


const album = document.getElementById('album');
const casamentos = document.getElementById('Casamentos');
const buffet = document.getElementById('Buffet');

//tres constantes para referenciar os IDS  

const videoAlbum = document.querySelector('#videoAlbum');
const videoCasamentos = document.querySelector('#videoCasamentos');
const videoBuffet = document.querySelector('#videoBuffet');

//Evento de click
album.addEventListener('click',() =>{
    album.classList.toggle('active');
    //para iframe
    videoAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () =>{
    casamentos.classList.toggle('active');
    videoCasamentos.classList.toggle('active');
});
buffet.addEventListener('click', () =>{
    buffet.classList.toggle('active');
    videoBuffet.classList.toggle('active');
});
