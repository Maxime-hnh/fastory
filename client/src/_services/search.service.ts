import { authHeader } from "@/_helpers/auth-header"
import { handleResponse } from "@/_helpers/handle-response"

class SearchService {
  constructor() { }

  search = async (query: string): Promise<any> => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    }
    return await handleResponse(await fetch(`/api/search/?q=${encodeURI(query)}`, requestOptions));
  };
}

const searchService = new SearchService();
export { searchService };