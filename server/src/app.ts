import { Request, ResponseToolkit, Server } from '@hapi/hapi';
import { registerRoutes } from './plugins/routes';
import dotenv from 'dotenv';
dotenv.config();

const user = {
  id: 1,
  username: process.env.AUTH_USERNAME,
  password: process.env.AUTH_PASSWORD,
  role: "superadmin"
};


const validate = async (req: Request, username: string, password: string, h: ResponseToolkit) => {

  const isValid = username === user.username && password === user.password;
  if (!isValid) return { credentials: null, isValid: false };

  const credentials = { id: user.id, name: user.username, role: user.role }
  return { isValid, credentials }
}

const init = async (): Promise<void> => {
  const server = new Server({
    port: parseInt(process.env.PORT || '3001'),
    host: 'localhost'
  });
  await server.register(require('@hapi/basic'));
  server.auth.strategy('simple', 'basic', { validate });
  server.auth.default('simple');

  await registerRoutes(server);
  await server.start();
  console.log('🚀 Server running on :', server.info.uri);
};

process.on('unhandledRejection', (err: unknown) => {
  console.error(err);
  process.exit(1);
});

void init();
