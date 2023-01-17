export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@components/(.*)": "<rootDir>/src/components/$1",
    "^@pages/(.*)": "<rootDir>/src/pages/$1",
    "^@utils/(.*)": "<rootDir>/src/utils/$1",
    "^@models/(.*)": "<rootDir>/src/models/$1",
    "^@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "^@store/(.*)": "<rootDir>/src/store/$1",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["./jest-setup.ts"],
  testEnvironment: "jsdom",
};
