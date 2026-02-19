// Navigation links
export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'work', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

// Services / Skills overview cards
export const services = [
  {
    title: 'UI Design',
    icon: '🎨',
  },
  {
    title: 'UX Research',
    icon: '🔍',
  },
  {
    title: 'Prototyping',
    icon: '📐',
  },
  {
    title: 'Visual Design',
    icon: '✏️',
  },
];

// Technology stack icons (served from /public/)
export const technologies = [
  { name: 'Figma', icon: '/figma.svg' },
  { name: 'Adobe XD', icon: '/adobexd.svg' },
  { name: 'Sketch', icon: '/sketch.svg' },
  { name: 'Photoshop', icon: '/photoshop.svg' },
  { name: 'Illustrator', icon: '/illustrator.svg' },
  { name: 'Framer', icon: '/framer.svg' },
  { name: 'HTML5', icon: '/html.svg' },
  { name: 'CSS3', icon: '/css.svg' },
  { name: 'Miro', icon: '/miro.svg' },
];

// Education / Experience
export const experiences = [
  {
    title: 'UX/UI Design Student',
    company_name: 'Hogeschool Rotterdam',
    iconBg: '#383E56',
    date: '2023 — Present',
    points: [
      'Studying Communication & Multimedia Design (CMD) with a focus on UX/UI.',
      'Designing user-centred interfaces using Figma and Adobe XD.',
      'Conducting user research, usability tests, and wireframing sessions.',
      'Collaborating in agile teams on semester-long design projects.',
    ],
  },
  {
    title: 'UX Design Intern',
    company_name: 'Internship (placeholder)',
    iconBg: '#E6DEDD',
    date: 'TBA',
    points: [
      'Placeholder for upcoming or past internship experience.',
      'Will be updated with real internship details.',
    ],
  },
];

// Testimonials (placeholder)
export const testimonials = [
  {
    testimonial:
      'Tina has a fantastic eye for design and always puts the user first in every decision she makes.',
    name: 'Classmate',
    designation: 'CMD Student',
    company: 'Hogeschool Rotterdam',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

// Projects
export const projects = [
  {
    name: 'Semester 3 Portfolio',
    description:
      'A detailed portfolio documenting my third semester design projects, including UX research, wireframes, prototypes, and final deliverables for the SpeedMeet and Catchee projects.',
    tags: [
      { name: 'UX/UI', color: 'blue-text-gradient' },
      { name: 'Figma', color: 'green-text-gradient' },
      { name: 'User Research', color: 'pink-text-gradient' },
    ],
    image: null,
    source_code_link: '/sem3/',
    isInternal: true,
  },
  {
    name: 'More Projects Coming',
    description:
      'More projects will be added as I progress through my studies and internships. Stay tuned for updates!',
    tags: [
      { name: 'UX', color: 'blue-text-gradient' },
      { name: 'UI', color: 'green-text-gradient' },
      { name: 'Design', color: 'pink-text-gradient' },
    ],
    image: null,
    source_code_link: '#',
    isInternal: false,
  },
];
