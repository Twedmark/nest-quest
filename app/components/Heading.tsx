"use client";

import { IconType } from "react-icons";
import { SafeUser } from "../types";
import HeartButton from "./HeartButton";

interface HeadingProps {
  title: string;
  icon?: IconType;
  subtitle?: string;
  center?: boolean;
  currentUser?: SafeUser | null;
  listingId?: string;
  heartButton?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  icon: Icon,
  subtitle,
  center,
  currentUser,
  listingId,
}) => {
  return (
    <div className="flex flex-row">
      <div
        className={`
          flex
          flex-col
          ${center ? "text-center" : "text-start"}
        `}
      >
        {Icon && (
          <div className="flex">
            <div className="text-2xl font-bold">{title}</div>
            <Icon size={32} className="mx-4 flex" />
          </div>
        )}
        {!Icon && <div className="text-2xl font-bold">{title}</div>}
        <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
      </div>
      {listingId && (
        <div className="ml-auto mr-5 mt-auto">
          <HeartButton
            size={36}
            listingId={listingId}
            currentUser={currentUser}
          />
        </div>
      )}
    </div>
  );
};

export default Heading;
