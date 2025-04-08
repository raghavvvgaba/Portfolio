import { AllTechStackIcons } from "../icons/AllTechStackIcons";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

//https://react-icons.github.io/react-icons/search/#q=javascript
// visit this site to understand coloring of the icons in dark mode

export function TechStackBox() {
    return <div className="pt-5 flex gap-10 justify-around items-center flex-wrap">
        
        <AllTechStackIcons color={"text-orange-500"} hoverColor={"hover:text-orange-700"} icon={FaHtml5} animation={"hover:animate-wiggle"}/>
        
        <AllTechStackIcons color={"text-blue-500"} hoverColor={"hover:text-blue-700"} icon={FaCss3Alt} animation={"hover:animate-wiggle"}/>

        <AllTechStackIcons color={"text-yellow-500"} hoverColor={"hover:text-yellow-600"} icon={SiJavascript} animation={"hover:animate-wiggle"}/>

        <AllTechStackIcons color={"text-cyan-500"} hoverColor={""} icon={FaReact} animation={"hover:animate-spin"}/>

        <AllTechStackIcons color={"text-green-500"} hoverColor={"hover:text-green-600"} icon={LiaNode} animation={"hover:animate-wiggle"}/>

        <AllTechStackIcons color={"text-green-500"} hoverColor={"hover:text-green-600"} icon={SiMongodb} animation={"hover:animate-wiggle"}/>

        <AllTechStackIcons color={"text-green-500"} hoverColor={"hover:text-green-600"} icon={SiExpress} animation={"hover:animate-wiggle"}/>

        <AllTechStackIcons color={"text-cyan-500"} hoverColor={"hover:text-cyan-600"} icon={SiTailwindcss} animation={"hover:animate-wiggle"}/>

        <AllTechStackIcons color={"text-blue-500"} hoverColor={"hover:text-blue-600"} icon={TbBrandCpp} animation={"hover:animate-wiggle"}/>

        <AllTechStackIcons color={"text-orange-500"} hoverColor={"hover:text-orange-700"} icon={FaGitAlt} animation={"hover:animate-wiggle"}/>

        

    </div>
}