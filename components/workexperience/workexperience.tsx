import React from "react";

interface WorkexperienceProps {}

const Workexperience: React.FC<WorkexperienceProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-5 p-5">
        <div className=" bg-slate-100 p-1.5 w-fit text-3xl font-bold text-slate-950">
          Workexperience{" "}
        </div>
        <div className="flex flex-col gap-3 p-2">
          <div className=" text-2xl font-bold text-slate-950">
            บริษัท เค เอ็น เอส เอ็นจิเนียริ่ง คอร์ปอเรชั่น จํากัด [พ.ย. 2021-
            มี.ค.2022]
          </div>
          <div className=" text-1xl font-bold text-slate-950">GIS officer</div>
          <div className=" text-gl font-bold text-slate-800">
            นำเข้า จัดเก็บ รวบรวม
            จัดทำฐานข้อมูลระบบสารสนเทศภูมิศาสตร์โครงการจัดทําฐานข้อมูลที่ดินและสิ่งปลูกสร้างในระบบสารสนเทศเพื่อการบริหาร
            ทรัพย์สินของการรถไฟแห่งประเทศไทย
          </div>

          <div className=" text-2xl font-bold text-slate-950">
            บริษัท ทีเคเอ็น เอ็นจิเนียริ่ง แอนด์ เทคโนโลยี จํากัด [เม.ย.2022-
            เม.ย.2023]
          </div>
          <div className=" text-1xl font-bold text-slate-950">GIS officer</div>
          <div className=" text-gl font-bold text-slate-800">
            จัดทำฐานข้อมูลระบบสารสนเทศภูมิสารศาสตร์ทำแผนที่ประกอบรายงานดูแลติดต่อประสานงานระหว่างทีมทำงานกับบริษัทฯ
            หรือหน่วยงานอื่น ๆ
            ที่เกี่ยวข้องรับแจ้งปัญหาอื่นๆและดำเนินการประสานงานในการแก้ไขปัญหานั้นๆกับทีมปฏิบัติงานตามผู้จัดการโครงการมอบหมาย
          </div>
        </div>
      </div>
    </>
  );
};

export default Workexperience;
