import { Server } from '@hapi/hapi';
import { authRoutes } from '../routes/auth.route';
import { swapiRoutes } from '../routes/swapi.route';

export const registerRoutes = async (server: Server) => {
  server.realm.modifiers.route.prefix = '/api';
  server.route([...authRoutes, ...swapiRoutes]);
};