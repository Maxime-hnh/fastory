import { Specie } from "@/_types/species.type";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ArrowRight, Calendar, Mars, Venus } from "lucide-react";
import { formattedDate } from "@/_helpers/utils";
import { Button } from "../ui/button";
import { handleLinkClick } from "@/_helpers/utils";

interface SpeciesDetailsCardProps {
  data: Specie;
}

export default function SpeciesDetailsCard({ data }: SpeciesDetailsCardProps) {

  return (
    <Card id="speciesDetailsCard" >
      <CardContent className="flex flex-col sm:flex-row gap-4">

        {/*LeftContent*/}
        <div className="flex items-center flex-col gap-2 sm:min-w-[272px]">
          {/*Identity*/}
          <div className="flex items-center flex-col gap-2 border-b pb-2 border-border w-full">
            <div className="h-[100px] w-[100px] bg-muted rounded-sm">
            </div>
            <h1 className="text-xl font-semibold">{data.name}</h1>
            <span className="text-xs font-light text-foreground">Designation : {data.designation}</span>
            <span className="text-xs font-light text-foreground">Classification : {data.classification}</span>

          </div>

          {/*Details*/}
          <ul className="flex flex-col gap-2 border-b py-2 border-border w-full sm:border-none">
            <li className="text-xs">
              <span >Language : </span> {data.language}
            </li>
            <li className="text-xs">
              <span >Average Height : </span> {data.average_height}
            </li>
            <li className="text-xs">
              <span >Average Lifespan : </span> {data.average_lifespan}
            </li>
            <li className="text-xs">
              <span >Skin Colors : </span> {data.skin_colors}
            </li>
            <li className="text-xs">
              <span >Hair Colors : </span> {data.hair_colors}
            </li>
            <li className="text-xs">
              <span >Eye Colors : </span> {data.eye_colors}
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
            <span className="text-xs">People : </span>
            {data.people.map((people) => (
              <div key={people} className="text-xs">
                <a href={people}>
                  {people}
                </a>
              </div>
            ))}
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Planet : </span>
              <div className="text-xs">
                <a href={data.homeworld}>
                  {data.homeworld}
                </a>
              </div>
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
