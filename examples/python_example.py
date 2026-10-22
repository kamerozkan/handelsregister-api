"""Run handelsregister-api on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'searchTerms': ['Trade Republic Bank'],
 'includeDetails': True,
 'maxResultsPerSearch': 5,
 'maxItems': 5,
 'proxyConfiguration': {'useApifyProxy': True}}
run = client.actor("kamerozkan/handelsregister-api").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
