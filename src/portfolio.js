/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akhil's Portfolio",
  description:
    "An enthusiastic result-driven individual who thrives to work on end to end products to develop sustainable, scalable and social technical systems that creates impact.",
  og: {
    title: "Akhil Singh Chauhan",
    type: "website",
    url: "https://akhilsin-portfolio.vercel.app/#/",
  },
};

//Home Page
const greeting = {
  title: "Akhil Singh Chauhan",
  logo_name: "AkhilSinghChauhan",
  nickname: "Web Wizard",
  subTitle:
    "An enthusiastic result-driven individual who thrives to work on end to end products to develop sustainable, scalable and social technical systems that creates impact.",
  resumeLink: "https://tinyurl.com/akhilsinghCV",
  portfolio_repository: "https://github.com/akhilub/portfolio",
  calendlyLink: "https://calendly.com/chauhansinghakhil92",
  githubProfile: "https://github.com/akhilub",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/akhilub",
  // linkedin: "https://www.linkedin.com/in/akhilsinghchauhan/",
  // gmail: "chauhansinghakhil92@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/akhilub",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akhilsinghchauhan/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC0JHZqh2QwratqwrYtNEEZQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:chauhansinghakhil92@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build responsive website front end using Vue-Pinia, React-Redux",
        "⚡ Develop mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Create application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "fa6-brands:vuejs",
          style: {
            color: "#42b883",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa6-brands:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "devicon:kotlin",
          style: {
            color: "#c711e1",
          },
        },
      ],
    },
    {
      title: "Machine Learning & Artificial Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Develop highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working on Computer Vision and NLP projects",
        "⚡ Handle Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Host and maintain websites on virtual machine instances along with integration of databases",
        "⚡ Deploy deep learning models on cloud to be used on mobile devices",
        "⚡ Set up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Design highly attractive user interface for mobile and web applications",
        "⚡ Customize logo designs and building logos from scratch",
        "⚡ Create responsive flow of application functionalities for optimal user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have cultivated my expertise as a Full Stack Developer through dynamic engagements with startups and established enterprises alike. My journey spans roles as a Developer, Designer, and Software Architect, where I've contributed to the evolution of innovative products and scalable systems. My multifaceted experiences have equipped me with a holistic understanding of software development, enabling me to drive impactful solutions across the entire stack.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Creator",
          company: "DSA-Bible",
          company_url: "https://dsabible.com",
          logo_path: "dsa_bible.svg",
          duration: "Apr 2025 - Present",
          location: "Remote",
          description: [
            "Building “DSA Bible” — a structured learning platform for mastering DSA and optimizations focused on pattern recognition to prepare users for technical interviews and software engineering roles.",
            "Designed to help learners follow a structured approach, apply coding principles, and become industry-ready for software engineering roles.",
          ],
          color: "#9b1578",
        },
        {
          title: "Open Source Contributor",
          company: "Obsidian Excalidraw",
          company_url: "https://excalidraw-obsidian.online/Welcome",
          logo_path: "excalidraw_obsidian_logo.svg",
          duration: "Aug 2024 - Present",
          location: "Remote",
          description: [
            "Contributing to the development of Obsidian-Excalidraw in TypeScript & React 18, an open-source plugin integrating Excalidraw sketching capabilities into Obsidian, enhancing note-taking and visual thinking for over 100,000 users.",
          ],
          color: "#9b1578",
        },
        {
          title: "Full Stack Developer",
          company: "Mezeh Mediterranean Grill",
          company_url: "https://mezeh.com/",
          logo_path: "mezeh_logo.png",
          duration: "Feb 2022 - Present",
          location: "FairFax, Virginia",
          description: [
            "Designed, developed, and deployed over 12 cloud-based full-stack applications as per business needs",
            "Maintained user interfaces for web and mobile applications using JavaScript frameworks (Vue.js, React.js, Flutter)",
            "Collaborated in cross-functional and agile team comprising of UX designers, marketing directors for creating complete software architecture of mobile and web application",
            "Created various RestAPI's in backend to integrate internal and external systems",
            "Translated business requirements into technical specifications by formulating schema logic in SQL and NoSQL(such as MongoDB) databases.",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Yahoo",
          company_url: "/",
          logo_path: "yahoo_logo.png",
          duration: "Jan 2016 - Dec 2017",
          location: "Bangalore, India",
          description: [
            "Core team member for designing and developing Internal Developer Admin Dashboard, its components and features.",
            "Employed Domain-Driven Design (DDD) and rigorous testing methodologies to develop and maintain scalable backend services.",
            "Implemented Role-Based Access Control (RBAC) within backend systems and service layers.",
          ],
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "Emami Ltd",
          company_url: "/",
          logo_path: "emami_logo.jpeg",
          duration: "June 2015 - Dec 2015",
          location: "Kolkata, India",
          description: [
            "Developed services in a platform to ingest data from 12 datastreams to forecast sales and revenue",
            "Requirement gathering from order management system, revenue reporting and production teams to integrate with the platform",
          ],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/akhilsin/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University at Buffalo",
      subtitle: "M.S. in Computer Science & Operations Research",
      logo_path: "ub_logo.png",
      alt_name: "SUNY Buffalo",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Relevant CourseWork: Algorithm Design & Analysis, Introduction to Machine Learning, Data Model & Query Language, Data Intensive Computing, Dicrete Optimization, Dynamic Data Vizulization & Optimization",
        "⚡ Research assistant at Optimator Lab. As part of it, I have worked on StarShip Project.",
      ],
      website_link: "https://www.buffalo.edu/",
    },
    {
      title: "Indian Institute of Technology Ropar",
      subtitle: "M.Tech. in Artificial Intelligence",
      logo_path: "iitr_logo.png",
      alt_name: "IIT Ropar",
      duration: "2019 - 2019",
      descriptions: [
        "⚡ Completed one semester ,Studied software engineering subjects like Robotics, Machine Learning, Artificial Intelligence.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.iitrpr.ac.in/",
    },
    {
      title: "Visvesvaraya National Institute of Technology, Nagpur",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "vnit_logo.png",
      alt_name: "VNIT Nagpur",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ Active participant in college activities",
        "⚡ Built an ATV and represented college at National level",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://vnit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link: "/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link: "/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link: "/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link: "/",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link: "/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link: "/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link: "/",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link: "/",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link: "/",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link: "/",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My aim is to create projects that solve problems and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "akhil_animated.png",
    description:
      "I am available via email, LinkedIn. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.Book a call if you want to discuss ideas or have any interesting opportunity",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "2251 Pimmit Drive, Falls Church, VA, 22043",
    county: "FairFax",
    country: "USA",
    state: "Virginia",
    zipCode: "22043",
    streetAddress: "2251 Pimmit Drive",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/dL2PUgV1ir4xAmjc6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
