import { Film } from "@/_types/films.type";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { formattedDate } from "@/_helpers/utils";
import { Button } from "../ui/button";
import { handleLinkClick } from "@/_helpers/utils";


interface FilmsDetailsCardProps {
  data: Film;
}
export default function FilmsDetailsCard({ data }: FilmsDetailsCardProps) {

  return (
    <Card id="filmsDetailsCard" >
      <CardContent className="flex flex-col sm:flex-row gap-4">

        {/*LeftContent*/}
        <div className="flex items-center flex-col gap-2 sm:max-w-[272px]">
          {/*Identity*/}
          <div className="flex items-center flex-col gap-2 border-b pb-2 border-border w-full">
            <div className="h-[100px] w-[100px] bg-muted rounded-sm">
            </div>
            <h1 className="text-xl font-semibold">{data.title}</h1>
            <span className="text-xs font-light text-foreground">Director : {data.director}</span>
            <span className="flex flex-row gap-2 items-center text-xs font-light text-foreground">
              <Calendar className="h-4 w-4" />
              {data.release_date}
            </span>
            <span className="text-xs font-light text-foreground">Producer : {data.producer}</span>

          </div>

          {/*Details*/}
          <ul className="flex flex-col gap-2 border-b py-2 border-border w-full sm:border-none">
            <li className="text-xs">
              <span >Opening Crawl : </span> {data.opening_crawl}
            </li>
            <li className="text-xs">
              <span >Episode ID : </span> {data.episode_id}
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
            <span className="text-xs">Characters : </span>
            {data.characters.map((character) => (
              <div key={character} className="text-xs">
                <a href={character}>
                  {character}
                </a>
              </div>
            ))}
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Planets : </span>
            {data.planets.map((planet) => (
              <div key={planet} className="text-xs">
                <a href={planet}>
                  {planet}
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