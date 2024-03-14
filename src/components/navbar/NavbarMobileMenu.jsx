import PropTypes from 'prop-types';
import { AlignJustify } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NavbarMobileMenu = ({ menuItems }) => {
  const { t } = useTranslation();

  return (
    <div className="lg:hidden">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="px-0 btn btn-ghost lg:hidden text-primary"
          aria-label="Open/Close menu">
          <AlignJustify />
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 z-[10] bg-neutral rounded-box">
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#" className="px-5 text-lg">
                {t(item)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;

NavbarMobileMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};
