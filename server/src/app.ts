import { Server } from '@hapi/hapi';
import { registerRoutes } from './plugins/routes';
import dotenv from 'dotenv';
dotenv.config();

const init = async (): Promise<void> => {
  const server = new Server({
    port: parseInt(process.env.PORT || '3001'),
    host: 'localhost'
  });

  await registerRoutes(server);
  await server.start();
  console.log('🚀 Server running on :', server.info.uri);
};

process.on('unhandledRejection', (err: unknown) => {
  console.error(err);
  process.exit(1);
});

void init();
