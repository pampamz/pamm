import React from 'react';

interface EducationProps {

}

const Education: React.FC<EducationProps> = ({  }) => {
    return (
        <> 
      <div className="flex flex-col gap-5 p-5">
        <div className=" bg-slate-100 p-1.5 w-fit text-3xl font-bold text-slate-950">
        Education </div>
        <div className="flex flex-col gap-3 p-2">
          <div className=" text-xl font-bold text-slate-950">Mahasarakham University [2018-2021]</div>
          <div className=" text-xl font-bold text-slate-950">geographic information system</div>
  
      </div>
      </div>
        </>
    );
};

export default Education;