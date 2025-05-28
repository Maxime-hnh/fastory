import { swapiController } from '../controllers/swapi.controller';
import { ServerRoute } from '@hapi/hapi';

const swapiRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/swapi/search',
    handler: swapiController.search
  },
  {
    method: 'GET',
    path: '/swapi/details/{type}/{id}',
    handler: swapiController.getById
  },
  {
    method: 'GET',
    path: '/swapi/all',
    handler: swapiController.getAllData
  }
  
];

export { swapiRoutes };