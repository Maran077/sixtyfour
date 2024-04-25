import { ReactNode } from "react";
import "./Timeline.css";

type TimelineProps = {
  children: ReactNode;
};

type EventType = {
  title: string;
  subtitle: string;
  interval: string;
  description: any;
};

export const Timeline = ({ children }: TimelineProps) => (
  <div className="container">
    <ul className="timeline-time">{children}</ul>
  </div>
);

export const Event = ({
  title,
  subtitle,
  interval,
  description,
}: EventType) => (
  <li className="event">
    <label className="timeline-icon"></label>
    <div className="body">
      <p className="timeline-date">{interval}</p>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <div className="description">{description}</div>
    </div>
  </li>
);
