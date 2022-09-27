import { Project } from "../types";

type ProjectType = "front_end" | "back_end" | "creative_coding" | "presentation"

export default function goToDeployedProject(project: Project, projectType : ProjectType): void {
  if (project[projectType] !== undefined) {
    const projectTypeSection = project[projectType]
    if (projectTypeSection!.deployed_link !== undefined){
      const deployedLink = projectTypeSection!.deployed_link
      window.open(deployedLink, "_blank");
    }
  } else {
    window.alert("Project not deployed yet! Check back soon.");
  }
}
