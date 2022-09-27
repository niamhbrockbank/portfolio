import { Project } from "../types";

export default function goToDeployedProject(project: Project): void {
  if (project.front_end !== undefined) {
    window.open(project.front_end.deployed_link, "_blank");
  } else {
    window.alert("Project not deployed yet! Check back soon.");
  }
}
