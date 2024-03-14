import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSwitcher = ({ slideNum, setSlideNum }) => {
  const handleSwitchSlide = (increase) => {
    if (increase) {
      setSlideNum((value) => (value === 3 ? 1 : value + 1));
    }
    if (!increase) {
      setSlideNum((value) => (value === 1 ? 3 : value - 1));
    }
  };

  return (
    <div className="flex items-center gap-8 mx-auto font-semibold md:gap-4 w-fit md:mr-24 md:ml-auto">
      <button
        className="text-lg btn btn-circle btn-secondary text-primary md:order-1"
        onClick={() => handleSwitchSlide(false)}>
        <ChevronLeft />
      </button>
      <span className="md:mr-3">{slideNum.toString().padStart(2, '0')}/03</span>
      <button
        className="text-lg btn btn-circle btn-secondary text-primary md:order-2"
        onClick={() => handleSwitchSlide(true)}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default HeroSwitcher;

HeroSwitcher.propTypes = {
  slideNum: PropTypes.number.isRequired,
  setSlideNum: PropTypes.func.isRequired,
};
