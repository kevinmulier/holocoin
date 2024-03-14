import PropTypes from 'prop-types';

const ContactTitle = ({ mobileHide, desktopHide }) => {
  const style = desktopHide
    ? 'flex flex-col mb-8 md:hidden max-md:mb-12 w-fit items-center'
    : mobileHide
    ? 'flex flex-col mb-8 max-md:hidden w-fit items-center'
    : 'flex flex-col mb-8 max-md:mb-12 w-fit items-center';

  return (
    <div className={style}>
      <h2 className="font-semibold text-[32px] text-primary">Contact us</h2>
      <span className="h-[3px] rounded-tl-full rounded-tr-full w-14 bg-secondary"></span>
    </div>
  );
};

export default ContactTitle;

ContactTitle.propTypes = {
  mobileHide: PropTypes.bool,
  desktopHide: PropTypes.bool,
};
