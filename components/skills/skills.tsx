import React from "react";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <>
    <div className="flex flex-col gap-5 p-5">
      <div className=" bg-slate-100 p-1.5 w-fit text-3xl font-bold text-slate-950">
        Skills </div>
        <div className="flex flex-col gap-3 p-2">
        <div className=" text-xl font-bold text-slate-950">HTML </div>
        <div className=" text-xl font-bold text-slate-950">TaiwindCSS</div>
        <div className="text-xl font-bold text-slate-950">NextJs</div>
        </div>
        

    
        </div>
    </>
  );
}
export default Skills;
