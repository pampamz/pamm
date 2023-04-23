import React from "react";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <>
    <div className="gap-9 p-5">
      <div className=" bg-slate-100 p-1.5 w-fit text-3xl font-bold text-slate-950">
        Skills </div>
        <div className="gap-10 p-5">
        <div className=" text-2xl font-bold text-slate-950">HTML </div>
        <div className=" text-2xl font-bold text-slate-950">CSS</div>
        </div>

    
        </div>
    </>
  );
}
export default Skills;
