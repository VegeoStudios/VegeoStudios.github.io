// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'VegeoStudios', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'GATEWATCH',
          description:
            'Ludum Dare 55 compo entry. A game where you play as a summoner who can summon heroes from other worlds to fight against the evil forces.',
          imageUrl:
            'https://static.jam.host/content/6bd/a5/z/610b8.png.320x256.fit.jpg',
          link: 'https://ldjam.com/events/ludum-dare/55/gatewatch',
        },
        {
          title: 'CRATE ARCANUM',
          description:
            'Ludum Dare 54 jam entry. Play as a wizard working in a warehouse, sorting crates using his gravity magic.',
          imageUrl:
            'https://static.jam.host/content/6bd/a5/z/5e4d5.png.320x256.fit.jpg',
          link: 'https://ldjam.com/events/ludum-dare/54/crate-arcanum',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Erik Cooper',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'vegeo',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'erik.cooper20',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '(970) 412-0795',
    email: 'erikwucooper@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/VegeoStudios/VegeoStudios.github.io/raw/main/Resume-Erik-Cooper.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'Python',
    'Java',
    'JavaScript',
    'C++/C',
    'Unity',
    'Blender',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe Substance Painter',
    'Git / GitHub',
    'Node.js',
    'Visual Studio',
    'OOP',
    'Algorithms and Data Structures',
    'Game Design',
    'Agile / Scrum',
    '3D Modeling',
    'UV Mapping',
    'Rigging',
    'Animation',
    'Texturing',
    'UI Design',
    'Espresso Preparation'
  ],
  experiences: [
    {
      company: 'Lory Student Services',
      position: 'Barista',
      from: 'August 2023',
      to: 'May 2024',
      companyLink: '',
    }
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'Colorado State University',
      degree: 'Bachelor of Science in Computer Science',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Front Range Community College',
      degree: 'Associate of Science in Computer Science',
      from: '2021',
      to: '2023',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
