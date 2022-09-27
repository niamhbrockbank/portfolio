import { Project } from "../types";
import goToDeployedProject from "./goToDeployedProject";

const testProject: Project = {
  id: 1,
  name: "tv show picker",
  description:
    "front-end app that fetches tv show data from an API and can navigate between shows with a dropdown",
  date_created: "today",
  front_end: {
    github_link: "https://github.com/Wilrosmi/tv-shows",
    deployed_link : "https://github.com/Wilrosmi/tv-shows"
  },
};

test("function returns void", () => {
  expect(goToDeployedProject(testProject, "front_end")).toBe(undefined);
});

test.skip("opens correct github repo in new window", () => {
  //TO DO: test that new window opens
  expect(goToDeployedProject(testProject, "front_end")).toBe(undefined);
});
