# 5. Вимоги до вхідних та вихідних даних

## 5.1 Вхідні дані

### 5.1.1 Метрики продуктивності

Система очікує такий мінімальний набір метрик у форматі Prometheus:

| Метрика | Тип | Опис |
|---------|-----|------|
| `http_requests_total` | counter | Загальна кількість HTTP-запитів |
| `http_request_duration_seconds` | histogram | Розподіл затримок запитів |
| `http_errors_total` | counter | Кількість запитів з кодами 4xx/5xx |
| `process_cpu_seconds_total` | counter | Споживання CPU процесом |
| `process_resident_memory_bytes` | gauge | Поточний розмір RSS пам'яті |

### 5.1.2 Структура JSON-лога

Кожен запис access log повинен мати наступну структуру (поля `timestamp`, `method`, `path`, `status`, `duration_ms` є обов'язковими):

```json
{
  "timestamp": "2025-04-01T14:32:11.123Z",
  "method": "GET",
  "path": "/api/v1/hotels",
  "status": 200,
  "duration_ms": 47.3,
  "request_size_bytes": 0,
  "response_size_bytes": 1842,
  "client_ip": "10.0.0.5",
  "service": "hotel-booking-api"
}
```

### 5.1.3 Вимоги до навчальних даних

| Вимога | Значення |
|--------|----------|
| Мінімальна тривалість вибірки | 7 діб безперервних даних |
| Рекомендована тривалість | 30–90 діб |
| Частота дискретизації | Не рідше ніж раз на 30 секунд |
| Допустима частка пропущених значень | Не більше 5% |
| Наявність розмітки | Не потрібна (unsupervised режим) |

### 5.1.4 Тестові датасети

Для перевірки якості системи використовуються:

- **CICIDS2017** — мережевий трафік з розміченими атаками (DDoS, PortScan, Brute Force, SQL Injection).
- **UNSW-NB15** — датасет мережевих аномалій з 9 класами атак.
- **Синтетичні логи** — згенеровані Apache JMeter з імітацією DDoS, SQL-ін'єкцій, деградації.

---

## 5.2 Вихідні дані

### 5.2.1 Структура події аномалії

```json
{
  "anomaly_id": "anom-20250401-143211-001",
  "detected_at": "2025-04-01T14:32:41.000Z",
  "anomaly_score": 0.87,
  "threshold": 0.72,
  "anomaly_type": "collective",
  "severity": "high",
  "affected_service": "hotel-booking-api",
  "detectors": {
    "isolation_forest_score": 0.81,
    "lstm_ae_reconstruction_error": 0.93
  },
  "shap_explanation": {
    "top_features": [
      { "feature": "error_rate_5m",      "shap_value": 0.34 },
      { "feature": "p99_latency_ms",     "shap_value": 0.27 },
      { "feature": "unique_paths_count", "shap_value": 0.18 }
    ]
  }
}
```

### 5.2.2 REST API ендпоінти системи

| Метод | Ендпоінт | Опис |
|-------|----------|------|
| GET | `/api/v1/status` | Поточний стан, версія моделі |
| GET | `/api/v1/anomalies` | Список аномалій з фільтрацією |
| GET | `/api/v1/anomalies/{id}` | Деталі з SHAP-поясненням |
| GET | `/api/v1/metrics` | Метрики якості за тиждень |
| POST | `/api/v1/feedback` | Feedback аналітика (TP/FP) |
