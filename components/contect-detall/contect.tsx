import React from "react";

interface ContectDetailProps {}

const ContectDetail: React.FC<ContectDetailProps> = ({}) => {
  return (
    <>
      <div className=" flex p-3 gap-3 bg-slate-400">
        <div className="text-lg text-gray-700 ">o</div>
        <div className=" text-center text-lg text-gray-800 font-mono ">
          pammy.kanokwan@gmail.com
        </div>
      </div>
    </>
  );
};

export default ContectDetail;
