import { autoBindSteps, loadFeature } from "jest-cucumber";
import { submarineSteps } from "../step-definitions/submarine-steps";

const feature = loadFeature("../features/submarine.feature", {
  tagFilter: "not @excluded",
  loadRelativePath: true,
});

autoBindSteps(feature, [submarineSteps]);
