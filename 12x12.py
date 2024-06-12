import json
import requests

# Charger les données du fichier JSON
with open('12x12.json', 'r') as file:
    data = json.load(file)

url = data['url']
headers = data['headers']
body = data['body']

# Faire la requête POST
response = requests.post(url, headers=headers, json=body)

# Afficher la réponse
print(response.json())
