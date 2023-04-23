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
          <div className=" text-xl font-bold text-slate-950"></div>
          </div>
          </div>
    </>
  );
};

export default Education;
