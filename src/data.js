import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoYoutube
} from "react-icons/io5";
import img1 from "./images/img1.png";

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoCodeWorking />,
    title: "High School Student",
    location: "San Antonio, TX",
    description:
      "Studying at Keystone School",
  },
  {
    id: 2,
    date: "2023",
    iconsSrc: <IoCodeWorking />,
    title: "3rd Place - ARSEF",
    location: "San Antonio, TX",
    description:
      "Won 3rd place in category at the Alamo Regional Science and Engineering Fair (Senior Division)",
  },
  {
    id: 3,
    date: "2022",
    iconsSrc: <IoCodeWorking />,
    title: "TJSHS",
    location: "College Station, TX",
    description:
      "Chosen to present at the Texas Junior Science & Humanities Symposium",
  },
  {
    id: 4,
    date: "2022",
    iconsSrc: <IoCodeWorking />,
    title: "1st Place - TXSEF",
    location: "College Station, TX",
    description:
      "Won 1st place in Computational Biology at the Texas Science and Engineering Fair (Junior Division)",
  },
  {
    id: 5,
    date: "2021",
    iconsSrc: <IoCodeWorking />,
    title: "1st Place - TXSEF",
    location: "College Station, TX",
    description:
      "Won 1st place in Computer Science at the Texas Science and Engineering Fair (Junior Division)",
  },
  {
    id: 5,
    date: "2021",
    iconsSrc: <IoCodeWorking />,
    title: "Best in Fair - ARSEF",
    location: "San Antonio, TX",
    description:
      "Won Best in Fair at the Alamo Regional Science and Engineering Fair (Junior Division)",
  },
];

export const Projects = [
  {
    id: 1,
    name: "shaum.dev",
    imageSrc: img1,
    techs: "React Js, Spline.design",
    github: "#",
  }
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoDiscord className="text-textBase text-3xl cursor-pointer" />,
    name: "@astroneural",
    link: "https://discord.com",
  },
  {
    id: 2,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "Astroneural",
    link: "https://github.com/Astroneural",
  },
  {
    id: 3,
    iconSrc: <IoLogoYoutube className="text-textBase text-3xl cursor-pointer" />,
    name: "Astroneural",
    link: "https://youtube.com/@Astroneural",
  },
];