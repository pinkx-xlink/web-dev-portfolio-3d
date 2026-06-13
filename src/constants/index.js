// npm run dev
const navLinks = [
  {
    name: "Code Portfolio",
    link: "#work",
  },
  {
    name: "Professional Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Dreams", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Dreams", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// original values:
// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

// MY values:
const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Years of Code" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  {
    value: 100,
    suffix: "%",
    label: "Excited To See If I'm A Good Fit For Your Team!",
  },
];

// ORIGINAL:
// const logoIconsList = [
//   {
//     imgPath: "/images/logos/company-logo-1.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-2.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-3.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-4.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-5.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-6.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-7.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-8.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-9.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-10.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-11.png",
//   },
// ];

// MINE:
// personalize to my companies

const videosList = [{ videoPath: "/videos/node-mini-message-board-wip.mp4" }];

const logoIconsList = [
  {
    imgPath: "/images/archway-logo-resized.png",
  },
  {
    imgPath: "/images/lowes-logo-resized.png",
  },
  {
    imgPath: "/images/ssc-logo.png",
  },
  {
    imgPath: "/images/zimmer-logo-resized.png",
  },
  {
    imgPath: "/images/anderson-logo.png",
  },
  {
    imgPath: "/images/archway-logo-resized.png",
  },
  {
    imgPath: "/images/lowes-logo-resized.png",
  },
  {
    imgPath: "/images/ssc-logo.png",
  },
  {
    imgPath: "/images/zimmer-logo-resized.png",
  },
  {
    imgPath: "/images/anderson-logo.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "CSS",
    imgPath: "/images/css-img.png",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/tailwind-img.png",
  },
  {
    name: "HTML",
    imgPath: "/images/html-img.png",
  },
  {
    name: "JavaScript",
    imgPath: "/images/javascript-img.png",
  },
  {
    name: "PostgresSQL",
    imgPath: "/images/postgres-sql-img.png",
  },
  // {
  //   name: "TypeScript",
  //   imgPath: "/images/typescript-img.png",
  // },
  {
    name: "WordPress",
    imgPath: "/images/wordpress-img.png",
  },

  // {
  //   name: "React Developer",
  //   imgPath: "/images/logos/react.png",
  // },
  // {
  //   name: "Python Developer",
  //   imgPath: "/images/logos/python.svg",
  // },
  // {
  //   name: "Backend Developer",
  //   imgPath: "/images/logos/node.png",
  // },
  // {
  //   name: "Interactive Developer",
  //   imgPath: "/images/logos/three.png",
  // },
  // {
  //   name: "Project Manager",
  //   imgPath: "/images/logos/git.svg",
  // },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "WordPress",
  //   modelPath: "/models/wordpress.glb",
  //   scale: 0.17,
  //   rotation: [14, Math.PI / 21, 0],
  // },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "NodeJS",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  // {
  //   name: "Three.js - 3D Modeling",
  //   modelPath: "/models/three.js-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "In 2024 I leveraged my experience in customer service, shipping, inventory control, & computer literacy to build and launch my first business online with the goal to provide sustainable clothing options worldwide. We've hit 85+ sales in our first year, and are proud of our 100% customer satisfaction rate!",
    imgPath: "/images/ssc-logo.png",
    logoPath: "/images/logo1.png",
    title: "Small Business Owner",
    company: "Sugar Sprite Crochet",
    date: "August 2024 - Present",
    location: "Remote",
    color: "pink",
    responsibilities: [
      "Manage multiple e-commerce revenue channels.",
      "Utilize social media presence, SEO, and analytics to monitor site traffic, promote products, and increase conversion rate.",
      "Use Canva & Clipchamp to design branded graphics, create digital products, and edit photos.",
      "Use Meta Business Suite to deliver friendly 5-star customer service, strategize marketing content, and schedule ad campaigns.",
      "Manage order fulfillment, budgeting, and inventory.",
      "Generated over 190 sales since its establishment in 2024.",
    ],
  },
  {
    review:
      "During my contract, I worked independantly using ERP systems, SMS, and SAP to analyze and process thousands of accurate inventory adjustments per week, and collaborated with my team remotely through Outlook and Teams. My mission as the IT Programmer Analyst was to research and rectify thousands of inventory discrepancies caused by a software update, and I was able to help the team achieve this goal weeks ahead of schedule.",
    imgPath: "/images/zimmer-logo-resized.png",
    logoPath: "/images/logo1.png",
    title: "IT Programmer Analyst",
    company: "Zimmer Biomet",
    date: "May 2025 - August 2025",
    location: "Remote",
    color: "blue",
    responsibilities: [
      "Utilized ERP systems, SAP, SNAP, and SMS to  resolve discrepancies and conduct inventory research and transfers.",
      "Worked efficiently and managed high‑volume workflows in a fully remote environment with minimal oversight.",
      "Processed user requests quickly and while maintaining a positive attitude.",
      "Performed systematic adjustments of thousands of products per week with exceptional accuracy and speed.",
      "Collaborated with users and team members via Microsoft Teams & Outlook.",
      "Helped my team complete our major data‑correction initiative one month ahead of schedule.",
    ],
  },
  {
    review:
      "During my time at Archway, I had the privilege of collecting a wide variety of hands-on experience; from picking orders to being trained in SQL and HAZMAT, from temp to administrative assistant submitting timesheets to the temp agencies; from project management and processing mail, to data entry, filing, and scheduling, my time at Archway servd to hone my communcation skills, problem-solving, and teamwork.",
    imgPath: "/images/archway-logo-resized.png",
    logoPath: "/images/logo2.png",
    title: "Administrative Assistant",
    company: " Archway Marketing Services",
    date: "December 2020 - March 2025",
    location: "South Bend, IN",
    color: "red",
    responsibilities: [
      "Scheduled meetings and freight shipments through email, phone, and carrier websites, and tracked appointments using Outlook Calendar.",
      "Utilized Oracle WMS for research, reports, and resolving inventory discrepancies.",
      "Collaborated with vendors, carriers, and Client Services to resolve or appropriately escalate Helpdesk ticket queue.",
      "Built a SQL-powered Power BI dashboard that helped streamline lost inventory recovery.",
      "Supported shipping, receiving, fulfillment, pick/packing, and inventory control workflows.",
      "Performed high‑volume data entry with strong attention to detail using Excel, Word, and Smartsheet.",
      "Filed and collaborated on spreadsheets, reports, manifests and BOLs with strong attention to detail.",
      "Managed weekly payroll for up to 40 temps.",
      "Processed incoming and outgoing mail while handling sensitive documents securely.",
      "Project management (kits, return to vendor orders, scrap orders, client onboarding/offboarding); batching, directing labor, communicating with vendors, clients, and in-house teams, tracking and relaying progress to client(s), and completing projects efficiently and ahead of schedule.",
      "Assisted with cycle counts, projects, training, and inventory audits.",
      "Handled inbound and outbound calls with a respectful and positive attitude.",
      "Leveraged supply chain portal sites to coordinate and track LTL and freight shipments.",
    ],
  },
  {
    review:
      "As a full-time employee I excelled in a range of responsibilities, from sales and customer service, to processing payments and presenting product/color palette recommendations.",
    imgPath: "/images/lowes-logo-resized.png",
    logoPath: "/images/logo3.png",
    title: "Sales Associate",
    company: "Lowe's",
    date: "February 2019 - August 2020",
    location: "Mishawaka, IN",
    color: "navy",
    responsibilities: [
      "Built rapport with customers to help guide them through product selection based on their personal projects and budgets.",
      "Used internal company sites to help guests place custom orders, schedule deliveries and contractor services, and find alternative purchasing options (such as online ordering and viewing availability at nearby locations) for out‑of‑stock items.",
      "Performed daily cleaning, department restocking, and light maintenance on tinting machines.",
      "Processed high‑volume transactions accurately across multiple payment methods.",
      "Collaborated across departments to assist customers and complete tasks as a team.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/shaiyan-younkin-916633271/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/pinkx-xlink",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  videosList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
