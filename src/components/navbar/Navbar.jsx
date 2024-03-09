import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  const menuItems = ['Home', 'About', 'Blog', 'Roadmap', 'Team', 'Rarity', 'Contact'];

  return (
    <nav className="navbar pt-8 py-5 w-full max-w-7xl justify-between mx-auto px-6">
      <div className="flex gap-16 items-center">
        <a href="#" className="text-lg flex items-baseline gap-2 tracking-widest font-bold">
          <img src="/logo/logo.svg" alt="Holocoin logo" className="h-4" />
          HOLOCOIN
        </a>
        <div className="hidden lg:flex">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item} className="hover:text-primary hover:font-extrabold text-primary/60 font-semibold">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="btn rounded-full btn-secondary text-primary max-lg:hidden min-h-0 h-fit py-3 font-semibold">
        Buy Holocoin
      </button>
      <div className="lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AlignJustify />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1]">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
