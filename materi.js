//auto generate warna setiap bab
const divMateri = document.getElementsByClassName('materi');
for (let i = 0; i < divMateri.length; i++) {
    if ((i % 2) == 0) {
        //cerah
        divMateri[i].style.backgroundColor = 'yellow';
        divMateri[i].children[0].style.color = '#343a40';
        divMateri[i].children[1].style.color = '#343a40';
    } else {
        //gelap
        divMateri[i].style.backgroundColor = '#343a40';
        divMateri[i].children[0].style.color = '#f8f9fa';
        divMateri[i].children[1].style.color = '#f8f9fa';
    }
}

//show hide up button
const upButton = document.getElementById('up-button');
function checkScroll() {
    if (scrollY > 300) {
        upButton.style.display = 'initial';
        console.log('show');
    } else {
        upButton.style.display = 'none';
        console.log('hide');
    }
}