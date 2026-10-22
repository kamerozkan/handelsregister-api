# Handelsregister API - German Company Register Scraper

Handelsregister API for German company register records from handelsregister.de: register court and number, legal form, seat, status, former names, address, share capital, purpose and officers from the structured register content. Search by name, city or register number.

**[Run it on Apify Store](https://apify.com/kamerozkan/handelsregister-api)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/handelsregister-api); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/handelsregister-api).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/handelsregister-api) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "searchTerms": [
    "Trade Republic Bank"
  ],
  "includeDetails": true,
  "maxResultsPerSearch": 5,
  "maxItems": 5,
  "proxyConfiguration": {
    "useApifyProxy": true
  }
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "searchQuery": "Software",
    "name": "ADD Flow Software GmbH",
    "registerCourt": "Amtsgericht Leipzig",
    "registerType": "HRB",
    "registerNumber": "32835",
    "registerId": "Amtsgericht Leipzig HRB 32835",
    "registerNote": null,
    "state": "Sachsen",
    "seat": "Leipzig",
    "status": "active",
    "statusRaw": "aktuell",
    "formerNames": [],
    "availableDocuments": [
      "AD",
      "CD",
      "HD",
      "DK",
      "UT",
      "VÖ",
      "SI"
    ],
    "legalForm": "Gesellschaft mit beschränkter Haftung",
    "legalFormSource": "register",
    "officialName": "ADD Flow Software GmbH",
    "euid": null,
    "legalFormCode": "221110",
    "street": "Gohliser Straße",
    "houseNumber": "7",
    "postalCode": "04105",
    "city": "Leipzig",
    "shareCapital": 25000,
    "shareCapitalCurrency": "EUR",
    "businessPurpose": "die Erstellung, Vertrieb und Verkauf von Software, IT-Lösungen und WEB-Anwendungen sowie Erbringung von Schulung- und Consultingleistungen.",
    "representationRule": null,
    "foundingDate": null,
    "statuteDate": "2016-07-06",
    "lastStatuteChange": null,
    "lastRegisterEntry": "2016-08-18",
    "numberOfRegisterEntries": 1,
    "officers": [
      {
        "name": "Steffen Stolze",
        "role": "Geschäftsführer",
        "type": "person"
      }
    ],
    "branches": [],
    "detailsError": null,
    "scrapedAt": "2026-10-22T17:03:18+00:00"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/handelsregister-api/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
