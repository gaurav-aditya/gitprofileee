// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'gaurav-aditya', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/gaurav-aditya/gaurav-aditya.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/gaurav-aditya/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 15, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['gaurav-aditya/my-project1', 'gaurav-aditya/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['gaurav-aditya/gitprofile', 'gaurav-aditya/iNotes'], // List of repository names to display. example: ['gaurav-aditya/my-project1', 'agaurav-aditya/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'School Management System',
          description:
            'This repository contains the source code for a comprehensive School Management Website developed using Apache as the web server and NetBeans as the integrated development environment (IDE). Technologies Used: Core Java (Swing & AWT) Database Used: MySQL IDE used: Netbeans',
          imageUrl:
            'https://private-user-images.githubusercontent.com/110540811/294586931-d0c62485-79f5-4e91-a08e-5dede6e0f157.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDIxNzIsIm5iZiI6MTcwNjMwMTg3MiwicGF0aCI6Ii8xMTA1NDA4MTEvMjk0NTg2OTMxLWQwYzYyNDg1LTc5ZjUtNGU5MS1hMDhlLTVkZWRlNmUwZjE1Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEyNlQyMDQ0MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jY2E2N2Q0N2NkOWFmODZmNTljNWNjM2Q5NDA4NmUyMWQ2N2YxYTEyY2ZjNmZiZGRmNzhiYjNmMzVmMzU3MjdhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.oEi4WodUrJUjQz2n1_tF5Oh4dGG7z6SkbIE8oPdbNqk',
          link: 'https://github.com/gaurav-aditya/school-management-system',
        },
        {
          title: 'School Website',
          description:
            'Developed website for a school Subhash Public School(Noneya),Skills used:-HTML,CSS,JavaScript,MySql | Hosted on -Netlify',
          imageUrl:
            'https://lh5.googleusercontent.com/p/AF1QipPnWv09rFakNY7oWJhsoKzbIo1oJcbLp6_Pom9-=w213-h160-k-no',
          link: 'https://spsn.netlify.app',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Aditya Prakash',
    description: 'Java Developer | Full Stack Developer',
    imageURL: 'https://gaurav-aditya.github.io/images/MSI03828.jpg',
  },
  social: {
    linkedin: 'echoaditya',
    twitter: 'Adityagaurav01',
    facebook: '',
    instagram: '',
    youtube: 'subhashpublicschoolnoneya4922',
    behance: 'meadityapandey',
    medium: 'echoaditya',
    dev: 'echoaditya',
    stackoverflow: '21575839/echoaditya',
    dribbble: 'echoaditya',
    skype: '',
    telegram: '',
    website: 'https://gaurav-aditya.github.io',
    phone: '+91 6201123635',
    email: 'echoaditya@proton.me',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Oz6T6ML8dnXBsp79khnA5wVvMFy7kVCe/view?usp=sharing',
  },
  skills: [
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'PHP',
    'Data Structure',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'DBMS',
    
  ],
  experiences: [
    {
      company: 'Internsavy',
      position: 'Website Developer',
      from: 'July 2015',
      to: 'August 2015',
      companyLink: 'https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Einternsavy%2Ecom&urlhash=5adM&trk=about_website',
    },
    {
      company: 'Subhash Public School',
      position: 'Website Developer and Analyst',
      from: 'July 2021',
      to: 'August 2023',
      companyLink: 'https://spsn.netlify.app',
    },
  ],
  certifications: [
    {
      name: 'Getting Started with AI using IBM Watson',
      body: 'Coursera',
      year: 'September 30,2021',
      link: 'https://www.coursera.org/account/accomplishments/verify/LH4A5J2V88NH',
    },
    {
      name: 'Building AI Powered Chatbots Without Programming',
      body: 'Coursera',
      year: 'September 30,2021',
      link: 'https://www.coursera.org/account/accomplishments/verify/R8BBXC3CA9M2',
    },
    {
      name: 'Cryptography',
      body: 'Coursera',
      year: 'March 22,2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/KPP66UHYUPT6',
    },
    {
      name: 'Blockchain Basics',
      body: 'Coursera',
      year: 'April 12,2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/WGMDEFHGCYGS',
    },
    {
      name: 'Blockchain Platforms',
      body: 'Coursera',
      year: 'August 26,2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/Y4YDGC3LQ3VS',
    },
    {
      name: 'Learnathon 2022',
      body: 'ICT Academy',
      year: 'August 2022-October 2022',
      link: 'https://www.linkedin.com/posts/echoaditya_ict-academy-activity-7024828474229997568-vZcx?utm_source=share&utm_medium=member_desktop',
    },
    {
      name: 'Academic Process Mining Fundamentals',
      body: 'Celonis',
      year: 'September 21, 2022',
      link: 'https://www.credly.com/badges/d29db485-cc8f-4fc6-80d4-7ce0e676e09a/print',
    },
  ],
  
  
  educations: [
    {
      institution: 'Noida Institute of Engineering and Technology (84.21%)',
      degree: 'B.tech',
      from: '2020',
      to: '2024',
      Percentage: '84.21',
    },
    {
      institution: 'Govt.+2 High School Noneya (73%)',
      degree: 'AISSE (12th)',
      from: '2018',
      to: '2020',
      Percentage:'73',
    },
    {
      institution: 'M.S Memorial Public School (79%))',
      degree: 'Secondary School Examination (10th)',
      from: 'March 2018',
      to: 'April 2018',
      Percentage:'79',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'echoaditya', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
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
    defaultTheme: 'nord',

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
  footer: `Made by Aditya Prakash <a
      class="text-primary" href="https://linktr.ee/echoaditya"
      target="_blank"
      rel="noreferrer"
    >https://linktr.ee/echoaditya</a>`,

  enablePWA: true,
};

export default CONFIG;
