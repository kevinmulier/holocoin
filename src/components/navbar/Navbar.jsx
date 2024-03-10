import { AlignJustify } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ['Home', 'About', 'Blog', 'Roadmap', 'Team', 'Rarity', 'Contact'];

  return (
    <nav className="justify-between w-full px-6 pt-8 pb-4 mx-auto navbar max-w-7xl">
      <div className="flex gap-[72px] items-center">
        <a href="#" className="flex items-baseline gap-2 text-lg font-bold tracking-widest">
          <img src="/logo/logo.svg" alt="Holocoin logo" className="h-4" />
          HOLOCOIN
        </a>
        <div className="hidden lg:flex">
          <ul className="flex">
            {menuItems.map((item, i) => (
              <li
                key={item}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(0)}
                className="relative flex flex-col items-center gap-1 font-semibold hover:text-primary hover:font-extrabold text-primary/60">
                {i === activeIndex && (
                  <>
                    <a href="#" className="px-6 font-extrabold text-primary">
                      {item}
                    </a>
                    <span className="absolute top-7 h-[3px] rounded-tl-full rounded-tr-full w-5 bg-secondary"></span>
                  </>
                )}
                {i !== activeIndex && (
                  <a href="#" className="px-6">
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="min-h-0 py-3 font-semibold rounded-full btn btn-secondary text-primary max-lg:hidden h-fit">
        Buy Holocoin
      </button>
      <div className="lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AlignJustify />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 z-[10] bg-neutral rounded-box">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className="px-5 text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
