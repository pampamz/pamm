import React from "react";

interface NameimgProps {}

const Nameimg: React.FC<NameimgProps> = ({}) => {
  return (
    <>
      <div className="flex items-center justify-center p-3 ">
        <div className="h-52 w-52 rounded-full bg-orange-200 overflow-hidden border-8 border-indigo-300">
            <img src="/pam.jpg" alt="" />
        </div>
        
      </div>
    </>
  );
};

export default Nameimg;
