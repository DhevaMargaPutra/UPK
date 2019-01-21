let soal = [
    {
        pertanyaan: 'Fotografi berasal dari bahasa Yunani,photos artinya...',
        opsi: ['Banyak', 'Cahaya', 'Gambar', 'Gerak'],
        jawaban: 1,
        jawabanUser: -1
    },
    {
        pertanyaan: 'Alat yang sangat berguna terutama pada pemotretan yang berhadapan langsung dengan arah datangnya cahaya...',
        opsi: ['Tudung lensa', 'Background', 'Filter', 'Tripod'],
        jawaban: 0,
        jawabanUser: -1
    },
    {
        pertanyaan: 'Yang termasuk jenis utama mode kamera adalah...',
        opsi: ['Shutter', 'Speed', 'Aperture', 'Manual'],
        jawaban: 3,
        jawabanUser: -1
    }
];

const soalDOM = document.getElementById('soal');
const labelOpsiDOM = [];
const radioOpsiDOM = [];
const nextSoalDOM = document.getElementById('next-soal');
const prevSoalDOM = document.getElementById('prev-soal');
const nomorSoalDOM = document.getElementById('nomor-soal');
const submitDOM = document.getElementById('submit');
const kumpulkanDOM = document.getElementById('kumpulkan');
const benarDOM = document.getElementById('benar');
const salahDOM = document.getElementById('salah');
const nilaiDOM = document.getElementById('nilai');
const hasilDOM = document.getElementById('hasil');

for (let i = 0; i < 4; i++) {
    labelOpsiDOM.push(document.getElementById('label-opsi' + i));
    radioOpsiDOM.push(document.getElementById('radio-opsi' + i));
}

let halamanSoal = 1;

loadSoal(halamanSoal - 1);

function loadSoal(indexSoal) {
    soalDOM.innerHTML = soal[indexSoal].pertanyaan;
    for (let i = 0; i < 4; i++) {
        labelOpsiDOM[i].innerHTML = soal[indexSoal].opsi[i];
    }
}

function loadJawaban(indexSoal) {
    if (soal[indexSoal].jawabanUser !== -1) {
        radioOpsiDOM[soal[indexSoal].jawabanUser].checked = true;
    }
}

function resetJawaban() {
    for (let i = 0; i < 4; i++) {
        radioOpsiDOM[i].checked = false;
    }
}

nextSoalDOM.addEventListener('click', function() {
    if (halamanSoal < soal.length) {
        halamanSoal++;
        nomorSoalDOM.innerHTML = halamanSoal + '.';
        loadSoal(halamanSoal - 1);
        resetJawaban();
        loadJawaban(halamanSoal - 1);
    }
});

prevSoalDOM.addEventListener('click', function() {
    if (halamanSoal > 1) {
        halamanSoal--;
        nomorSoalDOM.innerHTML = halamanSoal + '.';
        loadSoal(halamanSoal - 1);
        resetJawaban();
        loadJawaban(halamanSoal - 1);
    }
});

submitDOM.addEventListener('click', function () {
    for (let i = 0; i < radioOpsiDOM.length; i++) {
        if (radioOpsiDOM[i].checked === true) {
            soal[halamanSoal - 1].jawabanUser = i;
        }
    }
});

kumpulkanDOM.addEventListener('click', function () {
    for (let i = 0; i < soal.length; i++) {
        if (soal[i].jawabanUser === -1) {
            alert('Isi semua soal terlebih dahulu');
            return;
        }
    }
    hitungHasil();
});

function hitungHasil() {
    let b, s, n;

    b = hitungBenar();
    s = soal.length - b;
    n = (b / soal.length) * 100;

    benarDOM.innerHTML = 'Benar: ' + b;
    salahDOM.innerHTML = 'Salah: ' + s;
    nilaiDOM.innerHTML = 'Hasil: ' + n;

    hasilDOM.scrollIntoView();
}

function hitungBenar() {
    let benar = 0;
    for (let i = 0; i < soal.length; i++) {
        if (soal[i].jawaban === soal[i].jawabanUser) benar++;
    }
    return benar;
}