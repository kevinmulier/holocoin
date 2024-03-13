import AvatarCard from '../../misc/AvatarCard';
import AboutText from './AboutText';
import AboutTitle from './AboutTitle';

const About = () => {
  return (
    <>
      <section className="flex justify-between w-full py-12 mx-auto max-md:flex-col max-md:bg-neutral max-w-[1512px] px-7 md:pl-6 md:pr-20 ">
        <AboutTitle desktopHide={true} />
        <div className="flex flex-col justify-center pt-4 mx-auto w-fit max-md:mb-12">
          <AvatarCard />
        </div>
        <div className="flex flex-col w-[47%] leading-tight max-md:w-full">
          <AboutTitle mobileHide={true} />
          <AboutText />
        </div>
      </section>
    </>
  );
};

export default About;
