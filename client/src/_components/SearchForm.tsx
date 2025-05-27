"use client"
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, SearchSchema } from "@/_schemas/search.schema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/_stores/store";
import { setSearchTerm, setLoading, setResults, setError } from "@/_stores/searchSlice";
import { searchService } from "@/_services/search.service";
import { RootState } from "@/_stores/store";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { debounce } from "@/_helpers/utils";
import { useMemo } from "react";

export default function SearchForm() {

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.search);
  const { search } = searchService;

  const form = useForm<Search>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: ""
    }
  })


  const debouncedSearch = useMemo(() => debounce(async (term: string) => {
    if (!term.trim()) return;
    if (term.length < 3) return;

    dispatch(setSearchTerm(term));
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const results = await searchService.search(term);
      dispatch(setResults(results));
    } catch (error: any) {
      dispatch(setError(error?.message || "Erreur inattendue"));
    } finally {
      dispatch(setLoading(false));
    }
  }, 500), [dispatch]);

  // ✅ Déclenche le debounce quand le champ change
  useEffect(() => {
    const subscription = form.watch(({ search }) => {
      debouncedSearch(search || "");
    });

    return () => subscription.unsubscribe();
  }, [form.watch, debouncedSearch]);


  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (

            <FormItem>
              <FormLabel>Recherche</FormLabel>
              <FormControl>
                <Input
                  placeholder="Luke"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}