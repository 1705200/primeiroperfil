//tres constantes para referenciar os ITEM nas Divs Projetos 
const album = document.getElementById('AlbumFotos');
const site = document.getElementById('Casamentos');
const port = document.getElementById('Buffet');

const videoAlbum = document.querySelector('.videoAlbum');
const videoCasamentos = document.querySelector('.videoCasamentos');
const videoBuffet = document.querySelector('.videoBuffet');

//Evento de click
album.addEventListener('click',() =>{
    album.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});
site.addEventListener('click', () =>{
    site.classList.toggle('active');
    videoCasamentos.classList.toggle('active');
});
port.addEventListener('click', () =>{
    port.classList.toggle('active');
    videoBuffet.classList.toggle('active');
});



