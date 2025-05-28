import SwapiDetailsView from "@/_components/details-views/SwapiDetailsView";


/**
 * Dynamic Page to display SWAPI details.
 * This page retrieves the `type` and `id` parameters from the URL and passes them to the view component.
 */
export default async function DetailPage({ params }: { params: Promise<{ type: string; id: string }> }) {

  const { type, id } = await params

  return (
    <div>
      <SwapiDetailsView type={type} id={id} />
    </div>
  );
}
