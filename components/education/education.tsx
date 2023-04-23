import React from 'react';

type EducationProps = {
};

const Education: React.FC<EducationProps> = ({  }) => {
  return (
    <>
       <div className="flex flex-col gap-5 p-5">
        <div className=" bg-slate-100 p-1.5 w-fit text-3xl font-bold text-slate-950">
        Education </div>
        <div className="flex flex-col gap-3 p-2">
          <div className=" text-2xl font-bold text-slate-950">Mahasarakham University [2018-2021]</div>
          <div className=" text-1xl font-bold text-slate-950">Geographic information system</div>
          <div className=" text-gl font-bold text-slate-800">GIS(Geographic information system )หรือระบบสารสนเทศภูมิศาสตร์ คือกระบวนการของ Hardware,Software,Peopleware และ Data ในการเสริมสร้างประสิทธิภาพของการจัดเก็บข้อมูล การปรับปรุงข้อมูล การคำนวณ และการวิเคราะห์ข้อมูล ให้แสดงผลในรูปของข้อมูลที่สามารถอ้างอิงได้ในทางภูมิศาสตร์ในการจัดเก็บและการใช้ข้อมูลเพื่ออธิบายสภาพต่างๆบนพื้นผิวโลกโดยอาศัยลักษณะทางภูมิศาสตร์เป็นตัวเชื่อมโยงความสัมพันธ์ระหว่างข้อมูลต่างๆ </div>
          </div>
          </div>
    </>
  );
};

export default Education;
