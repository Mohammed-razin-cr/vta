import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: projectDirectory });

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "test-results/**"],
  },
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;
