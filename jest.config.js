import { pathsToModuleNameMapper } from "ts-jest";
import tsconfig from "./tsconfig.json" assert { type: "json" };

const { compilerOptions } = tsconfig;

export default {
  preset: "ts-jest/presets/default-esm",
  coverageDirectory: "reports/jest-coverage",
  moduleFileExtensions: ["js", "json", "ts", "d.ts"],
  reporters: ["default"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { useESM: true }),
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
