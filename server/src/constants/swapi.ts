import { People } from "src/types/people.type";
import { Planet } from "src/types/planets.type";
import { Film } from "src/types/films.type";
import { Specie } from "src/types/species.type";
import { Vehicle } from "src/types/vehicles.type";
import { Starship } from "src/types/starships.type";

export const SWAPI_TYPES = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'] as const;
export type SwapiType = typeof SWAPI_TYPES[number];

export const SEARCHABLE_FIELDS: Record<SwapiType, string[]> = {
  films: ['title', 'producer', 'director'],
  people: ['name'],
  planets: ['name'],
  species: ['name', 'classification'],
  vehicles: ['name', 'model', 'manufacturer'],
  starships: ['name', 'model', 'manufacturer'],
};

export interface SwapiTypeMap {
  people: People;
  planets: Planet;
  films: Film;
  species: Specie;
  vehicles: Vehicle;
  starships: Starship;
}
