let soal = [
    {
        pertanyaan: 'Fotografi berasal dari bahasa Yunani,photos artinya...',
        opsi: ['Banyak', 'Cahaya', 'Gambar', 'Gerak'],
        jawaban: 1
    },
    {
        pertanyaan: 'Alat yang sangat berguna terutama pada pemotretan yang berhadapan langsung dengan arah datangnya cahaya...',
        opsi: ['Tudung lensa', 'Background', 'Filter', 'Tripod'],
        jawaban: 0
    },
    {
        pertanyaan: 'Yang termasuk jenis utama mode kamera adalah...',
        opsi: ['Shutter', 'Speed', 'Aperture', 'Manual'],
        jawaban: 3
    }
];

const soalDOM = document.getElementById('soal');
const opsiDOM = [];
const nextSoalDOM = document.getElementById('next-soal');
const prevSoalDOM = document.getElementById('prev-soal');
const nomorSoalDOM = document.getElementById('nomor-soal');

for (let i = 0; i < 4; i++) {
    opsiDOM.push(document.getElementById('opsi' + i));
}

let halamanSoal = 1;

loadSoal(halamanSoal - 1);

function loadSoal(indexSoal) {
    soalDOM.innerHTML = soal[indexSoal].pertanyaan;
    for (let i = 0; i < 4; i++) {
        opsiDOM[i].innerHTML = soal[indexSoal].opsi[i];
    }
}

nextSoalDOM.addEventListener('click', function() {
    halamanSoal++;
    nomorSoalDOM.innerHTML = halamanSoal + '.';
    loadSoal(halamanSoal - 1);
});

prevSoalDOM.addEventListener('click', function() {
    halamanSoal--;
    nomorSoalDOM.innerHTML = halamanSoal + '.';
    loadSoal(halamanSoal - 1);
});