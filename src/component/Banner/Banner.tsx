import { FaRegBell, FaRegCalendar, FaRegClock } from "react-icons/fa";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="welcome-tag">
        <h3>Good Afternoon, Akshay</h3>
        <p>You are subscribed to Retail plan</p>
      </div>
      <div className="timeline">
        <FaRegCalendar />
        <h3>Today, 14 February</h3>
        <FaRegClock />
        <p>16:42</p>
        <FaRegBell className="bell" size={23} />
      </div>
    </div>
  );
}

export default Banner;
