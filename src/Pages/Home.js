import React from "react";
import { SideNav } from "../Component/SideNav/SideNav";
import { Heading } from "../Component/Heading/Heading";
import { Search } from "../Component/Search/Search";
import { AllNotes } from "./AllNotes";

export const Home = () => {
  return (
    <div className="flex mt-4 px-20">
      <div className="mx-auto px-5">
        <SideNav />
      </div>
      <div className="flex-auto w-32">
        <Heading />
        <Search/>
        <AllNotes/>
      </div>
    </div>
  );
};
