'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
}

function Layouts({ children} : Props) {
  const pathName = usePathname();

  const hideSidebar = ['/me', '/board'].includes(pathName);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    });
  }, []);
  
  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10">
        <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-5">
          {!hideSidebar && (
            <header>
              
            </header>
          )}
          <main className="lg:max-w-[854px] transition-all scroll-smooth duration-300 w-full lg:min-h-screen no-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layouts