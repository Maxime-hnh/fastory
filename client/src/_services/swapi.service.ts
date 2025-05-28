import { authHeader } from "@/_helpers/auth-header"
import { handleResponse } from "@/_helpers/handle-response"

class SwapiService {
  constructor() { }

  search = async (query: string): Promise<any> => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    }
    return await handleResponse(await fetch(`/api/swapi/search/?q=${encodeURI(query)}`, requestOptions));
  };

  getById = async (type: string, id: string): Promise<any> => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    }
    return await handleResponse(await fetch(`/api/swapi/details/${type}/${id}`, requestOptions));
  };
}

const swapiService = new SwapiService();
export { swapiService };