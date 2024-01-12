/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Amit",
  logo_name: "Amit Kumar",
  nickname: "aryan",
  full_name: "Amit kumar",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink: "",
  mail: "mailto:aa14to18cse@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ak-need",
  linkedin: "https://www.linkedin.com/in/akneed/",
  gmail: "aa14to18cse@gmail.com",
  gitlab: "https://gitlab.com/thewayofstudy",
  facebook: "https://www.facebook.com/amit.aryan.501/",
  twitter: "https://twitter.com/AMITARY43842466",
  instagram: "https://www.instagram.com/system.zombies/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing Robust JSON API",
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Ruby, Golang, Python, etc..",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean / Twilio / Stripe / Razorpay",
      ],
      softwareSkills: [
        {
          skillName: "Rails",
          fontAwesomeClassname: "simple-icons:rails",
          style: {
            color: "#CC0000",
          },
        },
        {
          skillName: "Ruby",
          fontAwesomeClassname: "simple-icons:ruby",
          style: {
            color: "#CC342D",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
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
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Postgres",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
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
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
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
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Mahendra Engineering College",
      subtitle: "Bachelor in Computer Science & Engineering",
      logo_path: "mec.jpeg",
      alt_name: "MEC",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.mahendra.info/",
    },
    {
      title: "T. N. B College",
      subtitle: "12th",
      logo_path: "tnb.jpeg",
      alt_name: "TNB",
      duration: "2012-2014",
      descriptions: ["Got best student award in Mathematics."],
      website_link: "http://tnbcollege.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Rails",
      subtitle: "Rails Udemy",
      logo_path: "rails.png",
      certificate_link: "",
      alt_name: "Rails",
      // color_code: "#2AAFED",
      color_code: "#CC0000",
    },
    {
      title: "React",
      subtitle: "React Udemy",
      logo_path: "react.png",
      certificate_link: "",
      alt_name: "react",
      color_code: "#E2405F",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link: "",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've worked on so many Applications and I am eager to build new things.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Cisco Meraki",
          company_url: "https://meraki.cisco.com/",
          logo_path: "cisco-meraki-logo.avif",
          duration: "March 2021 - Present",
          location: "Pune, India",
          description: `Handling order flow in Meraki dashboard.
          Successfully integrated multiple systems with Salesforce, streamlining data flow and enhancing overall efficiency.Debugging the application in case any issues occur while communicating with multiple applications.
          `,
          color: "green",
        },
        {
          title: "Research & Development Engineer",
          company: "Dassault Systems",
          company_url: "https://www.3ds.com/",
          logo_path: "ds.jpeg",
          duration: "March 2021 - Present",
          location: "Pune, India",
          description: `Design REST API for SCIM (System for Cross-domain Indentity Management).
          Code Review
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Tech Lead",
          company: "Eddygoo",
          company_url: "",
          logo_path: "eddygoo.png",
          duration: "July 2020 - Feb 2021",
          location: "Bangalore, India",
          description: `Train, manage and provide guidance to junior software development staff.
          Work closely with CEO on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 50%.
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "MSP",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "ms.jpeg",
          duration: "Nov 2016 - March 2018",
          location: "Work from Home",
          description: "Program Coordinator",
          color: "#040f26",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2016 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2015 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Ruby Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "amit.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/AMITARY43842466",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Vendors mangement apps",
      url: "https://github.com/ak-need/diamond-web-app",
      description:
        "This is a vendors managment app where vendor can manage thier product and employees.",
      languages: [
        {
          name: "Rails",
          iconifyClass: "logos-rails",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
