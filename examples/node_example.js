// Run handelsregister-api on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "searchTerms": [
    "Trade Republic Bank"
  ],
  "includeDetails": true,
  "maxResultsPerSearch": 5,
  "maxItems": 5,
  "proxyConfiguration": {
    "useApifyProxy": true
  }
};
const run = await client.actor('kamerozkan/handelsregister-api').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
