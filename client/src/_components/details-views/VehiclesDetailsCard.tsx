import { Vehicle } from "@/_types/vehicles.type";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { formattedDate } from "@/_helpers/utils";
import { Button } from "../ui/button";
import { handleLinkClick } from "@/_helpers/utils";

interface VehiclesDetailsCardProps {
  data: Vehicle;
}
export default function VehiclesDetailsCard({ data }: VehiclesDetailsCardProps) {

  return (
    <Card id="vehiclesDetailsCard" >
    <CardContent className="flex flex-col sm:flex-row gap-4">

      {/*LeftContent*/}
      <div className="flex items-center flex-col gap-2">
        {/*Identity*/}
        <div className="flex items-center flex-col gap-2 border-b pb-2 border-border w-full">
          <div className="h-[100px] w-[100px] bg-muted rounded-sm">
          </div>
          <h1 className="text-xl font-semibold">{data.name}</h1>
          <span className="text-xs font-light text-foreground">{data.model}</span>
          <span className="text-xs font-light text-foreground">{data.length} m</span>
          <span className="text-xs font-light text-foreground">{data.manufacturer}</span>
          <span className="text-xs font-light text-foreground">{data.cost_in_credits} credits</span>
        </div>

        {/*Details*/}
        <ul className="flex flex-col gap-2 border-b py-2 border-border w-full sm:border-none">
          <li className="text-xs">
            <span >Max atmosphering speed : </span> {data.max_atmosphering_speed}
          </li>
          <li className="text-xs">
            <span >Crew : </span> {data.crew}
          </li>
          <li className="text-xs">
            <span >Passengers : </span> {data.passengers}
          </li>
          <li className="text-xs">
            <span >Cargo capacity : </span> {data.cargo_capacity}
          </li>
          <li className="text-xs">
            <span >Consumables : </span> {data.consumables}
          </li>
          <li className="text-xs">
            <span >Vehicle class : </span> {data.vehicle_class}
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
          <span className="text-xs">Pilots : </span>
          {data.pilots.map((pilot) => (
            <div key={pilot} className="text-xs">
              <a href={pilot}>
                {pilot}
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
