import { useState } from 'react';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarDesktopMenu from './NavbarDesktopMenu';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ['Home', 'About', 'Blog', 'Roadmap', 'Team', 'Rarity', 'Contact'];

  return (
    <header className="lg:border-b border-black/30 lg:shadow-[0.0px_4.0px_4.0px_rgba(0,0,0,0.38)] max-lg:sticky max-lg:top-0 max-lg:z-[100] backdrop-blur-lg">
      <nav className="justify-between w-full px-7 md:px-8 pt-8 pb-4 mx-auto max-lg:pt-4 navbar max-w-[1512px]">
        <div className="flex gap-[72px] items-center">
          <a href="#" className="flex items-baseline gap-2 text-lg font-bold tracking-widest text-primary">
            <img src="/logo/logo.svg" alt="Holocoin logo" className="h-4" />
            HOLOCOIN
          </a>
          <NavbarDesktopMenu menuItems={menuItems} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
        <button
          className="min-h-0 py-3 font-semibold rounded-full btn btn-secondary text-primary max-lg:hidden h-fit"
          aria-label="Buy Holocoin">
          Buy Holocoin
        </button>
        <NavbarMobileMenu menuItems={menuItems} />
      </nav>
    </header>
  );
};

export default Navbar;
