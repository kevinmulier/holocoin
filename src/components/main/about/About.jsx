import AvatarCard from '../../misc/AvatarCard';
import AboutText from './AboutText';
import AboutTitle from './AboutTitle';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.25 }}
        className="flex justify-between w-full py-12 mx-auto max-md:flex-col max-md:bg-neutral max-w-[1512px] px-7 md:pl-6 md:pr-20 ">
        <AboutTitle desktopHide={true} />
        <div className="flex flex-col justify-center pt-4 mx-auto w-fit max-w-60 max-md:mb-12">
          <AvatarCard />
        </div>
        <div className="flex flex-col w-[47%] max-md:w-full">
          <AboutTitle mobileHide={true} />
          <AboutText />
        </div>
      </motion.section>
    </>
  );
};

export default About;
