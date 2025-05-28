"use client"
import { Input } from "./ui/input";
import { Types } from "@/_schemas/search.schema";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/_stores/store";
import { setIsLoading, setResults, setError, setActiveTab, resetSearch } from "@/_stores/searchSlice";
import { swapiService } from "@/_services/swapi.service";
import { RootState } from "@/_stores/store";
import { useEffect, useState } from "react";
import { debounce } from "@/_helpers/utils";
import { useMemo } from "react";
import { Loader2Icon, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SearchForm() {

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, activeTab } = useSelector((state: RootState) => state.search);
  const { search } = swapiService;
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  const debouncedSearch = useMemo(
    () =>
      debounce(async (searchValue: string) => {
        const cleanedSearchValue = searchValue.trim();

        if (!cleanedSearchValue || cleanedSearchValue.length < 2) {
          dispatch(resetSearch());
          return;
        }
        dispatch(setIsLoading(true));
        dispatch(setError(null));

        try {
          const results = await search(cleanedSearchValue);
          dispatch(setResults(results));
          if (results.length > 0) {
            const firstType = results[0].type;
            const currentTypes = results.map((cat: any) => cat.type);
            if (!currentTypes.includes(activeTab)) {
              dispatch(setActiveTab(firstType));
            }
          }
        } catch (error: any) {
          dispatch(setError(error?.message || "Erreur inattendue"));
        } finally {
          dispatch(setIsLoading(false));
        }
      }, 500),
    [dispatch, activeTab]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };


  useEffect(() => {
    dispatch(resetSearch());
    setQuery("");
  }, [pathname]);


  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full flex justify-center">
      <div className="relative w-full max-w-[500px] mt-8">
        {isLoading
          ? <Loader2Icon
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin"
          />
          : <SearchIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
          />
        }
        <Input
          value={query}
          onChange={handleChange}
          className="pl-10 h-[40px] w-full"
          placeholder="Search..."
        />
      </div>
    </form>
  )
}