const { addNoteHandler } = require('./handler')

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => {}
    },
    // Routes Tambah data
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler
    }
]

module.exports = routes