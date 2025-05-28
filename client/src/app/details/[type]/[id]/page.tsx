import SwapiDetailsView from "@/_components/details-views/SwapiDetailsView";
import PageBreadcrumbs from "@/_components/PageBreadcrumbs";


/**
 * Dynamic Page to display SWAPI details.
 * This page retrieves the `type` and `id` parameters from the URL and passes them to the view component.
 */
export default async function DetailPage({ params }: { params: Promise<{ type: string; id: string }> }) {

  const { type, id } = await params
  const pathNameLabelMap: Record<string, string> = {
    'people': 'People',
    'films': 'Films',
    'planets': 'Planets',
    'species': 'Species',
    'starships': 'Starships',
    'vehicles': 'Vehicles'
  }
  return (
    <div className="mx-4">
      <PageBreadcrumbs pathNameLabelMap={pathNameLabelMap} excludedSegments={["details"]} />
      <SwapiDetailsView type={type} id={id} />
    </div>
  );
}
