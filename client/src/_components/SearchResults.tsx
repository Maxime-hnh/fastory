"use client"
import { RootState } from "@/_stores/store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useSelector } from "react-redux";
import PreviewCard from "./PreviewCard";
import { Fragment } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TypesIconMap } from "@/_schemas/search.schema";
import PreviewCardSkeleton from "./PreviewCardSkeleton";

export default function SearchResults() {
  const { data, isLoading, error } = useSelector((state: RootState) => state.search);

  if (isLoading) {
    return (
      <div className="py-16">
        <div className="container px-0 md:px-8">
          {[...Array(3)].map((_, i) => (
            <Fragment key={i}>
              <PreviewCardSkeleton />
              <Separator className="w-full h-px bg-border" />
            </Fragment>
          ))}
        </div>
      </div>
    )
  }

  if (error) return <p className="text-red-500">{error}</p>;
  if (!data?.length) return <p>Aucun résultat</p>;

  return (
    <section className="py-16">
      <div className="container px-0 md:px-8">
        <Tabs defaultValue={data[0].type} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {data.map((category, i) => {
              const Icon = TypesIconMap[category.type].icon;
              return (
                <TabsTrigger
                  key={i}
                  value={category.type}
                  className={`cursor-pointer flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground ${TypesIconMap[category.type].bgColorActive} data-[state=active]:text-white`}
                >
                  <Icon />
                  {category.type}
                </TabsTrigger>

              )
            })}
          </TabsList>
          {data.map((category, i) => (
            <TabsContent
              key={i}
              value={category.type}
              className="flex flex-col gap-4"
            >
              {category.items.map((item, i) => (
                <Fragment key={i}>
                  <PreviewCard data={item} type={category.type} />
                  <Separator className="w-full h-px bg-border" />
                </Fragment>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section >
  );
}
