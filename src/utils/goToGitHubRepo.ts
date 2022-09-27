import { Project } from "../types";

export default function goToGitHubRepo(project: Project): void {
  if (project.front_end !== undefined) {
    window.open(project.front_end.github_link, "_blank");
  }
}
