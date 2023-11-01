"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="NestQuest"
      className="hidden cursor-pointer md:block"
      height="50"
      width="100"
      src="/images/Logo.png"
    />
  );
};

export default Logo;
