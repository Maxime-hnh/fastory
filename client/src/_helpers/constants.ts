import { Film, User, Globe, Atom, Car, Rocket } from "lucide-react";
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
  [Types.FILMS]: { icon: Film, bgColorActive: "data-[state=active]:bg-purple-600" },
  [Types.PEOPLE]: { icon: User, bgColorActive: "data-[state=active]:bg-emerald-600" },
  [Types.PLANETS]: { icon: Globe, bgColorActive: "data-[state=active]:bg-indigo-600" },
  [Types.SPECIES]: { icon: Atom, bgColorActive: "data-[state=active]:bg-emerald-600" },
  [Types.VEHICLES]: { icon: Car, bgColorActive: "data-[state=active]:bg-orange-600" },
  [Types.STARSHIPS]: { icon: Rocket, bgColorActive: "data-[state=active]:bg-red-800" },
}