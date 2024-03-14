import ContactImage from './ContactImage';
import ContactText from './ContactText';
import ContactTitle from './ContactTitle';

const Contact = () => {
  return (
    <>
      <section className="flex justify-between w-full py-12 mx-auto max-md:flex-col max-w-[1512px] px-7 md:pl-6 md:pr-20 ">
        <ContactTitle desktopHide={true} />
        <ContactImage />
        <div className="flex flex-col w-[44%] leading-tight max-md:w-full">
          <ContactTitle mobileHide={true} />
          <ContactText />
        </div>
      </section>
    </>
  );
};

export default Contact;
