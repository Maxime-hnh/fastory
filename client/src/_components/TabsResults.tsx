"use client"
import { RootState } from "@/_stores/store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useSelector } from "react-redux";
import PreviewCard from "./PreviewCard";
import { Fragment } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { setActiveTab } from "@/_stores/searchSlice";
import { useDispatch } from "react-redux";
import { Types, TypesIconMap } from "@/_helpers/constants";
import { ScrollArea } from "./ui/scroll-area";

export default function TabsResults() {

  const dispatch = useDispatch();
  const { data, isLoading, activeTab } = useSelector((state: RootState) => state.search);

  return (
    <section className="py-0 md:py-16">
      <div className="container mx-auto">
        <Tabs value={activeTab} onValueChange={(value) => dispatch(setActiveTab(value as Types))} className="mt-8">
          <TabsList className="mb-8 container bg-transparent flex flex-row overflow-x-auto items-center justify-center gap-4 lg:gap-10">
            {Object.values(Types).map((type, i) => {
              const Icon = TypesIconMap[type].icon;
              return (
                <TabsTrigger
                  key={i}
                  value={type}
                  className={`flex items-center justify-center gap-2 rounded-xl px-2 lg:px-4 py-3 text-sm font-semibold text-muted-foreground ${TypesIconMap[type].bgColorActive} data-[state=active]:text-primary`}
                >
                  <Icon className="h-auto w-4 shrink-0" />
                  {type}
                  <span className="ml-2 text-xs">{data?.find((cat) => cat.type === type)?.items.length}</span>
                </TabsTrigger>

              )
            })}
          </TabsList>
          {data.map((d, i) => (
            < TabsContent key={i} value={d.type}>
              <ScrollArea className="w-full h-[400px] lg:h-[500px]">
                {!isLoading && d.items.length < 1 && (
                  <p className="text-center">Aucun résultat pour {d.type}...</p>
                )}
                {d.items.map((item, j) => (
                  <Fragment key={j}>
                    <PreviewCard data={item} type={d.type} />
                    <Separator className="w-full h-px bg-border" />
                  </Fragment>
                ))}
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section >
  )
}