
import { SearchResult } from 'src/types/search-result.type';
import { SWAPI_TYPES } from '../constants/swapi';
import { SEARCHABLE_FIELDS } from '../constants/swapi';

type SwapiDataCache = {
  [type: string]: any[];
};

class SwapiService {
  private cache: SwapiDataCache = {};
  private isLoading = false;

  constructor() {
  }


  private fetchAllTypesAndCache = async (): Promise<void> => {
    for (const type of SWAPI_TYPES) {
      const allItems = await this.fetchDataType(type);
      this.cache[type] = allItems;
    };
  };

  private fetchDataType = async (type: string): Promise<any> => {
    const res = await fetch(`${process.env.SWAPI_URL}${type}`)
    const data = await res.json();
    return data;
  };

  public async searchAll(query: string): Promise<SearchResult[]> {
    if (Object.keys(this.cache).length === 0) {
      if (!this.isLoading) {
        this.isLoading = true;
        await this.fetchAllTypesAndCache();
        this.isLoading = false;
      } else {
        while (this.isLoading) {
          await new Promise((res) => setTimeout(res, 100));
        }
      }
    }
    const lowerQuery = query.toLowerCase();

    const results = SWAPI_TYPES.map(type => {
      const fields = SEARCHABLE_FIELDS[type];

      const items = this.cache[type].filter((item) => {
        return fields.some((field) => {
          const value = item[field];
          return value?.toLowerCase?.().includes(lowerQuery)
        })
      })
      return { type, items };
    })
    const filteredResult = results.filter((item) => item.items.length > 0)
    return filteredResult;
  };



  public getAll = async (): Promise<SearchResult[]> => {
    const promises = SWAPI_TYPES.map(async (type) => {
      const items = await this.fetchDataType(type);
      return { type, items };
    });

    return Promise.all(promises);
  }
}

const swapiService = new SwapiService();
export { swapiService }
