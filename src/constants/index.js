import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  hf,
  bny,
  holopin,
  clg,
  school,
  crypto,
  oop,
  yml,
  crud,
  dwld,
  onetomany,
  trie,
  ds,
  cg,
  port_3d,
  jsp,
  chitchat,
  notes,
  react1,
  be,
  sql,
  mini,
  snl,
  udinus,
  rumahraga,
  rumahweb,
  upt,
  lapor,
  mitra,
  rekber,
  agile,
  best,
  comunication,
  kotlin,
  msib,
  powerfull,
  sertifmsib,
  toefl,
  wmk,
  becons,
  mobile,
} from "../assets";

const profiles = [
  {
    link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
    icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
    icon: "https://img.icons8.com/fluency/344/google-cloud.png",
  },
  {
    link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
  },
  {
    link: "https://www.hackerrank.com/_shinchancode",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  },
  {
    link: "https://dev.to/shinchancode",
    icon: hf,
  },
  {
    link: "https://www.holopin.io/@shinchancode#badges",
    icon: holopin,
  },
];

const achievements = [
  {
    title:
      "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
  },
  {
    title: "Twice State level Table-Tennis Winner (2021 and 2022)",
  },
  {
    title:
      "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
  },
  {
    title: "Branch Head of Information Technology Department (2021 - 2022)",
  },
  {
    title:
      "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
  },
  {
    title:
      "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
  },
  {
    title: "Played Nationals in Throwball for U-14 category. (2015)",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  },
  {
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySql",
    icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
  },
];

const list = [
  {
    id: "mobile",
    title: "Mobile",
  },
  {
    id: "website",
    title: "Website",
  },
];

export const mobileProject = [
  {
    name: "RumahRaga",
    description:
      "Project ini merupakan ide bisnis saat sedang melaksanakan Intership di Wirausaha Merdeka, disini saya membuat aplikasi mobile dengan nama RumahRaga. Aplikasi ini bertujuan untuk menyewa fasilitas olahraga.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Android Studio",
        color: "white-text-gradient",
      },
    ],
    image: rumahraga,
    source_link: "https://github.com/socute7/RumahRaga",
    source_code_link: "https://github.com/socute7/RumahRaga",
  },
  {
    name: "Lapor",
    description:
      "Project ini merupakan desain UI dengna menggunakan Flutter. Kemudian fitur dengan database hanya login register.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Php",
        color: "pink-text-gradient",
      },
    ],
    image: lapor,
    source_link: "https://github.com/socute7/Lapor",
    source_code_link: "https://github.com/socute7/Lapor",
  },
  {
    name: "RumahRaga Mitra",
    description:
      "Project ini merupakan Mobile aplikasi untuk mitra menangani orderan booking lapangan, aplikasi ini mengguanakan Flutter dan backend menggunakan MySql.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
    ],
    image: mitra,
    source_link: "https://github.com/socute7/RumahRaga-Mitra",
    source_code_link: "https://github.com/socute7/RumahRaga-Mitra",
  },
  {
    name: "Rekber",
    description:
      "Project ini merupakan UI aplikasi mobile dengan menggunakan React Native, Express Js, Node Js, Prisma.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: rekber,
    source_link: "https://github.com/socute7/Rekber",
    source_code_link: "https://github.com/socute7/Rekber",
  },
];

