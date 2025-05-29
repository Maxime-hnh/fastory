import { swapiService } from "@/_services/swapi.service"
import { useQuery } from "@tanstack/react-query"

export const useSwapiQuery = (type: string, id: string) => {
  return useQuery<any, Error, any, [string, string, string]>({
    queryKey: ['details', type, id],
    queryFn: () => swapiService.getById(type, id),
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24,
  })
}
