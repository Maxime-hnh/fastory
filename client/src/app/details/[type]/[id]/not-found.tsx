import Link from "next/link";
import { Button } from "@/_components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-3xl font-bold  md:text-7xl">404 Not Found</h1>
      <Button asChild className="" variant={"outline"}>
        <Link href="/">
        <ArrowLeft className="mr-2" />
        Retour à l'accueil
        </Link>
      </Button>
    </div>
  )
};
