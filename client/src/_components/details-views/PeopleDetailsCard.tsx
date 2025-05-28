import { People } from "@/_types/people.type";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ArrowRight, Calendar, Mars, Venus } from "lucide-react";
import { formattedDate } from "@/_helpers/utils";
import { Button } from "../ui/button";
import { handleLinkClick } from "@/_helpers/utils";

interface PeopleDetailsCardProps {
  data: People;
}

/**
 * Component to display details for a person.
 * Receives a `People` object and displays its main properties.
 */
export default function PeopleDetailsCard({ data }: PeopleDetailsCardProps) {

  return (
    <Card id="peopleDetailsCard" >
      <CardContent className="flex flex-col sm:flex-row gap-4">

        {/*LeftContent*/}
        <div className="flex items-center flex-col gap-2 sm:min-w-[272px]">
          {/*Identity*/}
          <div className="flex items-center flex-col gap-2 border-b pb-2 border-border w-full">
            <div className="h-[100px] w-[100px] bg-muted rounded-sm">
            </div>
            <h1 className="text-xl font-semibold">{data.name}</h1>
            <span className="text-xs font-light text-foreground">{data.height} cms, {data.mass} kgs</span>
            <span className="flex flex-row gap-2 items-center text-xs font-light text-foreground">
              <Calendar className="h-4 w-4" />
              {data.birth_year}
            </span>
            <span className="flex flex-row gap-2 items-center text-xs font-light text-foreground">
              {data.gender === "male"
                ? <Mars className="h-4 w-4" />
                : <Venus className="h-4 w-4" />
              }

              {data.gender}
            </span>
          </div>

          {/*Details*/}
          <ul className="flex flex-col gap-2 border-b py-2 border-border w-full sm:border-none">
            <li className="text-xs">
              <span >Hair Color : </span> {data.hair_color}
            </li>
            <li className="text-xs">
              <span >Skin Color : </span> {data.skin_color}
            </li>
            <li className="text-xs">
              <span >Eye Color : </span> {data.eye_color}
            </li>
            <li className="text-xs">
              <span >Home World : </span> {data.homeworld}
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
        <div className="w-full grid grid-cols-1 gap-2  sm:border-l sm:border-border sm:pl-2 md:pl-4 lg:pl-8 md:grid-cols-2 lg:grid-cols-3">

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
            <span className="text-xs">Species : </span>
            {data.species.map((specie) => (
              <div key={specie} className="text-xs">
                <a href={specie}>
                  {specie}
                </a>
              </div>
            ))}
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Vehicles : </span>
            {data.vehicles.map((vehicle) => (
              <div key={vehicle} className="text-xs">
                <a href={vehicle}>
                  {vehicle}
                </a>
              </div>
            ))}
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Starships : </span>
            {data.starships.map((starship) => (
              <div key={starship} className="text-xs">
                <a href={starship}>
                  {starship}
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
