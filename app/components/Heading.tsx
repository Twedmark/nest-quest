"use client";

import { IconType } from "react-icons";

interface HeadingProps {
  title: string;
  icon?: IconType;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  icon: Icon,
  subtitle,
  center,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      {Icon && (
        <div className="flex">
          <div className="text-2xl font-bold">{title}</div>
          <Icon size={32} className="mx-4 flex" />
        </div>
      )}
      {!Icon && <div className="text-2xl font-bold">{title}</div>}
      <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
    </div>
  );
};

export default Heading;
