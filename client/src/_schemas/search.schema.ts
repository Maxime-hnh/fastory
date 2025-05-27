import { z } from "zod";
import { Film, User, Globe, Atom, Car, Rocket, FilmIcon } from "lucide-react";
import { ElementType } from "react";

export enum Types {
  FILMS = "films",
  PEOPLE = "people",
  PLANETS = "planets",
  SPECIES = "species",
  VEHICLES = "vehicles",
  STARSHIPS = "starships"
}


export const TypesIconMap: Record<Types, { icon: ElementType, bgColorActive: string }> = {
  [Types.FILMS]: { icon: Film, bgColorActive: "data-[state=active]:bg-purple-500" },
  [Types.PEOPLE]: { icon: User, bgColorActive: "data-[state=active]:bg-emerald-500/80" },
  [Types.PLANETS]: { icon: Globe, bgColorActive: "data-[state=active]:bg-indigo-500/80" },
  [Types.SPECIES]: { icon: Atom, bgColorActive: "data-[state=active]:bg-emerald-500/80" },
  [Types.VEHICLES]: { icon: Car, bgColorActive: "data-[state=active]:bg-orange-500" },
  [Types.STARSHIPS]: { icon: Rocket, bgColorActive: "data-[state=active]:bg-red-500" },
}

export const SearchSchema = z.object({
  search: z.string()
})

export type Search = z.infer<typeof SearchSchema>;
