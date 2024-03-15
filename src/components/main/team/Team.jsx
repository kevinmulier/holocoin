import AvatarCard from '../../misc/AvatarCard';
import { TeamCarousel } from '../../misc/Carousels';
import TeamTitle from './TeamTitle';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col w-full mx-auto max-w-[1512px] px-7 py-16">
        <TeamTitle />
        <section className="flex justify-center gap-24 px-12 mt-4 max-lg:hidden">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div className="flex flex-col justify-center w-3/12" key={index}>
                <AvatarCard />
              </div>
            ))}
        </section>
        <TeamCarousel />
      </motion.section>
    </>
  );
};

export default Team;
