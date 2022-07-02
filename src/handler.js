// Memanggil nanoid untuk membuat id yang unik berupa string
// const { response } = require('@hapi/hapi/lib/validation');
const { nanoid } = require('nanoid');

// Panggil array Notes yang menyimpan data-data
const notes = require('./notes');

// Menambhakna catatan
const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  // Buat properti lain yang belum kita dapatkan dari client, yaitu id, createAt & updatedAt
  const id = nanoid(16);
  const createAt = new Date().toISOString();
  const updatedAt = createAt;

  // Gabungkan semua properti kedalam satu data object
  const newNote = {
    id, title, tags, body, createAt, updatedAt,
  };

  // Masukkan data baru ke dalam notes
  notes.push(newNote);

  // Lakukan pengecekan menggunakan filter berdasarkan id,
  // apakah data baru sudah masuk atau belum ke dalam array notes
  const isSucces = notes.filter((note) => note.id === id).length > 0;

  // Setting respon
  // Jika isi dari isSucces > 0, artinya data berhasil ditambahkan
  if (isSucces) {
    const res = h.response({
      status: 'succes',
      message: `Telah berhasil ditambahkan sebuah catatan dengan id = ${id}`,
      data: {
        noteId: id,
      },
    });

    res.code(201);
    return res;
  }

  // Jika isi dari isSucces = 0, artinya data gagal ditambahkan
  const res = h.response({
    status: 'failed',
    message: 'Catatan gagal di tambahkan',

  });

  res.code(500);
  return res;
};

// Menampilkan semua Catatan
const getAllNotesHandler = () => ({
  status: 'succes',
  data: {
    notes,
  },

});

// Menampilkan catatan berdasarkan ID
const getNoteByIdHandler = (request, h) => {
  // Tangkap id yang dikirim dan tersimpan di params
  const { id } = request.params;

  // Lakukan filter terhadap notes berdasarkan id yang dikirim.
  // Fungsi ini akan mengembalikan data object
  const note = notes.filter((n) => n.id === id)[0];

  // Pastikan object note tidak bernilai undefind
  if (note !== undefined) {
    return {
      status: 'succes',
      data: {
        notes,
      },
    };
  }
  const res = h.response({
    status: 'failed',
    message: 'Catatan yang anda cari tidak ditemukan',
  });

  res.code(404);
  return res;
};

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };
