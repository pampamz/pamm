import ContectDetail from "@/components/contect-detall/contect";
import Education from "@/components/education/education";
import Profile from "@/components/profile/profile";
import Skills from "@/components/skills/skills";
import Workexperience from "@/components/workexperience/workexperience";

export default function Home() {
  return (
    <>
      {/* <ContectDetail></ContectDetail> */}
      {/* <Skills></Skills> */}
      {/* <Profile></Profile> */}
      {/* <Education></Education> */}
      {/* <Workexperience></Workexperience> */}
      <div className=" flex gap-2 w-full bg-slate-300">
        <div className=" bg-slate-600"><ContectDetail></ContectDetail> <Skills></Skills> </div>
        <div className=" bg-slate-400"><Profile></Profile> <Education></Education> <Workexperience></Workexperience></div>
      </div>
    </>
  );
}
