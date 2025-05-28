"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/_components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

interface PageBreadcrumbsProps {
  pathNameLabelMap: Record<string, string>;
  excludedSegments?: string[];
}

export default function PageBreadcrumbs({ pathNameLabelMap, excludedSegments = [] }: PageBreadcrumbsProps) {

  const pathname = usePathname();
  const pathSegments = pathname
    .split('/')
    .filter((segment) => segment && !excludedSegments.includes(segment));

  return (
    <Breadcrumb className='mb-4'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const label = pathNameLabelMap[segment] || segment;

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {index !== pathSegments.length - 1 ? (
                  <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index !== pathSegments.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
};