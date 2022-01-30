import lrnrImage from "../../assets/lrnr.jpg";
import catalozImage from "../../assets/cataloz.png";

export const experienceList = [
  {
    id: 1,
    companyImage: lrnrImage,
    companyName: "Lrnr Pvt Ltd",
    profileName: "Software Engineer",
    websiteLink:"https://www.lrnr.us/",
    isCurrentCompany: true,
    joiningMonth: 4,
    joiningYear: 2021,
    technologiesUsed: [
      "React.js",
      "Redux",
      "HTML",
      "CSS",
      "Javascript",
      "Ant Design",
      "Firebase",
    ],
    rolesAndReponsibilities: [
      "Make resuable responsive and pixel perfect UI components with React.js",
      "Handle all kinds of data and manage state of the app using Redux",
      "Hit and recieve APIs to backend and handle errors as per requirements",
      "Start admin client dashboard for internal team from scratch and build it with own designs and implementations using Ant design",
      "Make new kinds of interactive quiz items for the students and develop those in React. Thousands of students take the quiz at a time.",
      "Write well tested code which is production ready followed by best practices ",
    ],
  },
  {
    id: 2,
    companyName: "Cataloz (Make Your Cloth)",
    companyImage: catalozImage,
    profileName: "Node.js Developer Intern",
    websiteLink: "https://cataloz.com/",
    joiningMonth: 5,
    joiningYear: 2020,
    leavingMonth: 3,
    leavingYear: 2021,
    technologiesUsed: [
      "Node.js",
      "Express.js",
      "MySql",
      "Javascript",
      "REST API",
      "Distance Matrix API",
      "Good OR Tools",
    ],
    rolesAndReponsibilities: [
      "Develop highly efficient and scalable REST APIs in Express Js",
      "Handle API requests and implement complex logic to send the required response",
      "Make SQL queries and handle the database and manipulate 120+ tables",
      "Implemented socket.io for features like notifications and chats",
      "Implemented Google Maps APIs such as geolocation and distance matrix API and manipulated" +
        " them as per requirements",
      "Implemented authentication with google and facebook",
    ],
  },
];
