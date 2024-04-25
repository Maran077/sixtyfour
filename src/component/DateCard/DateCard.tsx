import "./DateCard.css";
import { FaCalendar } from "react-icons/fa";
type Props = {
  color: string;
  index: number;
};

function DateCard({ color, index }: Props) {
  return (
    <div className="container-date">
      <FaCalendar className="icon" color={color} />
      <h2 className="title">My Saved Liabery {index + 1}</h2>
      <p className="date">10-03-2024</p>
    </div>
  );
}

export default DateCard;
