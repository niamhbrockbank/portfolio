import { Project } from "../types";

export default function goToDeployedProject(
  project: Project,
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
): void {
  setCurrentPage(project.name);

  if (project.deployed_link) {
    window.open(project.deployed_link, "_blank");
  } else {
    window.alert("Project not deployed yet! Check back soon.");
  }
}
