const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');

const routes = [
  // Routes Menampilkan semua data
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  // Routes Menampilkan data berdasarkan ID
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  // Routes Tambah data
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;
