import { IoMdCalendar, IoMdSearch, IoMdSettings, IoMdTv } from "react-icons/io";
import Logo from "../../../public/vite.svg";
import { CiCircleQuestion } from "react-icons/ci";
import { FaBuilding } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsHeadphones } from "react-icons/bs";
import "./SideMenu.css";

function SideMenu() {
  const iconSize = 32;
  return (
    <div className="side-menu">
      <header>
        <img src={Logo} alt="" />
      </header>
      <main>
        <IoMdSearch size={iconSize} />
        <IoMdTv size={iconSize} />
        <CiCircleQuestion size={iconSize} />
        <IoMdCalendar size={iconSize} />
        <FaBuilding size={iconSize} />
        <RiMoneyDollarCircleFill size={iconSize} />
        <BsHeadphones size={iconSize} />
      </main>
      <footer>
        <IoMdSettings size={iconSize} />
      </footer>
    </div>
  );
}

export default SideMenu;
