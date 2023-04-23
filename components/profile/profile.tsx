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
          <div className=" text-xl font-bold text-slate-950"> </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
