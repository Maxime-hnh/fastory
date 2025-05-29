
import { SearchResult } from 'src/types/search-result.type';
import { SWAPI_TYPES, SwapiType } from '../constants/swapi';
import { SEARCHABLE_FIELDS } from '../constants/swapi';
import fs from 'fs/promises';

const SWAPI_URL = "https://swapi.info/api/";
const CACHE_FILE_PATH = './src/tmp/swapi.json';
const ONE_DAY = 1000 * 60 * 60 * 24;

class SwapiService {
  private cache: Record<SwapiType, any[]> = {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: []
  };
  private isReady = false;
  private lastUpdated: number = 0;

  constructor() {
  }

  public async init() {
    try {
      console.log('⏳ [SWAPI] Loading cache...');
      const json = await fs.readFile(CACHE_FILE_PATH, 'utf-8');
      const { lastUpdated, data } = JSON.parse(json);
      const isFresh = lastUpdated && (Date.now() - lastUpdated) < ONE_DAY;

      if (!data || !isFresh) throw new Error('❌ Cache invalid or expired');
      this.cache = data;
      this.lastUpdated = lastUpdated;
      this.isReady = true;
      console.log('✅ [SWAPI] Cache loaded');
    } catch (err) {
      console.log('⚠️ [SWAPI] No cache found, initial fetch required');
      await this.fetchAllTypesAndCache();
    }
  }


  private fetchAllTypesAndCache = async (): Promise<void> => {
    console.log('⏳ [SWAPI] Fetching all types and caching...');
    for (const type of SWAPI_TYPES) {
      const allItems = await this.fetchDataType(type);
      this.cache[type] = allItems;
    };
    this.lastUpdated = Date.now();
    await fs.writeFile(CACHE_FILE_PATH, JSON.stringify({
      lastUpdated: this.lastUpdated,
      data: this.cache,
    }, null, 2), 'utf-8');
    this.isReady = true;
    console.log('✅ [SWAPI] Cache saved, app is ready');
  };

  private fetchDataType = async (type: SwapiType): Promise<any> => {
    const res = await fetch(`${SWAPI_URL}${type}`)
    const data = await res.json();
    return data;
  };

  public async search(query: string): Promise<SearchResult[]> {
    // Check if cache is ready
    if (!this.isReady) await this.init();

    // Check if cache is expired
    const isExpired = Date.now() - this.lastUpdated > ONE_DAY;
    if (isExpired) {
      this.isReady = false;
      console.log('⏳ [SWAPI] Cache expired. Refreshing...');
      await this.fetchAllTypesAndCache();
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
    return results;
  };


  public getById = async (type: SwapiType, id: number): Promise<any> => {
    const res = await fetch(`${SWAPI_URL}${type}/${id}`)
    const data = await res.json();
    return data;
  }


  public getAll = async (): Promise<SearchResult[]> => {
    const promises = SWAPI_TYPES.map(
      async (type) => {
        const items = await this.fetchDataType(type);
        return { type, items };
      });

    return Promise.all(promises);
  }
}

const swapiService = new SwapiService();
export { swapiService }
