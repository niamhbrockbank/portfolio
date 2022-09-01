import { Project } from "../types";
import goToGitHubRepo from "./goToGitHubRepo";

const testProject: Project = {
  id: 1,
  name: "tv show picker",
  description:
    "front-end app that fetches tv show data from an API and can navigate between shows with a dropdown",
  image: "no image yet",
  github_link: "https://github.com/Wilrosmi/tv-shows",
};

test("function returns void", () => {
  expect(goToGitHubRepo(testProject)).toBe(undefined);
});

test.skip("opens correct github repo in new window", () => {
  //TO DO: test that new window opens
  expect(goToGitHubRepo(testProject)).toBe(undefined);
});
