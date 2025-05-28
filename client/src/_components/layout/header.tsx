
import Image from 'next/image';

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b flex items-center justify-between h-[60px] py-0 sm:py-1 px-0 sm:px-4 md:px-24 lg:px-40">
      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-8 w-full justify-between">
        <div className='flex items-center gap-4'>
          <Image src="/favicon.ico" width={40} height={40} alt="logo" className="rounded-full" />
          <span className="font-bold text-xl">Swapi.</span>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex items-center justify-center w-full">
        <Image src="/favicon.ico" width={50} height={50} alt="logo" className="rounded-full" />
      </div>
    </header>
  );
}
