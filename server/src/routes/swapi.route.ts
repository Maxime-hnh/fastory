import { swapiController } from '../controllers/swapi.controller';
import { ServerRoute } from '@hapi/hapi';

const swapiRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/search',
    handler: swapiController.search
  },
  {
    method: 'GET',
    path: '/details/{type}/{id}',
    handler: swapiController.getById
  },
  {
    method: 'GET',
    path: '/all',
    handler: swapiController.getAllData
  }
];

export { swapiRoutes };