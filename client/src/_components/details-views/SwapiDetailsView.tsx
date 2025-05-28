"use client"

import { useSwapiQuery } from "@/_queries/useSwapiQuery";
import { notFound } from "next/navigation";
import { Types } from "@/_schemas/search.schema";
import PeopleDetailsCard from "./PeopleDetailsCard";
import FilmsDetailsCard from "./FilmsDetailsCard";
import PlanetsDetailsCard from "./PlanetsDetailsCard";
import SpeciesDetailsCard from "./SpeciesDetailsCard";
import StarshipsDetailsCard from "./StarshipsDetailsCard";
import VehiclesDetailsCard from "./VehiclesDetailsCard";


interface SwapiDetailsViewProps {
  type: string;
  id: string;
}

/**
 * Central component for rendering detailed views of SWAPI objects.
 * It uses the `type` to route to the appropriate detail component (`PeopleDetailsCard`, etc.)
 */
export default function SwapiDetailsView({ type, id }: SwapiDetailsViewProps) {

  const { data, isLoading, error } = useSwapiQuery(type, id);

  if (isLoading) return <div>Chargement...</div>
  if (!data) return notFound()
  if (error) throw new Error()


  switch (type) {
    case Types.PEOPLE:
      return <PeopleDetailsCard data={data} />;
    case Types.FILMS:
      return <FilmsDetailsCard data={data} />;
    case Types.PLANETS:
      return <PlanetsDetailsCard data={data} />;
    case Types.SPECIES:
      return <SpeciesDetailsCard data={data} />;
    case Types.STARSHIPS:
      return <StarshipsDetailsCard data={data} />;
    case Types.VEHICLES:
      return <VehiclesDetailsCard data={data} />;
    default:
      return <div>Details view for {type}</div>
  }
}