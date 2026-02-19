import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, source_code_link, isInternal }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer hover:shadow-card transition-shadow"
        onClick={() => {
          if (source_code_link && source_code_link !== '#') {
            window.open(source_code_link, isInternal ? '_self' : '_blank');
          }
        }}
      >
        {/* Project image placeholder */}
        <div className="relative w-full h-[230px] rounded-xl overflow-hidden bg-[#1d1836] flex items-center justify-center">
          <div className="text-6xl">
            {index === 0 ? '🎨' : '✨'}
          </div>
          {/* Link icon badge */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (source_code_link && source_code_link !== '#') {
                  window.open(source_code_link, isInternal ? '_self' : '_blank');
                }
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <span className="text-white text-lg">→</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my design skills and process through
          real-world examples. Each project reflects my approach to
          user-centred design — from research and ideation to prototyping and
          final deliverables.
        </motion.p>
      </div>

      {/* Semester 3 featured callout */}
      <motion.div
        variants={fadeIn('up', 'spring', 0.2, 0.75)}
        className="mt-8 mb-4 p-6 rounded-2xl border border-[#915EFF] bg-[#1d1836]"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[#915EFF] font-semibold text-sm uppercase tracking-wider mb-1">
              Featured
            </p>
            <h3 className="text-white text-[22px] font-bold">
              Semester 3 Portfolio
            </h3>
            <p className="text-secondary text-[14px] mt-1 max-w-lg">
              Explore my complete semester 3 portfolio — featuring the SpeedMeet
              and Catchee projects with full design documentation, user research,
              wireframes, and prototypes.
            </p>
          </div>
          <a
            href="/sem3/"
            className="bg-[#915EFF] hover:bg-[#7a4fe0] text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            View Semester 3 →
          </a>
        </div>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
