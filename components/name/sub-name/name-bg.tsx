import React from "react";

interface NameBgProps {}

const NameBg: React.FC<NameBgProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col w-full h-32 bg-indigo-200 "></div>
      <div className="flex flex-col w-full font-bold bg-indigo-200 p-5 ">
        <div className="text-6xl">Kanokwan</div>
        <div className="text-6xl">Deelaon</div>
      </div>
      <div className="flex flex-col w-full h-12 bg-indigo-200 "></div>
    </>
  );
};

export default NameBg;
