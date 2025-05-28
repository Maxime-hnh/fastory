"use client"
import { RootState } from "@/_stores/store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useSelector } from "react-redux";
import PreviewCard from "./PreviewCard";
import { Fragment } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import PreviewCardSkeleton from "./PreviewCardSkeleton";
import { setActiveTab } from "@/_stores/searchSlice";
import { useDispatch } from "react-redux";
import { Types, TypesIconMap } from "@/_helpers/constants";

export default function TabsResults() {

  const dispatch = useDispatch();
  const { data, isLoading, activeTab } = useSelector((state: RootState) => state.search);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Tabs value={activeTab} onValueChange={(value) => dispatch(setActiveTab(value as Types))} className="mt-8">
          <TabsList className="mb-8 container bg-transparent flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {Object.values(Types).map((type, i) => {
              const Icon = TypesIconMap[type].icon;
              return (
                <TabsTrigger
                  key={i}
                  value={type}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground ${TypesIconMap[type].bgColorActive} data-[state=active]:text-primary`}
                >
                  <Icon className="h-auto w-4 shrink-0" />
                  {type}
                  <span className="ml-2 text-xs">{data?.find((cat) => cat.type === type)?.items.length}</span>
                </TabsTrigger>

              )
            })}
          </TabsList>
          {Object.values(Types).map((type, i) => {
            const category = data?.find((cat: any) => cat.type === type);
            return (
              <TabsContent key={i} value={type}>
                {isLoading && (
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
                )}
                {!isLoading && !category && (
                  <p className="text-center">Aucun résultat pour {type}...</p>
                )}
                {category && category.items.map((item, j) => (
                  <Fragment key={j}>
                    <PreviewCard data={item} type={category.type} />
                    <Separator className="w-full h-px bg-border" />
                  </Fragment>
                ))}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  )
}