
var barang = ['pensil', 'buku', 'penggaris'];

// Menampilkan data barang
function ShowData() {
    var listBarang = document.getElementById('list-barang');

    listBarang.innerHTML = '';

    for (var i = 0; i < barang.length; i++) {
        var li = document.createElement('li');
        var tombolHapus = document.createElement('a');

        li.appendChild(document.createTextNode(barang[i] + ' '));

        tombolHapus.href = '#';
        tombolHapus.textContent = 'Hapus';

        tombolHapus.onclick = function(index) {
            return function(event) {
                event.preventDefault();
                DelData(index);
            };
        }(i);

        li.appendChild(tombolHapus);
        listBarang.appendChild(li);
    }
}

// Menambahkan data barang
function AddData() {
    var input = document.getElementById('nama');
    var namaBarang = input.value.trim();

    if (namaBarang === '') {
        alert('Nama barang tidak boleh kosong!');
        input.focus();
        return;
    }

    barang.push(namaBarang);
    input.value = '';

    ShowData();
    input.focus();
}

// Menghapus data barang
function DelData(id) {
    barang.splice(id, 1);
    ShowData();
}

// Menampilkan data saat halaman dibuka
ShowData();
