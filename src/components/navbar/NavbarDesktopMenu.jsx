import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const NavbarDesktopMenu = ({ menuItems, activeIndex, setActiveIndex }) => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex">
      <ul
        className="flex h-full [font-size:clamp(0.75rem,-0.25rem+1.5625vw,1rem)]"
        onMouseLeave={() => setActiveIndex(0)}>
        {menuItems.map((item, i) => (
          <li
            key={item}
            onMouseEnter={() => setActiveIndex(i)}
            className="font-semibold hover:text-primary hover:font-extrabold text-primary/60 w-fit">
            {i === activeIndex && (
              <a href="#" className="flex flex-col items-center px-6 font-extrabold text-primary">
                {t(item)}
                <span className="h-[3px] rounded-tl-full rounded-tr-full w-[50%] bg-secondary"></span>
              </a>
            )}
            {i !== activeIndex && (
              <a href="#" className="px-6">
                {t(item)}
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
