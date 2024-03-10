import PropTypes from 'prop-types';
import { AlignJustify } from 'lucide-react';

const NavbarMobileMenu = ({ menuItems }) => {
  return (
    <div className="lg:hidden">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-primary">
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
  );
};

export default NavbarMobileMenu;

NavbarMobileMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};
