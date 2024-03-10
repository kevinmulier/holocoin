import PropTypes from 'prop-types';

const NavbarDesktopMenu = ({ menuItems, activeIndex, setActiveIndex }) => {
  return (
    <div className="hidden lg:flex">
      <ul className="flex h-full" onMouseLeave={() => setActiveIndex(0)}>
        {menuItems.map((item, i) => (
          <li
            key={item}
            onMouseEnter={() => setActiveIndex(i)}
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
  );
};

export default NavbarDesktopMenu;

NavbarDesktopMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};
