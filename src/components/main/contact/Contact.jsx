import ContactImage from './ContactImage';
import ContactText from './ContactText';
import ContactTitle from './ContactTitle';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.25 }}
        className="flex justify-between w-full py-12 mx-auto max-md:flex-col max-w-[1512px] px-7 md:pl-6 md:pr-20 ">
        <ContactTitle desktopHide={true} />
        <ContactImage />
        <div className="flex flex-col w-[44%] max-md:w-full">
          <ContactTitle mobileHide={true} />
          <ContactText />
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
