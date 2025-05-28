import { Request, ResponseToolkit } from '@hapi/hapi';
import { swapiService } from '../services/swapi.service';
import Boom from '@hapi/boom';

class SwapiController {
  constructor() {
    this.search = this.search.bind(this);
    this.getById = this.getById.bind(this);
    this.getAllData = this.getAllData.bind(this);
  }

  search = async (req: Request, h: ResponseToolkit) => {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      throw Boom.badRequest('The "q" query parameter is required.');
    }
    try {
      const res = await swapiService.search(q);
      return h.response(res).code(200);

    } catch (error) {
      console.error(error)
      throw Boom.internal('An error occurred while searching.');
    }
  };

  getById = async (req: Request, h: ResponseToolkit) => {
    const { id, type } = req.params;
    try {
      const res = await swapiService.getById(type, id)
      if (!res) throw Boom.notFound('Data not found.');
      return h.response(res).code(200)
    } catch (error) {
      throw Boom.internal('An error occurred while getting data.');
    }
  }

  getAllData = async (req: Request, h: ResponseToolkit) => {
    try {
      const res = await swapiService.getAll();
      return h.response(res).code(200);

    } catch (error) {
      throw Boom.internal('An error occurred while getting all data.');
    }
  }
}

const swapiController = new SwapiController();
export { swapiController };
