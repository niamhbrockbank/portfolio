import { Project } from "../types";

export default function goToGitHubRepo(project: Project): void {
  window.open(project.github_link, "_blank");
}
