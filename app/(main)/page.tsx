import { ArtScreen } from "@/components/art/art";
import { HomeScreen } from "@/components/home/home";
import { NavigationFooter } from "@/components/navigation/navigation-footer";
import { ProfileScreen } from "@/components/profile/profile";
import { ProjectsScreen } from "@/components/projects/projects";
import { ResumeScreen } from "@/components/resume/resume";
import { SkillsScreen } from "@/components/skills/skills";

export default function Home() {

  return (
    <>
      <HomeScreen />
      <ProfileScreen />
      <ResumeScreen />
      <SkillsScreen />
      <ProjectsScreen/>
      <ArtScreen />
      <NavigationFooter />
    </>
  );
}
