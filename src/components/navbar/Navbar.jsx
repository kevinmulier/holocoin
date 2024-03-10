import { useState } from 'react';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarDesktopMenu from './NavbarDesktopMenu';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ['Home', 'About', 'Blog', 'Roadmap', 'Team', 'Rarity', 'Contact'];

  return (
    <nav className="justify-between w-full px-6 pt-8 pb-4 mx-auto navbar max-w-7xl">
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
  );
};

export default Navbar;
