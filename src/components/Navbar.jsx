import { IconComponent } from './IconComponent';
import { HomeIcon } from '../icons/HomeIcon';
import { ProjectIcon } from '../icons/ProjectIcon';
import { ToolsIcon } from '../icons/ToolsIcon';
import { ExperienceIcon } from '../icons/ExperienceIcon';



export function Navbar() {
  return (
    
    <div className="bg-secondary opacity-80 border border-accent text-text rounded-lg p-3 flex space-x-4">
      <IconComponent link="" icon={<HomeIcon/>} name="Home"/>
      <IconComponent link="https://www.linkedin.com/in/yourprofile/" icon={<ProjectIcon/>} name="Projects" />
      <IconComponent link="mailto:your@email.com" icon={<ToolsIcon/>} name="Tools" />
      <IconComponent link="https://twitter.com/yourprofile" icon={<ExperienceIcon/>} name="Experience" />
    </div>
    
  );
}
