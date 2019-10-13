# Friendly Http Status

Translates http status code to minimal friendly object containing description and emoji 😃

![GitHub Actions Status](https://github.com/harshzalavadiya/friendly-http-status/workflows/NodeJS/badge.svg)
![NPM](https://img.shields.io/npm/v/friendly-http-status.svg)
![gzip](https://badgen.net/bundlephobia/minzip/friendly-http-status)

## 🔧 Installation

```sh
npm i friendly-http-status
```

## 📦 Usage

```javascript
import { getFriendlyError } from "friendly-http-status";

console.log(getFriendlyError(404));
```

## 👀 Response

`getFriendlyError` always returns json object with following property even if code unknown it will return unknown error object

```json
{
  "emoji": "❓",
  "message": "Not Found",
  "description": "The requested page could not be found but may be available again in the future."
}
```

## 🤠 Credits

- Emoji dataset is taken from [http-status-extra](https://github.com/aasaam/http-status-extra) and stripped to minimal
- [microbundle](https://github.com/developit/microbundle) for packaging
- [TypeScript](https://github.com/microsoft/TypeScript)
