import { SwapiTypeMap, SwapiType } from "../constants/swapi";

export type SearchResult<T extends SwapiType = SwapiType> = {
  type: T;
  items: SwapiTypeMap[T][];
};
