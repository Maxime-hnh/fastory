import { Request, ResponseToolkit } from '@hapi/hapi';
import { swapiService } from '../services/swapi.service';

class SwapiController {
  constructor() {
    this.search = this.search.bind(this);
    this.getById = this.getById.bind(this);
    this.getAllData = this.getAllData.bind(this);
  }

  search = async (req: Request, h: ResponseToolkit) => {
    const { q } = req.query;
    if (!q) {
      return h.response({ error: 'Query parameter is missing' }).code(400);
    }
    try {
      const res = await swapiService.search(q);
      return h.response(res).code(200);

    } catch (error) {
      console.error(error)
      return h.response().code(500);
    }
  };

  getById = async (req: Request, h: ResponseToolkit) => {
    const { id, type } = req.params;
    try {
      const res = await swapiService.getById(type, id)
      if (!res) return h.response().code(404)
      return h.response(res).code(200)
    } catch (error) {
      return h.response().code(500)
    }
  }

  getAllData = async (req: Request, h: ResponseToolkit) => {
    try {
      const res = await swapiService.getAll();
      return h.response(res).code(200);

    } catch (error) {
      return h.response().code(500);
    }
  }
}

const swapiController = new SwapiController();
export { swapiController };
