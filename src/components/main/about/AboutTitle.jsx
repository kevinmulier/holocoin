import PropTypes from 'prop-types';

const AboutTitle = ({ mobileHide, desktopHide }) => {
  const style = desktopHide
    ? 'relative flex flex-col mb-8 md:hidden'
    : mobileHide
    ? 'relative flex flex-col mb-8 max-md:hidden'
    : 'relative flex flex-col mb-8';

  return (
    <div className={style}>
      <h2 className="font-semibold text-[32px] text-primary">About</h2>
      <span className="absolute top-11 left-5 h-[3px] rounded-tl-full rounded-tr-full w-14 bg-secondary"></span>
    </div>
  );
};

export default AboutTitle;

AboutTitle.propTypes = {
  mobileHide: PropTypes.bool,
  desktopHide: PropTypes.bool,
};
