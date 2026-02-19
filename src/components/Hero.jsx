import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Decorative left line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m{' '}
            <span className="text-[#915EFF]">Tina</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            UX/UI Student crafting beautiful,
            <br className="sm:block hidden" />
            user-centred digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-[#915EFF] hover:bg-[#7a4fe0] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View My Work
            </a>
            <a
              href="/tina_cv.pdf"
              download="Tina_Shingrani_CV.pdf"
              className="border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Download CV
            </a>
            <a
              href="/sem3/"
              className="border border-[#dd85ff] text-[#dd85ff] hover:bg-[#dd85ff] hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Semester 3 Portfolio →
            </a>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
