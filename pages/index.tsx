import ContectDetail from "@/components/contect-detall/contect";
import Education from "@/components/education/education";
import Name from "@/components/name/name";
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
      {/* <Name></Name> */}
      <div className="p-10">
      <div className="h-52 bg-white"></div>
      <div className="lg:flex gap-20 w-full">
        <div className=" bg-white">
          <div className="h-44"></div>
          <Name></Name> <ContectDetail></ContectDetail> <Skills></Skills>
        </div>
        
        <div className=" bg-white">
          <div className=""></div>
          <Profile></Profile> <Education></Education>
          <Workexperience></Workexperience>
  
        </div>
      </div>
      </div>
    </>
  );
}
