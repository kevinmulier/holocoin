/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedSnapDisplay = (emblaApi) => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateScrollSnapState = useCallback((emblaApi) => {
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on('select', updateScrollSnapState);
    emblaApi.on('reInit', updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedSnap,
    snapCount,
  };
};

export const SelectedSnapDisplay = (props) => {
  const { selectedSnap, snapCount } = props;

  return (
    <span className="md:mr-3">
      {(selectedSnap + 1).toString().padStart(2, '0')} / {snapCount.toString().padStart(2, '0')}
    </span>
  );
};
