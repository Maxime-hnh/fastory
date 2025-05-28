import { Planet } from "@/_types/planets.type";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ArrowRight, Calendar, Mars, Venus } from "lucide-react";
import { formattedDate } from "@/_helpers/utils";
import { Button } from "../ui/button";
import { handleLinkClick } from "@/_helpers/utils";


interface PlanetsDetailsCardProps {
  data: Planet;
}

export default function PlanetsDetailsCard({ data }: PlanetsDetailsCardProps) {

  return (
    <Card id="planetsDetailsCard" >
      <CardContent className="flex flex-col sm:flex-row gap-4">

        {/*LeftContent*/}
        <div className="flex items-center flex-col gap-2">
          {/*Identity*/}
          <div className="flex items-center flex-col gap-2 border-b pb-2 border-border w-full">
            <div className="h-[100px] w-[100px] bg-muted rounded-sm">
            </div>
            <h1 className="text-xl font-semibold">{data.name}</h1>
            <span className="text-xs font-light text-foreground">Gravity : {data.gravity}</span>
            <span className="text-xs font-light text-foreground">Climate : {data.climate}</span>
            <span className="text-xs font-light text-foreground">{data.population ? `${data.population} citizens` : "Unknown"}</span>

          </div>

          {/*Details*/}
          <ul className="flex flex-col gap-2 border-b py-2 border-border w-full sm:border-none">
            <li className="text-xs">
              <span >Rotation Period : </span> {data.rotation_period}
            </li>
            <li className="text-xs">
              <span >Orbital Period : </span> {data.orbital_period}
            </li>
            <li className="text-xs">
              <span >Diameter : </span> {data.diameter}
            </li>
            <li className="text-xs">
              <span >Terrain : </span> {data.terrain}
            </li>
            <li className="text-xs">
              <span >Surface Water : </span> {data.surface_water}
            </li>
            <li className="text-xs">
              <span >Created : </span> {formattedDate(new Date(data.created))}
            </li>
            <li className="text-xs">
              <span >Edited : </span> {formattedDate(new Date(data.edited))}
            </li>
          </ul>
        </div>

        {/*RightContent*/}
        <div className="grid grid-cols-1 gap-2  sm:border-l sm:border-border sm:pl-2 md:pl-4 lg:pl-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="col-span-1">
            <span className="text-xs">Films : </span>
            {data.films.map((film) => (
              <div key={film} className="text-xs">
                <a href={film}>
                  {film}
                </a>
              </div>
            ))}
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Residents : </span>
            {data.residents.map((resident) => (
              <div key={resident} className="text-xs">
                <a href={resident}>
                  {resident}
                </a>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      {/*Footer*/}
      <CardFooter className="flex justify-center sm:justify-end">
        <Button onClick={() => handleLinkClick(data.url)}>
          Voir JSON
          <ArrowRight className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}
