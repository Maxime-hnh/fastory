import SearchForm from "@/_components/SearchForm";
import TabsResults from "@/_components/TabsResults";


export default function Home() {

  return (
    <div className="h-[calc(100dvh-60px-1rem)]">
      <SearchForm />
      <TabsResults />
    </div>
  );
}
