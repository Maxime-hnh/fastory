import { Skeleton } from "@/_components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/_components/ui/card";

export default function Loading() {
  return (
    <Card id="peopleDetailsCard" >
      <CardContent className="flex flex-col sm:flex-row gap-4">

        {/*LeftContent*/}
        <div className="flex items-center flex-col gap-2 sm:min-w-[272px]">
          {/*Identity*/}
          <div className="flex items-center flex-col gap-2 border-b pb-2 border-border w-full">
            <div className="h-[100px] w-[100px] bg-muted rounded-sm">
            </div>
            <h1 className="text-xl font-semibold"><Skeleton className="h-4 w-full" /></h1>
            <span className="text-xs font-light text-foreground"><Skeleton className="h-4 w-[50px]" /></span>
            <span className="text-xs font-light text-foreground"><Skeleton className="h-4 w-[50px]" /></span>
            <span className="text-xs font-light text-foreground"><Skeleton className="h-4 w-[50px]" /></span>
          </div>

          {/*Details*/}
          <ul className="flex flex-col gap-2 border-b py-2 border-border w-full sm:border-none">
            <li className="text-xs">
              <Skeleton className="h-4 w-full" />
            </li>
            <li className="text-xs">
              <Skeleton className="h-4 w-full" />
            </li>
            <li className="text-xs">
              <Skeleton className="h-4 w-full" />
            </li>
            <li className="text-xs">
              <Skeleton className="h-4 w-full" />
            </li>
            <li className="text-xs">
              <Skeleton className="h-4 w-full" />
            </li>
            <li className="text-xs">
              <Skeleton className="h-4 w-full" />
            </li>
          </ul>
        </div>
        {/*RightContent*/}
        <div className="w-full grid grid-cols-1 gap-2  sm:border-l sm:border-border sm:pl-2 md:pl-4 lg:pl-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="col-span-1">
            <span className="text-xs">Films : </span>
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Species : </span>
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Vehicles : </span>
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Starships : </span>
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="col-span-1 gap-2">
            <span className="text-xs">Starships : </span>
            <Skeleton className="h-4 w-full" />
          </div>
        </div>

      </CardContent >

      {/*Footer*/}
      < CardFooter className="flex justify-center sm:justify-end" >
        <Skeleton className="h-8 w-[200px]" />
      </CardFooter >
    </Card >

  );
}
