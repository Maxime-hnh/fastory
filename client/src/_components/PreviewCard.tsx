import { ArrowRight } from "lucide-react";
import { formattedDate } from "@/_helpers/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { Types, TypesIconMap } from "@/_schemas/search.schema";

interface PreviewCardProps {
  data: any;
  type: Types;
}

export default function PreviewCard({ data, type }: PreviewCardProps) {

  const Icon = TypesIconMap[type].icon;

  return (
    <div className="grid items-center gap-4 px-4 py-5 md:grid-cols-4">
      <div className="flex items-center gap-2 order-2 md:order-none">
        <div className="flex items-center justify-center rounded-md h-14 w-16 bg-muted">
          <Icon />
        </div>
        <div className="flex flex-col h-full justify-between">
          <h3 className="font-semibold">{data.title || data.name}</h3>
          <p className="text-xs text-muted-foreground">
            {data.release_date ? formattedDate(data.release_date)
              : data.classification
                || data.model
                || data.birth_year
                || ""
            }
          </p>
        </div>
      </div>
      <p className="order-1 md:order-none md:col-span-2">
        {data.director
          || data.manufacturer
          || ""
        }
      </p>
      <div className="order-3 md:order-none inline-flex items-center shrink-0 justify-center sm:justify-end">
        <Button asChild className="  !text-secondary">
          <Link href="/">
            En savoir plus
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}