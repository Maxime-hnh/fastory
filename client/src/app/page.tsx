import SearchForm from "@/_components/SearchForm";
import SearchResults from "@/_components/SearchResults";

export default function Home() {


  return (
    <div className="h-[calc(100dvh-60px-1rem)]">  
      <SearchForm />  
      <SearchResults />
    </div>
  );
}
