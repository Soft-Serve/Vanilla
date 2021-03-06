module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  // Airbnb's ESLint config requires this
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true, endOfLine: "auto" }],
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-cycle": "off",
    "no-underscore-dangle": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/no-extraneous-dependencies": [
      "off",
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
  },
};
