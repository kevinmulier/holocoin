import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  const menuItems = ['Home', 'About', 'Blog', 'Roadmap', 'Team', 'Rarity', 'Contact'];

  return (
    <nav className="navbar pt-8 py-5 w-full max-w-7xl justify-between mx-auto px-6">
      <div className="flex gap-16 items-baseline">
        <a href="#" className="text-2xl flex gap-2 tracking-widest font-bold">
          <img src="/logo/logo.svg" alt="Holocoin logo" className="h-6" />
          HOLOCOIN
        </a>
        <div className="hidden lg:flex">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item} className="font-bold">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="btn rounded-full btn-accent max-lg:hidden min-h-0 h-fit py-3">Buy Holocoin</button>
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
