import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { PiChatsTeardrop } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { PiSpeakerSimpleHighLight } from "react-icons/pi";
import { LuCalendarRange } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const sideBarMenu = [
  {
    title: "Home",
    route: "/dashboard",
    icon: IoHomeOutline,
  },
  {
    title: "Events",
    route: "/events",
    icon: LuCalendarRange,
  },
  {
    title: "Speakers",
    route: "/speakers",
    icon: PiSpeakerSimpleHighLight,
  },
  {
    title: "Profile",
    route: "/profile",
    icon: CgProfile,
    mobile: true,
  },
  {
    title: "Reports",
    route: "/reports",
    icon: TbReport,
  },
  {
    title: "Notifications",
    route: "/notification",
    icon: IoNotificationsOutline,
    badge: true,
  },
  {
    title: "Messages",
    route: "/messages",
    icon: PiChatsTeardrop,
  },
  {
    title: "Settings",
    route: "/settings",
    icon: IoSettingsOutline,
  },
];

const tableData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speakers: ["Jane Doe", "Dr. Peter Smith", "John Lee"],
    status: "Completed",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speakers: ["Dr. Peter Smith", "John Lee"],
    status: "In Progress",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speakers: ["Dr. Aisha Malik", "Jane Doe", "Dr. Peter Smith", "John Lee"],
    status: "Completed",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speakers: ["John Lee", "Jane Doe", "Dr. Peter Smith"],
    status: "Completed",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speakers: ["Rachel Moore", "John Lee", "Jane Doe", "Dr. Peter Smith"],
    status: "Completed",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speakers: ["Prof. Alan Green", "John Lee", "Jane Doe"],
    status: "Completed",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speakers: ["Kevin Adams", "John Lee", "Jane Doe"],
    status: "In Progress",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speakers: ["Emily Zhang", "John Lee", "Jane Doe"],
    status: "Completed",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speakers: ["Dr. Maria Hernandez", "Emily Zhang", "John Lee", "Jane Doe"],
    status: "In Progress",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speakers: ["Guest Panel", "Emily Zhang", "John Lee", "Jane Doe"],
    status: "In Progress",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export { sideBarMenu, tableData };
