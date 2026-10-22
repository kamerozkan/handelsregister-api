#!/usr/bin/env bash
# Run handelsregister-api synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~handelsregister-api/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchTerms": ["Trade Republic Bank"], "includeDetails": true, "maxResultsPerSearch": 5, "maxItems": 5, "proxyConfiguration": {"useApifyProxy": true}}'
