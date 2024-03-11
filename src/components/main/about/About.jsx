import AvatarCard from '../../misc/AvatarCard';
import AboutText from './AboutText';
import AboutTitle from './AboutTitle';

const About = () => {
  return (
    <>
      <section className="flex justify-between w-full py-12 mx-auto max-md:flex-col max-md:bg-neutral max-w-7xl max-xl:px-7">
        <AboutTitle desktopHide={true} />
        <div className="flex flex-col justify-center w-5/12 pt-4 mx-auto max-md:w-full max-md:mb-12">
          <AvatarCard />
        </div>
        <div className="flex flex-col w-6/12 leading-tight max-md:w-full">
          <AboutTitle mobileHide={true} />
          <AboutText />
        </div>
      </section>
    </>
  );
};

export default About;
