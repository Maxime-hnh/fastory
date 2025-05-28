"use client";

import { Alert, AlertDescription, AlertTitle } from "@/_components/ui/alert";
import { Button } from "@/_components/ui/button";
import { ArrowLeft, TriangleAlertIcon } from "lucide-react";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex justify-center items-center h-[calc(100dvh-60px-1rem)]">
      <Alert variant="destructive" className="max-w-[400px] flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <TriangleAlertIcon />
          <AlertTitle>Erreur 500 - Fiche introuvable</AlertTitle>
        </div>
        <AlertDescription className="w-full">
          <Button asChild className="w-full" variant={"outline"}>
            <Link href={"/"}>
              <ArrowLeft className="mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  )
}