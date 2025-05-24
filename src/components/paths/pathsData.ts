
import { LearningPath } from "./types";
import { engineeringPaths } from "@/data/engineering-paths";
import { miningPaths } from "@/data/mining-paths";
import { managementPaths } from "@/data/management-paths";

export const learningPaths: LearningPath[] = [
  ...engineeringPaths,
  ...miningPaths,
  ...managementPaths,
];
