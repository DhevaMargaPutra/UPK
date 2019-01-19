//cek udah pernah buka app ini? lewati : set sessionStorage
if (sessionStorage.key == null) {
    sessionStorage.setItem('hasLogin', JSON.stringify(false));
}

//DOM
const openingAnim = document.getElementById('opening-id');

//cek udah pernah login? gak usah tampil opening : tampil
if (JSON.parse(sessionStorage.getItem('hasLogin')) == true) {
    openingAnim.style.display = 'none';
}

//nge-play animasi opening & set sudah login
function opening() {
    openingAnim.style.animationPlayState = 'running';
    sessionStorage.setItem('hasLogin', JSON.stringify(true));
}