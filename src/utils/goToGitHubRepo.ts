import { Project } from "../types";

export default function goToGitHubRepo(project: Project) {
  window.open(project.github_link, "_blank");
}
