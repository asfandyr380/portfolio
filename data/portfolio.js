const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: 'LazyAlgorithm',
}

const about = {
  // each of these properties is optional - they can be left empty or deleted
  // the first element in the `names` array will be treated as your first name, and all the elements combined will be treated as your full name
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Asfand', 'Yar'],
  greetingEmoji: '👋',
  role: 'Mobile Developer',
  company: 'Contribee, UAB',
  description: [
    'a mobile developer who loves bringing ideas to life through apps. I specialize in creating smooth and engaging experiences with Flutter, making sure the apps not only work well but also look great. From sleek interfaces to eye-catching animations, I’m all about the details that make big difference.',
  ],
  resume: 'https://www.fiverr.com/users/asfandyr380',
  social: {
    github: 'https://github.com/asfandyr380',
    linkedin: 'https://www.linkedin.com/in/asfand-yar-4775851b2/',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/LeBolCover.png',
    name: 'LeBol',
    description: [
      'Ever wondered what’s really in your food? Lebol is here to help you decode food labels effortlessly.',
    ],
    stack: ['Flutter', 'Dart', 'Firebase'],
    sourceCode: '',
    livePreview: 'https://play.google.com/store/apps/details?id=com.scan.ai&hl=en',
  },
  {
    thumbnail: 'images/givastry.png',
    name: 'Givastry',
    description: [
      'Givastry is a free and trusted charity giveaway app for Android users that connect people from different part of the world to free funds',
    ],
    stack: ['Flutter', 'Nodejs', 'Firebase'],
    sourceCode: '',
    livePreview: 'https://play.google.com/store/apps/details?id=org.givasty.app&hl=en_GB',
  },
  {
    thumbnail: 'images/kabaddi.png',
    name: 'KabaddiHDLive',
    description: [
      'Kabaddi HD Live is the perfect solution for keeping track of live Kabaddi scores. With two simple interfaces, The live score display can be overlaid on top of any live video feed',
    ],
    stack: ['Flutter', 'Dart', 'Firebase'],
    sourceCode: '',
    livePreview: 'https://apps.apple.com/us/app/kabaddi-hd-live/id6446918312',
  },
  {
    thumbnail: 'images/contribee.png',
    name: 'Contribee',
    description: [
      'a platform filled with educational, entertaining, and diverse content. Support your beloved creators, non-profit organizations and businesses!',
    ],
    stack: ['Flutter', 'Dart', 'Kotlin', 'Swift'],
    sourceCode: '',
    livePreview: 'https://play.google.com/store/apps/details?id=com.contribee.app&hl=en',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'Flutter',
  'Dart',
  'Kotlin',
  'Swift',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'CI/CD',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'asfandyr380@gmail.com',
}

export { header, about, projects, skills, contact }