export const websiteProject = [
  {
    name: "RumahRaga",
    description:
      "Project ini merupakan ide bisnis saat sedang melaksanakan Intership di Wirausaha Merdeka, disini saya membuat aplikasi mobile dengan nama RumahRaga. Aplikasi ini bertujuan untuk menyewa fasilitas olahraga.",
    tags: [
      {
        name: "CI",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: rumahweb,
    source_link: "",
    source_code_link: "",
  },
  {
    name: "UPT Logam",
    description:
      "Project ini merupakan Sistem Informasi berbasis Web untuk kebutuhan produksi di UPT Logam. Fitur dalam aplikasi ini bertujuan untuk membuat produksi lebih efisien.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
    ],
    image: upt,
    source_link: "",
    source_code_link: "",
  },
];

export const otherProject = [
  {
    name: "Multilingual Multiple Choice Question Generation",
    description:
      "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "multilingual",
        color: "green-text-gradient",
      },
      {
        name: "BE_Project",
        color: "pink-text-gradient",
      },
    ],
    image: be,
    source_link:
      "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
    source_code_link: "https://github.com/shinchancode/Final-Year-Project",
  },

  {
    name: "DBMS Lab",
    description:
      "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: sql,
    source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
  },
  {
    name: "SQL : Library Management System",
    description:
      "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "management",
        color: "green-text-gradient",
      },
      {
        name: "miniproject",
        color: "pink-text-gradient",
      },
    ],
    image: mini,
    source_link:
      "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
    source_code_link:
      "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
  },
  {
    name: "Pyhton : Snake and Ladder",
    description:
      "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
    tags: [
      {
        name: "snake and ladder",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: snl,
    source_link:
      "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
    source_code_link:
      "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "PT Baracipta Esa Enginering (MSIB Intern)",
    icon: becons,
    iconBg: "#383E56",
    date: "Feb 2024 - Jun 2024",
    link: "",
    points: [
      "Intership MSIB Batch 6 di PT Baracipta Esa Enginering.",
      "Membuat ERP project Mitra.",
      "Membuat FrontEnd Website dengan framework Laravel, Bootstrap.",
      "Membuat BackEnd Website Postgress Sql.",
      "Uji Mekanisme Sistem Website.",
      "Deploy Project.",
    ],
    link: "https://drive.google.com/drive/folders/13FK-YewFDv8ALmzKglPBmb6Z3oenuYoP",
  },
  {
    title: "Mobile Developer",
    company_name: "PT Promosi Digital Persada (Wirausaha Merdeka Intern)",
    icon: "https://wirausahamerdeka.kampusmerdeka.kemdikbud.go.id/info/wp-content/uploads/2023/03/Logo-Wirausaha-White-e1677769744432-1.png",
    iconBg: "#383E56",
    date: "Agt 2023 - Des 2023",
    link: "",
    points: [
      "Intership Wirausaha Merdeka yang di selenggarakan oleh Kampus Merdera.",
      "Mengembangkan ide bisnis Rumah Rama (Platform Booking Fasilitas Olahraga berbasis Mobile).",
      "Membuat 2 aplikasi mobile untuk user dan mitra.",
      "Pengembangan Mobile User menggunakan Android Studi, Java, MySqli.",
      "Pengembangan Mobile Mitra menggunakan Flutter.",
    ],
    link: "https://github.com/codewithrathi",
  },
  {
    title: "Fullstack Developer",
    company_name: "PT Promosi Digital Persada (Wirausaha Merdeka Intern)",
    icon: "https://wirausahamerdeka.kampusmerdeka.kemdikbud.go.id/info/wp-content/uploads/2023/03/Logo-Wirausaha-White-e1677769744432-1.png",
    iconBg: "#383E56",
    date: "Agt 2023 - Des 2023",
    link: "",
    points: [
      "Intership Wirausaha Merdeka yang di selenggarakan oleh Kampus Merdera.",
      "Belajar menjadi Entrepreneurship.",
      "Mengembangkan ide bisnis Rumah Rama (Platform Booking Fasilitas Olahraga berbasis Web).",
      "Pengembangan Web menggunakan CI 3, Php, Html, Css, Java Script.",
    ],
    link: "https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt",
  },
];

const educations = [
  {
    degree: "Diploma 3",
    branch: "Teknik Informatika",
    name: "Universitas Dian Nuswantoro",
    year: "(2021 - 2024)",
    image: udinus,
  },
];

const sertifikat = [
  {
    name: "Best Peformance",
    pdf: best,
  },
  {
    name: "Certification Scheme of Mobile Developer",
    pdf: mobile,
  },
  {
    name: "Agile Excecution",
    pdf: agile,
  },
  {
    name: "Effective Comunication",
    pdf: comunication,
  },
  {
    name: "Powerfull Delivery",
    pdf: powerfull,
  },
  {
    name: "Kepersetaan MSIB",
    pdf: sertifmsib,
  },
  {
    name: "Wirausaha Merderka",
    pdf: wmk,
  },
  {
    name: "MSIB Batch #6",
    pdf: msib,
  },
  {
    name: "TOEFL",
    pdf: toefl,
  },
  {
    name: "Dicoding Memulai Pemrograman dengan Kotlin",
    pdf: kotlin,
  },
];

export {
  list,
  profiles,
  technologies,
  experiences,
  educations,
  achievements,
  sertifikat,
};
