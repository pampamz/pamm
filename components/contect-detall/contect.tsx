import React from "react";
import { MdAttachEmail } from "react-icons/md";

interface ContectDetailProps {}

const ContectDetail: React.FC<ContectDetailProps> = ({}) => {
  function detil(icon: React.ReactNode, name: string) {
    return (
      <>
        <div className=" flex p-3 gap-7 bg-slate-400">
          <div className="flex items-center justify-center text-gray-700 ">
            {icon}
            {/* <MdAttachEmail className="mt-1  text-2xl "></MdAttachEmail> */}
          </div>
          <div className=" text-center text-lg text-gray-800 font-mono ">
            {name}
            {/* pammy.kanokwan@gmail.com */}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {detil(
        <MdAttachEmail className="mt-1  text-2xl "></MdAttachEmail>,
        "pammy.kanokwan@gmail.com"
      )}
      {detil(
        <MdAttachEmail className="mt-1  text-2xl "></MdAttachEmail>,
        "pammy.kanokwan@gmail.com"
      )}
    </>
  );
};

export default ContectDetail;
