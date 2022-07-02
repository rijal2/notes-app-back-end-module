const {
  addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, delNoteByIdHandler,
} = require('./handler');

const routes = [
  // Routes Menampilkan data berdasarkan ID
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  // Routes Menampilkan semua data
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  // Routes Tambah data
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  // Mengubah data berdasarkan id
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  // Menghapus catatan berdasarkan id
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: delNoteByIdHandler,
  },
];

module.exports = routes;
