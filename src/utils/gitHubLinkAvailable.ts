import { Project } from "../types";

export default function gitHubLinkAvailable(project : Project): boolean{
    return Object.keys(project).includes("github_link")
  }