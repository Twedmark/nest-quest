"use client";

import Image from "next/image";

interface AvatarProps {
  image: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      height="30"
      width="30"
      src={image ? image : "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
