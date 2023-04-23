import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMessage,AiFillHome } from "react-icons/ai";

interface ContectDetailProps {}

const ContectDetail: React.FC<ContectDetailProps> = ({}) => {
  function detil(icon: React.ReactNode, name: string) {
    return (
      <>
        <div className=" flex p-5 gap-7 ">
          <div className="flex text-gray-700 ">
            {icon}
            {/* <MdAttachEmail className="mt-1  text-2xl "></MdAttachEmail> */}
          </div>
          <div className=" text-lg text-gray-800 font-mono ">
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
      {detil(<IoMdCall className="mt-1  text-2xl "></IoMdCall>, "065-8186733")}

      {detil(
        <AiOutlineMessage className="mt-1  text-2xl "></AiOutlineMessage>,
        " ID:kanokwan.pam"
      )}

      {detil(
        <AiFillHome className="mt-1  text-2xl "></AiFillHome>,
        "หมู่ที่ 9 ต.เทอดไทย อ.ทุ่งเขาหลวง จ.ร้อยเอ็ด"
      )}
    </>
  );
};

export default ContectDetail;
