export const handleLinkClick = (link: string) => {
  window.open(link, '_blank');
};

export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function formattedDate(date: Date) {
  return new Intl.DateTimeFormat(
    'fr-FR',
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }
  ).format(date)
}