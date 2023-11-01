"use client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";
import { SafeUser } from "@/app/types";

interface NavBarProps {
  currentUser?: SafeUser | null;
}

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <nav className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div
            className="
                flex
                flex-row 
                items-center
                justify-between
                gap-3
                md:gap-0"
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </nav>
  );
};

export default NavBar;
