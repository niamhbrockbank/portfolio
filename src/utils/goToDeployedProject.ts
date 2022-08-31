import { Project } from "../types";

export default function goToDeployedProject(project: Project): void {
  if (project.deployed_link) {
    window.open(project.deployed_link, "_blank");
  } else {
    window.alert("Project not deployed yet! Check back soon.");
  }
}
