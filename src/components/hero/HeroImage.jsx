import PropTypes from 'prop-types';

const HeroImage = ({ slideNum }) => {
  const imageSources = ['/images/hero_image.webp', '/images/hero_image_2.webp', '/images/hero_image_3.webp'];

  return (
    <div className="relative w-6/12 h-fit max-md:absolute max-md:-z-10 max-md:w-full max-md:h-auto max-md:left-[50%] max-md:translate-x-[-50%]">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100/10 to-base-100 md:hidden"></div>
      <div className="absolute inset-0 h-full bg-gradient-to-b from-base-100/0 via-base-100/0 via-[93%] to-base-100 max-md:hidden"></div>
      <img src={imageSources[slideNum - 1]} alt="Hero banner" className="w-full" width="717" height="422" />
    </div>
  );
};

export default HeroImage;

HeroImage.propTypes = {
  slideNum: PropTypes.number.isRequired,
};
