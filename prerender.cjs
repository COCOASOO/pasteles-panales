const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new PrerenderSPAPlugin({
      // Indica la ruta de salida de tu proyecto
      staticDir: path.join(__dirname, 'dist'), // Cambia 'dist' si tu carpeta de salida es diferente
      // Las rutas que deseas prerenderizar
      routes: [
        '/',
        '/productos',
        '/como-lo-hacemos',
        '/blog',
        '/contacto',
        // Agrega más rutas según sea necesario
      ],
      // Opciones adicionales
      renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
        headless: true,
      }),
    }),
  ],
};
