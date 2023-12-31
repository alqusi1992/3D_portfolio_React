import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Frontend Web Developer',
    company_name: 'Weborama Nederlands',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Dec 2021 - Jul 2023',
    points: [
      'Worked in Agile team of front- and backend developers.',
      'Maintain and improve apps: for preview a production-ready assets of multiple styles and sizes on a several websites',
      'An app for customize different settings for advertisement.',
    ],
  },
  {
    title: 'Full stack Developer ',
    company_name: 'Freelancer',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2020 - Dec 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Consulaat van Saudi-Arabië',
    company_name: 'Tasheel',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2019 - Jan 2020',
    points: [
      'Clients services and helping them to solve the problem by applying to get the visa.',
      'Collaborating with the team to find the best strategy to solve the problems.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Festival 32',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/alqusi1992/fesitval-32-team',
  },
  {
    name: 'Quiz-Maker-Project',
    description:
      'The Quiz-Maker Project is a straightforward web application  to create and take quizzes. Users can select their answers of questions, and at the end of the quiz, they receive their results along with a score.',
    tags: [
      {
        name: 'Javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'JSDOM',
        color: 'green-text-gradient',
      },
      {
        name: 'HTML,CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://gifted-payne-22989f.netlify.app/',
  },
  {
    name: 'Uber-Clone',
    description:
      'The Uber-Clone Project is a web application that faithfully replicates the design and functionality of Uber official website.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Responsive',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/alqusi1992/HYF-Module-HTMLCSSGIT/tree/main/Week-3',
  },
];

export { services, technologies, experiences, testimonials, projects };
