# notes-app-back-end-module
MODUL MEMBUAT aplikasi back end sederhana

1. Lakukan inisialisai dengan menjalankan perintah " npm init -y "
2. Buat file end point server.js
3. Install nodemon
4. Buat file .gitignore, agar folder / file tertentu tidak terseleksi oleh git
5. Install eslint

//MEMBUAT HTTP WEBSERVER
6. Membuat HTTP web server menggunakan framework HAPI
    Install hapi dengan perintah
        npm install @hapi/hapi
7. Gunakan Hapi pada file entri point, yaitu server.js
8. Buat konfigurasi dengan menggunakan const init
 
//MEMBUAT ROUTE
1. Membuat aplikasi dapat menampilkan/menambah/update-edit/hapus data
2. Buat route dari sebuah array yang di dalamnya terdiri dari banyak object.
3. Masing-masing object akan terdiri dari 3 properti, yaitu methode, path, dan handler.
4. Untuk handler isi dengan arraw function kosong saja karena functionnya akan dibuat pada berkas yang terpisah.

//MEMBUAT DATA PADA FILE notes.js
1. Buat Array kosong, agar kedepan bisa diisi data
2. Jangan lupa export sehingga bisa digunakan di server.js

//MEMBUAT HANDLE yang menangani Tambah Data
1. Pada Handler.js buat function addNoteHandler, untuk menangani penambahan data
2. Export functiontersebut.
3. Tuliskan logika dalam menangani penambahan data.

4. Client mengirimkan title, tags, body. Untuk properti yg lain (seperti id, createAt, updatedAt) kita olah sendiri.
5. Install nanoid untuk membuat id unik berupa string.
