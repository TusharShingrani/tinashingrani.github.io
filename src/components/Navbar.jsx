import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#915EFF] to-[#dd85ff] flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Tina&nbsp;
            <span className="sm:block hidden">| Designer</span>
          </p>
        </Link>

        {/* Desktop nav links */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Semester 3 link */}
          <li>
            <a
              href="/sem3/"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer transition-colors"
            >
              Sem 3
            </a>
          </li>

          {/* CV Download button */}
          <li>
            <a
              href="/tina_cv.pdf"
              download="Tina_Shingrani_CV.pdf"
              className="bg-[#915EFF] hover:bg-[#7a4fe0] text-white text-[16px] font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile hamburger menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] cursor-pointer flex flex-col justify-between py-1"
            onClick={() => setToggle(!toggle)}
          >
            <span
              className={`block h-0.5 bg-white rounded transition-all ${toggle ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all ${toggle ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all ${toggle ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>

          {/* Mobile dropdown */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a
                  href="/sem3/"
                  className="text-secondary font-medium text-[16px]"
                  onClick={() => setToggle(false)}
                >
                  Sem 3
                </a>
              </li>
              <li>
                <a
                  href="/tina_cv.pdf"
                  download="Tina_Shingrani_CV.pdf"
                  className="text-[#915EFF] font-semibold text-[16px]"
                  onClick={() => setToggle(false)}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
