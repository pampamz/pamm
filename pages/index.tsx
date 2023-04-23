import ContectDetail from "@/components/contect-detall/contect";
import Education from "@/components/education/education";
import Name from "@/components/name/name";
import Profile from "@/components/profile/profile";
import Skills from "@/components/skills/skills";
import Workexperience from "@/components/workexperience/workexperience";

export default function Home() {
  function Patding() {
    return (
      <>
        <div className=" h-52 w-52 rounded-full bg-indigo-200"></div>
      </>
    );
  }
  return (
    <>
      <div className="relative ">
        <div className="absolute -right-20 -top-10">{Patding()} </div> 
        <div className="absolute -left-20 -top-12">{Patding()} </div> 

        <div className="lg:flex p-10 w-full">
          <div className="h-52 bg-white"></div>
          <div className="gap-20 w-full">
            <div className=" bg-white">
              <div className="h-44"></div>
              <Name></Name> <ContectDetail></ContectDetail> <Skills></Skills>
            </div>
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
