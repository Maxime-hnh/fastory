import SearchForm from "@/_components/form/SearchForm";
import TabsResults from "@/_components/TabsResults";
import LoginForm from "@/_components/form/LoginForm";

export default function Home() {


  return (
    <section className="h-[calc(100dvh-60px-1rem)]">
      <LoginForm />
      <h1 className="text-6xl font-[900] text-center text-yellow-500 sm:text-8xl ">SWAPI</h1>
      <SearchForm />
      <TabsResults />
    </section>
  );
}
