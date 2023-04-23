import React from "react";
import Nameimg from "./sub-name/name-img";
import NameBg from "./sub-name/name-bg";

interface NameProps {}

const Name: React.FC<NameProps> = ({}) => {
  return (
    <>
    <div className="relative">
        <div className="w-full  absolute -top-32"><Nameimg></Nameimg></div>
      <div className=""><NameBg></NameBg></div>
      </div>
    </>
  );
};

export default Name;
