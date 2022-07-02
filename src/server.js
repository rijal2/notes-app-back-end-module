/* eslint-disable no-console */
// Memanggil Framework HAPI yang sudah di install
const Hapi = require('@hapi/hapi');

// Panggil Route
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    // Menerapkan cors origin agar webserver dapat membaca data yang tersimpan
    routes: {
      cors: {
        origin: ['*'],
      },

    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server sedang berjalan di ${server.info.uri}`);
};

init();
