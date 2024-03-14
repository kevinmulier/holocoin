import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSwitcher = () => {
  return (
    <div className="flex items-center gap-8 mx-auto font-semibold md:gap-4 w-fit md:mr-24 md:ml-auto">
      <button className="text-lg btn btn-circle btn-secondary text-primary md:order-1">
        <ChevronLeft />
      </button>
      <span className="md:mr-3">01/03</span>
      <button className="text-lg btn btn-circle btn-secondary text-primary md:order-2">
        <ChevronRight />
      </button>
    </div>
  );
};

export default HeroSwitcher;
