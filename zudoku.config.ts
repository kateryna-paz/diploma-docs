import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/diploma-docs",

  redirects: [
    { from: "/", to: "/diploma-docs/tz/overview" },
    { from: "/undefined", to: "/diploma-docs/tz/overview" },
  ],

  metadata: {
    title: "ADS — Документація дипломної роботи",
    description:
      "Технічне завдання та API-специфікація системи виявлення аномалій у web-сервісах на основі ML",
    favicon: "/favicon.ico",
  },

  navigation: [
    {
      type: "doc",
      file: "index",
      label: "Головна",
    },
    {
      type: "doc",
      file: "about",
      label: "Про проєкт",
    },
    {
      type: "category",
      label: "Технічне завдання",
      items: [
        { type: "doc", file: "tz/overview", label: "Огляд ТЗ" },
        { type: "doc", file: "tz/general", label: "1. Загальні відомості" },
        { type: "doc", file: "tz/purpose", label: "2. Призначення та мета" },
        { type: "doc", file: "tz/requirements", label: "3. Вимоги до системи" },
        {
          type: "doc",
          file: "tz/components",
          label: "4. Архітектура та склад",
        },
        { type: "doc", file: "tz/data", label: "5. Вхідні та вихідні дані" },
        { type: "doc", file: "tz/quality", label: "6. Вимоги до якості" },
        { type: "doc", file: "tz/stages", label: "7. Стадії розробки" },
      ],
    },
    {
      type: "link",
      label: "API Reference",
      to: "/api",
    },
  ],

  apis: [
    {
      type: "file",
      input: "./openapi.yaml",
      path: "api",
    },
  ],

  docs: {
    files: "/docs/pages/**/*.{md,mdx}",
  },

  theme: {
    light: {
      primary: "#1a56db",
      primaryForeground: "#ffffff",
    },
    dark: {
      primary: "#4f8ef7",
      primaryForeground: "#0f172a",
    },
  },
};

export default config;
