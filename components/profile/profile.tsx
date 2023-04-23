import React from "react";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-5 p-5">
        <div className=" bg-slate-100 p-1.5 w-fit text-3xl font-bold text-slate-950">
          Profile
        </div>
        <div className="flex flex-col gap-3 p-2">
          <div className=" text-xl font-bold text-slate-950"> ดิฉันมีพื้นฐานในสายงาน geographic information system และกำลังพัฒนาทักษะด้านการเขียนเว็บไซต์ ได้เรียนรู้การใช้งาน tailwindcss และ nextjs และเข้าใจพื้นฐาน HTML, CSS มีประสบการณ์ในการทำโปรเจ็กต์ขนาดเล็กๆ เป็นคนที่ตั้งใจและพยายามอยู่เสมอพร้อมเรียนรู้สิ่งใหม่ๆเพื่อมาฝึกฝนพัฒนาตัวเองให้มากยิ่งขึ้นและมีเป้าหมายในการทำงานให้สำเร็จตามระยะเวลาที่กำหนด ได้นําประสบการณ์ความรู้และทักษะที่มีอยู่มาใช้ให้เกิดประโยชน์มากที่สุดเพื่อมาพัฒนาทักษะได้อย่างต่อเนื่อง ดิฉันหวังว่าจะได้มีโอกาสในการทำงานร่วมกับทีมที่เชี่ยวชาญด้านการพัฒนาเว็บไซต์</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
