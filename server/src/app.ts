import { Server } from '@hapi/hapi';

const init = async (): Promise<void> => {
  const server = new Server({
    port: 3001,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Bienvenue dans la Rébellion, jeune Padawan !';
    }
  });

  await server.start();
  console.log('🚀 Serveur lancé sur :', server.info.uri);
};

// Gestion des erreurs globales
process.on('unhandledRejection', (err: unknown) => {
  console.error('Erreur non gérée :', err);
  process.exit(1);
});

void init();
