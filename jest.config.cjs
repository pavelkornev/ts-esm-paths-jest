const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: "ts-jest/presets/default-esm",
  coverageDirectory: "reports/jest-coverage",
  moduleFileExtensions: ["js", "json", "ts", "d.ts"],
  reporters: ["default"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { useESM: true }),
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
