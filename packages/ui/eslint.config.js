import baseConfig from "@signer/config-eslint/base";
import reactConfig from "@signer/config-eslint/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
