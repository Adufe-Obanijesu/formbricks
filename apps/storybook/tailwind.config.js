/** @type {import('tailwindcss').Config} */

import base from "../../packages/tailwind-config/tailwind.config";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
  ...base,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "../../packages/ui/**/*.{js,ts,jsx,tsx}"],
};
