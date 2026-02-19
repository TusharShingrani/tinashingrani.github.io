import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div className="text-6xl">{icon}</div>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m{' '}
        <span className="text-white font-semibold">Tina Shingrani</span>, a
        passionate UX/UI Design student at Hogeschool Rotterdam studying
        Communication &amp; Multimedia Design (CMD). I create beautiful,
        intuitive digital experiences with a strong focus on the user at every
        step of the design process.
        <br />
        <br />
        I work with tools like{' '}
        <span className="text-[#915EFF]">Figma</span>,{' '}
        <span className="text-[#915EFF]">Adobe XD</span>, and{' '}
        <span className="text-[#915EFF]">Framer</span> to craft wireframes,
        prototypes, and final designs. I enjoy conducting user research, building
        design systems, and collaborating closely with developers to bring ideas
        to life.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
