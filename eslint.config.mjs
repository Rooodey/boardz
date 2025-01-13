import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier" // Fügt Prettier-Integration hinzu
  ),
  {
    rules: {
      "prettier/prettier": "warn", // Zeigt Prettier-Fehler als Warnungen
      "react/react-in-jsx-scope": "off", // Next.js benötigt kein `import React`
      "@typescript-eslint/no-unused-vars": "warn", // Warnt bei nicht verwendeten Variablen
      "no-console": "warn" // Warnt bei `console.log()`-Verwendungen
    },
  },
];

export default eslintConfig;
