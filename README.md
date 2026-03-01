# @barfinex/key

**API keys and credential management** for the [Barfinex](https://barfinex.com) ecosystem — secure storage and retrieval of exchange/broker API keys used by connectors and Provider.

Centralize key handling so sandbox vs production and multi-connector setups stay consistent and keys are not scattered across config files.

---

## What it does

- **Key storage and retrieval** — one service for API keys and secrets used by trading connectors.
- **Multiple connectors** — support for different exchanges and sandbox/production modes.
- **NestJS integration** — `KeyModule` and `KeyService` for dependency injection and env-based or vault-based config.

---

## Installation

```sh
npm install @barfinex/key
```

---

## What's included

| Export | Purpose |
|--------|--------|
| `KeyModule` | NestJS module for key management. |
| `KeyService` | Get/store API keys and credentials for connectors. |

---

## Documentation

- **Provider (uses keys for exchanges)** — [Installation provider](https://barfinex.com/docs/installation-provider), [Docker Compose for Provider](https://barfinex.com/docs/installation-provider-docker-compose), [Understanding Provider Logs](https://barfinex.com/docs/installation-provider-logs).
- **Security & setup** — [Local Certificates Setup](https://barfinex.com/docs/local-certificates-setup), [Registering Provider in Studio](https://barfinex.com/docs/configuration-studio-provider).
- **Barfinex** — [First Steps](https://barfinex.com/docs/first-steps), [Architecture](https://barfinex.com/docs/architecture), [Typical problems and solutions](https://barfinex.com/docs/troubleshooting).

---

## Contributing

Improvements and security best-practice suggestions welcome. Community: [Telegram](https://t.me/barfinex) · [GitHub](https://github.com/barfinex).

---

## License

Licensed under the [Apache License 2.0](LICENSE) with additional terms. Attribution to **Barfin Network Limited** and a link to [https://barfinex.com](https://barfinex.com) are required. See [LICENSE](LICENSE) and the [Barfinex site](https://barfinex.com) for details.
