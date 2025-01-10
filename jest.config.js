export default {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@vue/test-utils":
      "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
  },
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
};
