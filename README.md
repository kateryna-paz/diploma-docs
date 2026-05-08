# ADS — Система виявлення аномалій у web-сервісах

> **Автор:** Пазинич Катерина Андріївна  
> **Науковий керівник:** Полуектова Н.Р., д.т.н., професор  
> **Університет:** Запорізький національний університет, 2026  
> **Тема КР:** «Автоматичне виявлення аномалій у web-сервісах за допомогою методів машинного навчання»

---

## Структура репозиторію

```
diploma-docs/
├── docs/
│   └── pages/
│       ├── index.md              # Головна сторінка
│       ├── about.md              # Про проєкт та автора
│       └── tz/                   # Технічне завдання (7 розділів)
│           ├── overview.md
│           ├── general.md
│           ├── purpose.md
│           ├── requirements.md
│           ├── components.md
│           ├── data.md
│           ├── quality.md
│           └── stages.md
├── openapi.yaml                  # OpenAPI 3.0.3 — REST API системи ADS
├── zudoku.config.ts              # Конфігурація документаційного сайту
├── package.json
└── .github/
    └── workflows/
        └── deploy-docs.yml       # CI/CD → GitHub Pages
```

---

## Запуск локально

```bash
npm install
npm run dev
```

Відкрийте **http://localhost:3000** у браузері.

---

## Деплой на GitHub Pages

Документація автоматично публікується на GitHub Pages при кожному push до гілки `main`.

**Налаштування (одноразово):**

1. Перейдіть у **Settings → Pages** репозиторію
2. У полі **Source** оберіть **GitHub Actions**
3. Виконайте push до `main`
   **Live URL:** `https://kateryna-paz.github.io/diploma-docs/`

---

## License

MIT — Pazynych Kateryna
